import React, { useCallback, useEffect, useState } from 'react';

// [+] Bibliotecas

// Icon(s)
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

// Progress Bar
import LinearProgress from '@material-ui/core/LinearProgress';
import Modal from './Modal';
import { useFiles, IDragDrop, IResponse } from '../../interfaces';

import {
  Container,
  ContentImage,
  imagePreview,
  Data,
  DataImage,
  TextImage,
  FooterData,
  ButtonClick,
} from './styles';

// Componente

import Carroussel from './Carroussel';

const ResultTopThree: React.FC = () => {
  const { responseFile, uploadedFiles } = useFiles();
  const [buttonId, setbuttonId] = useState(0); 
  const [imagePreview, setImagePreview] = useState("");
  const [percentage, setPercentage] = useState("");

  // Array responsável por armazenar os dados 
  const responseData: any[] = [];

  responseFile.map((itemFile, indexFile) => {
    const fileItem = uploadedFiles[indexFile].preview;
    const objectFile: any[] = [
      indexFile,
      fileItem,
    ];
    const temp: any[] = []; // Inicializa um array vazio e temporario para juntar os dados
    let maior = 0;
    itemFile.resuts.map((item, index) => {
      if( index < 3){
        temp.push(item);
        item.percentage >= maior ? maior = item.percentage : '';
      }
    });
    objectFile.push(temp);
    objectFile.push(maior);
    responseData.push(objectFile);
  });

  useEffect(() => {
    setImagePreview("");
    setPercentage("");
    if(responseData.length > 0){
      if(responseData[buttonId][1] !== null)
        setImagePreview(responseData[buttonId][1]);
      setPercentage(responseData[buttonId][3]);
    }
      
  })

  // Realiza as operações para mudança de imagens, no caso o estado de cada imagem.

  const handleFile = useCallback((valueBool: Boolean, dataFile) => {
    if(valueBool){
      buttonId + 1 < dataFile.length?setbuttonId(buttonId + 1): setbuttonId(dataFile.length - 1);
      
    }else{
      buttonId - 1 >= 0? setbuttonId(buttonId - 1): setbuttonId(0);
    }
  }, [buttonId]);
  
  return (
    <Container>
      <div className="containerData">
        {/* Container responsável por exibir a imagem enviada pelo usuário */}
        <ContentImage>
          <TextImage>
            <span>SUA FOTO</span>
          </TextImage>
          {/* Carrega a imagem para o usuário através do preview recebido pela variável 'uploadedFiles' */}
          <Data className="containerPhoto" url={imagePreview}>
            <ButtonClick>
              <BsChevronLeft className="itemPhoto" onClick={() => {handleFile(false, responseData)}}/>
            </ButtonClick>
            <DataImage className="dataImagePhoto" />
          </Data>
        </ContentImage>
        
        {/* Container responsável por exibir os dados da imagem, no caso os resultados */}
        <ContentImage>
          <TextImage>
            <span>RESULTADOS</span>
          </TextImage>
          <Data className="containerDB" url={''}>
            <ButtonClick>
              <BsChevronRight className="itemDB" onClick={() => {handleFile(true, responseData)}} />
            </ButtonClick>
            <Carroussel data={responseData} buttonId={buttonId} />
          </Data>
        </ContentImage>
      </div>

      {/* Div responsável por indicar os detalhes e o button para exibir os detalhes */}
      <FooterData>
        <p className="percentage">{percentage != '' ? percentage + '%' : '0%' }</p>
        <LinearProgress
          className="barLinear"
          value={percentage != '' ? percentage : 0 }
          color="secondary"
          variant="determinate"
        />
        <Modal data={responseData} buttonId={buttonId}/>
      </FooterData>
    </Container>
  );
};

export default ResultTopThree;
