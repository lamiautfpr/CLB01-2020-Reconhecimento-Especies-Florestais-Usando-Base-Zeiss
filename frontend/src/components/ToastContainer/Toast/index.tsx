import React, { useEffect } from 'react';
import {
  FiAlertTriangle,
  FiXSquare,
  FiCheckSquare,
  FiInfo,
} from 'react-icons/fi';
import { IToastMensagem, useToast } from '../../../hooks/toast';
import { Container } from './styles';

interface IToastProps {
  mensagem: IToastMensagem;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  sucesso: <FiCheckSquare size={24} />,
  erro: <FiAlertTriangle size={24} />,
};
const Toast: React.FC<IToastProps> = ({ mensagem, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(mensagem.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [mensagem.id, removeToast]);

  return (
    <Container
      type={mensagem.type}
      temDescricao={Number(!!mensagem.descricao)}
      style={style}
    >
      {icons[mensagem.type || 'info']}

      <div>
        <strong>{mensagem.titulo}</strong>
        {mensagem.descricao && <p>{mensagem.descricao}</p>}
      </div>
      <button onClick={() => removeToast(mensagem.id)} type="button">
        <FiXSquare size={18} />
      </button>
    </Container>
  );
};

export default Toast;
