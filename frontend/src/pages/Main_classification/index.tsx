import React from 'react';

import { Container, ContentDrop, Content, ResultTopThree } from './styles';

// Componente tsx
import DragDrop from '../../components/DragDrop';
import NavBar from '../../components/NavBar';
import ResultTop from '../../components/ResultTopThree';
import { FileProvider } from '../../interfaces';

const MainClassification: React.FC = () => {
  return (
    <FileProvider>
      <Container>
        <NavBar />
        <Content>
          <ContentDrop>
            <DragDrop />
          </ContentDrop>
          <ResultTopThree>
            <ResultTop />
          </ResultTopThree>
        </Content>
      </Container>
    </FileProvider>
  );
};

export default MainClassification;
