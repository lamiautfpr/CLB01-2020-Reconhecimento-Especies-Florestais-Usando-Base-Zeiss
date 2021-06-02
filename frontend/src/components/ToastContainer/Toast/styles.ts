import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import { VerdeClaro, Erro, Certo, Cinza } from '../../../styles/colorPalette';

interface IContainerProps {
  type?: 'sucesso' | 'erro' | 'info';
  temDescricao: number;
}

const toastTypesVariacoes = {
  info: css`
    background: ${VerdeClaro};
    color: ${Cinza};
  `,
  sucesso: css`
    background: ${Certo};
    color: red;
  `,

  erro: css`
    background: ${Erro};
    color: ${Cinza};
  `,
};

export const Container = styled(animated.div)<IContainerProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 16px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  color: ${Cinza};

  & + div {
    margin-top: 8px;
  }
  ${props => toastTypesVariacoes[props.type || 'info']}
  > svg {
    margin: 2px 12px 0 0;
  }

  div {
    flex: 1;
    font-family: Open Sans;
    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
    p,
    strong {
      font-family: Raleway;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: #313131;
    }
  }
  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }
  ${props =>
    !props.temDescricao &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
`;
