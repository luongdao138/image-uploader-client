import { Button, Copy, Icon, Image, Title } from './UploadSuccess.styles';
import { MdCheckCircle } from 'react-icons/md';
import { useAppContext } from '../../context';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

const UploadSuccess = () => {
  const { previewUrl, setFile, setPreviewUrl } = useAppContext();
  const [isCopied, setIsCopied] = useState<boolean>(false);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Icon>
          <MdCheckCircle />
        </Icon>
      </div>
      <Title>Upload Successfully</Title>
      <Image src={previewUrl} />
      <Copy>
        <p>{previewUrl}</p>
        <CopyToClipboard
          text={previewUrl as string}
          onCopy={() => {
            setIsCopied(true);
          }}
        >
          <button>{isCopied ? 'Copied' : 'Copy Link'}</button>
        </CopyToClipboard>
      </Copy>

      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
        <Button
          onClick={() => {
            setIsCopied(false);
            setFile(null);
            setPreviewUrl(undefined);
          }}
        >
          Continue
        </Button>
      </div>
    </>
  );
};

export default UploadSuccess;
