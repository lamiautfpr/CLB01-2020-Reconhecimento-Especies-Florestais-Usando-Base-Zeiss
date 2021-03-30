import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Madeira1 from '../../assets/Madeira1.png';
import Madeira2 from '../../assets/Madeira2.png';
import NavBar from '../../components/NavBar';
import { CarouselMenu, Container, Title } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <div>
        <Title>
          <h1>Reconhecimento de Espécies Floretais</h1>
          <p>
            Arquitetura de Visão Computacional com Deep Learning para
            classificação de diferentes espécies florestais da Amazônia a partir
            de fotos macroscópicas da madeira cortada, sendo essa uma ferramenta
            para identificação rápida e precisa em campo quando identificados
            cortes e desmatamentos ilegais no bioma, com foco em auxiliar os
            peritos da polícia federal e florestal a reduzir os crimes contra o
            bioma Amazônico.
          </p>
          <Link to="/classification">
            <span>Classificar</span>
            <BsArrowRightShort />
          </Link>
        </Title>
        <CarouselMenu>
          <div>
            <h2>Araucaria</h2>
            <img src={Madeira1} alt="" />
            <h3>98.32%</h3>
          </div>
          <div>
            <h2>Ipe</h2>
            <img src={Madeira2} alt="" />
            <h3>1.08%</h3>
          </div>

          <div>
            <h2>Araucaria</h2>
            <img src={Madeira1} alt="" />
            <h3>98.32%</h3>
          </div>
          <div>
            <h2>Ipe</h2>
            <img src={Madeira2} alt="" />
            <h3>1.08%</h3>
          </div>
          <div>
            <h2>Araucaria</h2>
            <img src={Madeira1} alt="" />
            <h3>98.32%</h3>
          </div>
        </CarouselMenu>
      </div>
    </Container>
  );
};

export default Main;
