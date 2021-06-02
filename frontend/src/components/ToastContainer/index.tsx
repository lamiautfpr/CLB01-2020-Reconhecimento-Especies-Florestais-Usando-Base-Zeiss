import React from 'react';
import { useTransition } from 'react-spring';
import { IToastMensagem } from '../../hooks/toast';
import Toast from './Toast';

import { Container } from './styles';

interface IToastContainerProps {
  mensagens: IToastMensagem[];
}

const ToastContainer: React.FC<IToastContainerProps> = ({ mensagens }) => {
  const mensagemComTrasicao = useTransition(
    mensagens,
    mensagem => mensagem.id,
    {
      from: { right: '-120%', opacity: '0' },
      enter: { right: '0%', opacity: '1' },
      leave: { right: '-120%', opacity: '0' },
    },
  );
  return (
    <Container top={window.scrollY + 80}>
      {mensagemComTrasicao.map(({ item, key, props }) => (
        <Toast key={key} style={props} mensagem={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
