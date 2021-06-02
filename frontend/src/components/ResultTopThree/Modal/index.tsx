import React, { useCallback, useState, useEffect } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import {useFiles} from '../../../interfaces'
import Exemplo1 from '../../../assets/3553.png';
import Exemplo2 from '../../../assets/3872.png';
import Exemplo3 from '../../../assets/032017.png';
import {teste} from '../../../assets/class'
import {splitWordEnd, splitWordFull} from '../../../functions';

import {
  Container,
  ModalBox,
  TopThree,
  Info,
  Grafic,
  BarGrafic,
  ButtonBt,
} from './styles';

export interface ISelectTopProps {
  nameCietific: string,
  namePop: string,
  img: string,
  id: Number,
};


const Modal: React.FC = (props) => {
  const {responseFile} = useFiles();
  
  const DataModal: [ISelectTopProps[]] = [];
  props.data.map((item, index) => {
    if( index === props.buttonId) 
      // DataModal.push(item[2]);
      DataModal.push(item[2].map((element, indexElement)=>({
        nameCietific: splitWordFull(element.name),
        namePop: splitWordEnd(element.name),
        img: Exemplo2,
        id: indexElement,
      })))
  })


  // const [selectTop, setSelectTop] = useState<ISelectTopProps[]>([])
  const [selectTop, setSelectTop] = useState<ISelectTopProps>(
    {}
  );


  

  const [show, setShow] = useState(false);

  const handleColse = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelect = useCallback(
    id => {
      // setSelectTop(DataModal[0].findIndex(indexElement => indexElement === index))
      setSelectTop(DataModal[0].find(elemento => elemento.id === id));
    },
    [DataModal[0]],
  );

  return (
    <Container>
      <ButtonBt onClick={handleShow}>detalhes</ButtonBt>
      <ModalBox contentClassName="teste" show={show} onHide={handleColse}>
        <ModalBox.Header closeButton>
          <ModalBox.Title>Detalhes</ModalBox.Title>
        </ModalBox.Header>
        {DataModal[0] && (

        <ModalBox.Body>

          <TopThree idn={selectTop.id}>
            {DataModal[0].map((item) => (
              <button type="submit" onClick={() => handleSelect(item.id)}>
                <img key={item.id} src={item.img} alt="" />
              </button>
            ))}
          </TopThree>
          <Info>
            <div className="names">
              <p>
                Nome cientifico:&nbsp;
                {selectTop.nameCietific}
              </p>
              <p>
                Nome popular:&nbsp;
                {selectTop.namePop}
              </p>
            </div>
            <div className="download">
              Relatorio PDF
              <FaFilePdf />
            </div>
          </Info>
          <Grafic>
            { !!responseFile[props.buttonId] && responseFile[props.buttonId].resuts.map((item)=>(
              <div key={splitWordEnd(item.name)}className="content">
              <p>{item.percentage}</p>
              <BarGrafic percentage={item.percentage} />
              <p>{splitWordEnd(item.name)}</p>
            </div>
            ))}
            
          </Grafic>

        </ModalBox.Body>
          )}

        {/* <ModalBox.Footer>
          <Button variant="secondary" onClick={handleColse}>
            Close
          </Button>
        </ModalBox.Footer> */}
      </ModalBox>
    </Container>
  );
};

export default Modal;
