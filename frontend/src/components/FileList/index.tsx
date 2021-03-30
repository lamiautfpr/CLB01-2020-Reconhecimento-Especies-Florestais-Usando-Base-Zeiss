import { MdError, MdLink } from 'react-icons/md';
import { useFiles, IDragDrop } from '../../interfaces';

// Functions
import { splitWord } from '../../functions/';

// Styles
import { Container, FileInfo, Preview, ButtonDelAll, TextButton } from './styles';

const FileList = () => {
  const { uploadedFiles: files, deleteFile } = useFiles();

  if (!files.length) {
    return <span />;
  }

  return (
    <Container>
      {files.map((uploadedFile: IDragDrop) => (
        <li key={uploadedFile.id}>
          <FileInfo>
            <Preview src={uploadedFile.preview} />
            <div>
              <strong>{splitWord(uploadedFile.name)}</strong>
              <span>
                {uploadedFile.size}{' '}
                <button onClick={e => deleteFile(uploadedFile.id)}>
                  Excluir
                </button>
              </span>
            </div>
          </FileInfo>

          <div>
            {uploadedFile.url && (
              <a
                href={uploadedFile.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdLink style={{ marginLeft: 8 }} size={24} color="#222" />
              </a>
            )}
            {uploadedFile.error && <MdError size={24} color="#57878" />}
          </div>
        </li>
      ))}

      <ButtonDelAll>
        <TextButton onClick={() =>{deleteFile('-1')}}>Deletar Todos</TextButton>
      </ButtonDelAll>
    </Container>
  );
};

export default FileList;
