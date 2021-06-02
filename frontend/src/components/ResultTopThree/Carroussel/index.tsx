import React, { useEffect } from 'react';

import { Container, Content, BoxData, DataURL } from './styles';

// Function(s)
import {splitWordFull, concatPathImagem} from '../../../functions';

const Carroussel = (props) => {

  // Inicializa um array vazio para receber os dados.
  const DataReceive: any[] = [];
  let nameImage: any[] = [];

  // Realiza o mapeamento dos dados e então manda somente os dados da imagem correspondente.
  props.data.map((item, index) => {
    if( index === props.buttonId){
      DataReceive.push(item[2]);
      nameImage.push(item[2]);
    }
  });

  return (
    <Container>
      <Content>
        {
          DataReceive.map((item) => (
            item.map((itemFile, indexFile) => (
              <BoxData url={concatPathImagem(itemFile.name)}>
                <span>{indexFile + 1 + '°'} - {splitWordFull(itemFile.name)}</span>
              </BoxData>
            ))
          ))
        }
      </Content>
    </Container>
  );
};
export default Carroussel;
