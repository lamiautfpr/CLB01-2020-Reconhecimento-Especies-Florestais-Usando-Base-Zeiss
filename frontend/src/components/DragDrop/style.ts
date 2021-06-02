import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  /* height: 800px; */

  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const DropContainer = styled.div`
  width: 236px;
  height: 220px;
 
  border-radius: 16px;
  background: #7c943d;

  .buttonDrop {
    padding-top: 20px;
    width: 100%;
    height: 110px;
    cursor: pointer;
  }
`;

const MessageColors = {
  default: '#cecece',
  error: '#e70818',
  success: '#78e5d5',
};

interface ITypeMessageColor {
  type?: 'default' | 'error' | 'success';
}

export const UploadMessage = styled.div<ITypeMessageColor>`
  width: 212px;
  margin: 1px auto;
  padding-top: 1.5rem;
  height: 30%;
  color: ${props => MessageColors[props.type || 'default']};
  font-style: normal;
  font-size: 21.33px;
  line-height: 25.04px;
  text-align: center;
  cursor: pointer;
`;

export const ContainerFile = styled.div`
  height: 180px;
  margin-top: 20px;
  overflow-y: auto;
  width: 85%;
`;


