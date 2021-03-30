import styled from 'styled-components';

// Interfaces
import { PreviewProps } from '../../interfaces';

export const Container = styled.div`
  width: 82%;
  align-items: center;
  margin: 0px auto;
  border-radius: 8px;
  background-color: rgba(0.1, 0, 0, 0.2);

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1px;
    color: #444;

    & + li {
      margin-top: 20px;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  margin: auto;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 13px;
      font-family: Arial, Helvetica, sans-serif;
      color: black;
      margin-top: 10px;

      button {
        border: 0;
        background: transparent;
        color: #ff3c3c;
        margin-left: 100px;
        cursor: pointer;
      }
    }
  }
`;

export const Preview = styled.div<PreviewProps>`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
`;
export const ButtonDelAll = styled.a.attrs({
  href: '#',
})`
  height: 69px;
  border-radius: 8px;
  background: #eb5757;
  position: absolute;
  top: 576px;
    width: 293px;
`;

export const TextButton = styled.p`
  text-align: center;
  margin: auto;
  width: 232px;
  height: 33px;
  font-size: 29.83px;
  margin-top: 16px;
  cursor: pointer;
`;