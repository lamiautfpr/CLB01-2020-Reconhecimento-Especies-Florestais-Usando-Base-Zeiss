import styled from 'styled-components';
import { VerdeClaro, Verde } from '../../styles/colorPalette';

export const Container = styled.div`
  margin: 12px 42px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-right: 50px;
    width: 508px;

    font-weight: 300;
    font-size: 21.33px;
    a {
      transition: color 0.2s;
      font-variant: small-caps;
      text-decoration: none;
      color: ${VerdeClaro};
      :hover {
        color: ${Verde};
      }
    }
  }
`;
export const teste = styled.div``;
