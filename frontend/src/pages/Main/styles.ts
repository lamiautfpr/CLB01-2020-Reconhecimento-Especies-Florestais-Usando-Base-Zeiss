import styled from 'styled-components';
import PlantaFundo from '../../assets/PlantaFundo.png';
import {
  VerderBlur,
  Verde,
  VerdeEscuro,
  VerdeClaro,
} from '../../styles/colorPalette';

export const Container = styled.div`
  background-image: url(${PlantaFundo});
  background-repeat: no-repeat;
  background-position-y: 210px;

  height: 98vh;

  div {
    display: flex;
    /* justify-content: space-between; */
  }
`;

export const Title = styled.div`
  width: 654px;
  height: 299px;
  margin-top: 56px;
  margin-left: 100px;

  flex-direction: column;

  h1 {
    font-size: 50.51px;
    font-weight: 500;
    line-height: 59px;
    text-transform: uppercase;
  }
  p {
    font-weight: 500;
    font-size: 21.33px;
    line-height: 25px;
    font-variant: small-caps;
    color: ${VerderBlur};
    text-align: justify;
  }
  a {
    padding: 12px 32px;
    width: 231px;
    height: 59px;
    margin-top: 32px;

    background: ${Verde};
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04),
      0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
    border-radius: 8px;

    display: flex;
    align-items: center;

    transition: color 0.2s;
    transition: background 0.2s;

    span {
      font-weight: 500;
      font-size: 28.43px;
      line-height: 33px;
      font-variant: small-caps;
      :hover {
      }
    }
    svg {
      font-size: 120px;
      color: ${VerdeEscuro};
    }
    :hover {
      background: ${VerdeClaro};
      text-decoration: none;

      span {
        color: ${VerdeEscuro};
      }
      svg {
        fill: ${VerdeEscuro};
      }
    }
  }
`;

export const CarouselMenu = styled.div`
  display: flex;
  align-items: center;
  transform: translateX(60px);

  @keyframes display {
    0% {
      transform: translateX(200px);
      opacity: 0;
    }
    10% {
      transform: translateX(0);
      opacity: 1;
    }
    20% {
      transform: translateX(0);
      opacity: 1;
    }
    30% {
      transform: translateX(-200px);
      opacity: 0;
    }
    100% {
      transform: translateX(-200px);
      opacity: 0;
    }
  }

  > div {
    flex-direction: column;
    align-items: center;
    opacity: 0;
    animation: display 10s infinite;
    position: absolute;
    top: 0;

    h2 {
      font-weight: 500;
      font-size: 37.9px;
      line-height: 44px;
      font-variant: small-caps;
      transform: translateX(-90px);
    }
    img {
      width: 325px;
      height: 433px;
      filter: drop-shadow(0px 16px 24px rgba(0, 0, 0, 0.06)),
        drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.04)),
        drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.04));
      border-radius: 16px;

      margin: 4px;
    }
    h3 {
      font-weight: 500;
      font-size: 37.9px;
      line-height: 44px;
    }
    /* div.after {
      h2 {
        font-weight: 500;
        font-size: 28.43px;
        line-height: 33px;
        color: ${VerderBlur};
      }
      img {
        width: 292.5px;
        height: 389.7px;
        background: url(3283.jpg);
        filter: drop-shadow(0px 16px 24px rgba(0, 0, 0, 0.06)),
          drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.04)),
          drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.04));
      }
      h3 {
        font-weight: 500;
        font-size: 28.43px;
        line-height: 33px;
      }
    }  */
  }
  div:nth-child(2) {
    animation-delay: 2s;
  }
  div:nth-child(3) {
    animation-delay: 4s;
  }
  div:nth-child(4) {
    animation-delay: 6s;
  }
  div:nth-child(5) {
    animation-delay: 8s;
  }
`;
