import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { backendUrl } from './config';

interface StateType {
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  loading: boolean;
  previewUrl: string | undefined;
  setPreviewUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ALLOW_FORMATS: string[] = ['image/jpeg', 'image/png', 'image/jpg'];

const AppContext = createContext<StateType>({} as StateType);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (error) alert(error);
  }, [error]);

  useEffect(() => {
    if (!file) return;
    if (!ALLOW_FORMATS.includes(file.type)) {
      alert('File should be jpeg, png or jpg!');
      return;
    }
    console.log(file.type);
    const uploadImage = async () => {
      try {
        setLoading(true);
        const formData: FormData = new FormData();
        formData.append('image', file);
        const { data } = await axios.post(`${backendUrl}/upload`, formData);
        setPreviewUrl(data.secure_url);
      } catch (error) {
        console.log(error);
        setError('Error happened, cannot upload the image!');
      } finally {
        setLoading(false);
      }
    };

    uploadImage();
  }, [file]);

  return (
    <AppContext.Provider
      value={{ setFile, loading, previewUrl, setPreviewUrl }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
