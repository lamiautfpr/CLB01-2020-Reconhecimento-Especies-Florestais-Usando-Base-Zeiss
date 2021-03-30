import styled from 'styled-components'; 

// Interfaces
import { ICarroussel } from '../../../interfaces';

export const BoxData = styled.div.attrs({
  className: 'boxdata',
})<ICarroussel>`
  flex: 1;
  overflow: hidden;
  transition: 0.5s;
  height: 109px;
  margin: 0 7%;
  width: 85%;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  background-size: 390px;
  background-position: center;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  padding: 5px;

  span {
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 13.43px;
    margin-left: 10px;
    line-height: 33px;
    color: #FFFFFF;
    background-color: rgba(124,148,61,0.7);
    margin-top: 100px;
    border-radius: 5px;
    padding: 5px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 80%;
`;

export const Content = styled.div`
  width: 100%;
  height: 362.5px;
  display: flex;
  flex-direction: column;

  ${BoxData}:hover {
    flex: 1 1 70%;
  }
`;

export const DataURL = styled.div`
  width: 100%;
  height: 10px;
`;
