import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

// Biblioteca
// import { IoMdCloudUpload } from '@react-icons/all-files/io/IoMdCloudUpload';
import { IoMdCloudUpload } from 'react-icons/io';
import FileList from '../FileList';

// Interfaces
import { useFiles } from '../../interfaces';

// Styles
import {
  DropContainer,
  Container,
  ContainerFile,
  UploadMessage,
} from './style';

// Functions
const DragDrop: React.FC = () => {
  const { fileUploaded, deleteFile } = useFiles();

  const onDrop = useCallback(
    items => {
      fileUploaded(items);
    },
    [fileUploaded],
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
  } = useDropzone({
    accept: ['image/jpeg', 'image/pjpeg', 'image/png'],
    onDrop,
  });

  const renderDragMessage = useCallback(() => {
    if (!isDragActive) {
      return <UploadMessage>Arraste as imagens aqui... </UploadMessage>;
    }

    if (isDragReject) {
      return (
        <UploadMessage type="error">
          Tipo de arquivo não suportado
        </UploadMessage>
      );
    }

    return <UploadMessage type="success">Solte as imagens aqui</UploadMessage>;
  }, [isDragActive, isDragReject]);

  return (
    <Container>
      <DropContainer {...getRootProps()}>
        <IoMdCloudUpload className="buttonDrop" />
        <input {...getInputProps()} />
        {renderDragMessage()}
      </DropContainer>

      <ContainerFile>
        <FileList />
      </ContainerFile>
      
    </Container>
  );
};

export default DragDrop;
