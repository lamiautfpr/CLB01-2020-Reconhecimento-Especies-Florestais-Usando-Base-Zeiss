import styled from 'styled-components';

export const ButtonClick = styled.button`
  width: 40px;
  height: 90%;
  background: rgba(0, 0, 0, 0);
  border: 0;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  .containerData {
    display: flex;
    width: 100%;
    height: 65%;
  }
`;

export const ContentImage = styled.div`
  height: 90%;
  width: 45%;
  padding: 2%;

  .containerDB {
    display: flex;
    flex-direction: row-reverse;
  }

  .itemPhoto {
    display: flex;
    flex-direction: column;
  }

  .itemPhoto,
  .itemDB {
    height: 90%;
    width: 40px;
  }
`;

export const ContentList = styled.div`
  height: 90%;
  margin-top: 10px;
  width: 16%;
`;

interface IData {
  url: string;
}

export const imagePreview = styled.div`
  height: 100%;
`;

// Componentes internos do ContentImage
export const Data = styled.div<IData>`
  display: flex;
  width: 100%;
  height: 80%;
  margin-top: 40px;

  .dataImageDB {
    background-image: url(${props => props.urlDB});
    background-size: 100%;
    background-repeat: no-repeat;
    border-radius: 5px;
  }

  .dataImagePhoto {
    background-image: url(${props => props.url});
    background-size: 100%;
    margin-top: 40px;
    border-radius: 5px;
    background-repeat: no-repeat;
  }
`;

// Div responsável por inserir os buttons das três principais espécies
export const DataImage = styled.div`
  width: 90%;
`;

export const DataNumber = styled.div`
  border: 0;
  margin-top: 40px;
  width: 62px;
  color: #f4f8ce;
  height: 62px;

  p {
    padding-top: 10px;
    font-size: 36px;
    border-radius: 9px;
    background: #475023;
    width: 100%;
    height: 100%;
    font-style: normal;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
  }

  p:hover {
    transition: 0.4s ease-in-out;
    background: #7c943d;
    border-radius: 9px;
  }
`;

// Div responsável pelos titulos da página
export const TextImage = styled.div`
  height: 5%;
  width: 90%;

  span,
  h1 {
    position: absolute;
    font-size: 20.9px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
  }

  span {
    width: 303px;
    height: 11%;
    /* padding-top: 35px; */
  }

  h1 {
    width: 130px;
    font-weight: normal;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

// Div Responsável por mostrar a porcentagem e a barra de progresso
export const FooterData = styled.div`
  width: 90%;
  height: 10%;
  margin-top: 65px;

  .percentage {
    font-size: 25px;
    margin-top: 5px;
    margin-bottom: 20px;
  }

  p {
    height: 25px;
    text-align: center;
    margin: auto;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
  }

  .barLinear {
    background-color: rgba(0, 0, 1, 0.5);
    border-radius: 10px;
    width: 200px;
    margin: auto;
  }
`;
