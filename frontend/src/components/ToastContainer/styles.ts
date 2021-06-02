import styled from 'styled-components';

interface IContainerProps {
  top: number;
}

export const Container = styled.div<IContainerProps>`
  position: absolute;
  right: 0;
  top: ${props => props.top}px;
  padding: 30px;
  overflow: hidden;
`;
