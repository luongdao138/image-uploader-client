import { Button, Divider, Dropzone, Title } from './ImageUpload.styles';
import { useDropzone } from 'react-dropzone';
import Logo from '../../assets/image.svg';
import { useRef } from 'react';
import { useAppContext } from '../../context';

const ImageUpload = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { setFile } = useAppContext();

  const { getRootProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptFiles: File[]) => {
      setFile(acceptFiles[0]);
    },
  });

  return (
    <>
      <Title small={false}>Upload your image</Title>
      <Title small>File should be Jpeg, Png</Title>
      <Dropzone {...getRootProps()}>
        <img src={Logo} alt='' />
        <span>Drag & Drop your image here</span>
      </Dropzone>
      <Divider>Or</Divider>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          type='file'
          ref={inputRef}
          style={{ display: 'none' }}
          onChange={(e) => {
            if (!e.target.files) return;
            setFile(e.target.files[0]);
          }}
        />
        <Button onClick={() => inputRef.current?.click()}>Choose a file</Button>
      </div>
    </>
  );
};

export default ImageUpload;
