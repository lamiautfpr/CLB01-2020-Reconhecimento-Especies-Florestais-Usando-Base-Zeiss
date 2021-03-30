import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap';
import {
  VerderBlur,
  VerdeEscuro,
  Verde,
  VerdeClaro,
} from '../../../styles/colorPalette';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { ISelectTopProps } from './index';

interface ISelectTopProps {
  idn: number;
}

interface IGraficProps {
  percentage: number;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonBt = styled(Button)`
  border: none;
  background: none;

  margin-top: 8px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 21.33px;
  text-transform: uppercase;

  color: ${VerderBlur};
  transition: ease 0.3s;

  :hover,
  :active,
  :focus {
    border: none;
    background: none;
    color: ${Verde};
    box-shadow: none;
    border-color: none;
  }
`;

export const ModalBox = styled(Modal)`
  font-family: Raleway;
  font-weight: medium;
  font-variant: small-caps;

  div.teste {
    width: 788px;
    height: 90vh;
    right: 120px;
    background: ${VerdeEscuro};

    border: none;

    .modal-header,
    .modal-body,
    .modal-footer {
      border: none;
    }

    .modal-header span {
      border: 2px solid white;
      border-radius: 4px;
      padding: 0 10px 3px 10px;
    }
    .modal-body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;
export const TopThree = styled.div<ISelectTopProps>`
  display: flex;
  justify-content: space-around;
  margin: 0 16px;
  button {
    border: none;
    background: none;
    /* :hover {
      border: none;
    } */
    img {
      width: 132px;
      height: 132px;

      border-radius: 16px;
      transition: ease 0.3s;

      :hover {
        width: 167px;
        height: 167px;
        border: 2px solid ${VerderBlur};
      }
    }
    /* :nth-child(${props => props.idn}) {
      width: 167px;
      height: 167px;
      border: 2px solid ${VerderBlur};
    } */
  }

  /* img {
    width: 167px;
    height: 167px;
    border: 2px solid ${VerderBlur};
  } */
`;
export const Info = styled.div`
  font-size: 21.33px;

  margin-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div.download {
    width: 203px;
    height: 49px;
    padding: 0 8px;
    border-radius: 8px;
    background: ${Verde};

    display: flex;
    justify-content: space-around;

    align-items: center;
  }
`;
export const Grafic = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  overflow-x: scroll;

  width: 754px;
  height: 208px;

  p {
    width: max-content;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-button {
    width: 37px;
    height: 37px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${VerderBlur};
    border: 0px none ${VerderBlur};
    border-radius: 75px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${VerderBlur};
  }
  ::-webkit-scrollbar-thumb:active {
    background: ${VerderBlur};
  }
  ::-webkit-scrollbar-track {
    background: ${VerdeClaro};
    border: 0px none ${VerdeClaro};
    border-radius: 81px;
  }
  ::-webkit-scrollbar-track:hover {
    background: ${VerdeClaro};
  }
  ::-webkit-scrollbar-track:active {
    background: ${VerdeClaro};
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8px;

    p {
      margin-bottom: 0;
      font-size: 21.33px;
    }
  }
`;

export const BarGrafic = styled.div<IGraficProps>`
  width: 52px;
  height: calc(132.89px * (${props => props.percentage} / 100));
  border-radius: 8px;
  background-color: ${Verde};
`;
