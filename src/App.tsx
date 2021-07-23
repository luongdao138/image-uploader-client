import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import ImageUpload from './components/ImageUpload';
import Loading from './components/Loading';
import UploadSuccess from './components/UploadSucess';
import { useAppContext } from './context';
import GlobalStyle from './GlobalStyle';

const App = () => {
  const { loading, previewUrl } = useAppContext();

  return (
    <Wrapper>
      <Content>
        {loading ? (
          <Loading />
        ) : previewUrl ? (
          <UploadSuccess />
        ) : (
          <ImageUpload />
        )}
      </Content>
      <GlobalStyle />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafb;
`;

const Content = styled.div`
  width: 400px;
  max-width: 95%;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 30px 20px;
`;

export default App;
