import { createGlobalStyle } from 'styled-components';
import { VerdeFundo, VerdeClaro } from './colorPalette';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: Raleway;
    font-weight: medium;

    list-style-type: none;
    color: ${VerdeClaro};

    
  }
  body {
    background: ${VerdeFundo};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  #root{
    margin:0 auto;
  }
  button{
    cursor: pointer;
  }

`;
