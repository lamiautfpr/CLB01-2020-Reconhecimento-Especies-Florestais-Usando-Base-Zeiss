import React, { createContext, useContext, useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToastContainer from '../components/ToastContainer';

export interface IToastMensagem {
  id: string;
  type?: 'sucesso' | 'erro' | 'info';
  titulo: string;
  descricao?: string;
}

interface IToastContextProps {
  addToast(mensagem: Omit<IToastMensagem, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContex = createContext<IToastContextProps>({});

const ToastProvider: React.FC = ({ children }) => {
  const [mensagens, setMensagens] = useState<IToastMensagem[]>([]);

  const addToast = useCallback(
    ({ type, titulo, descricao }: Omit<IToastMensagem, 'id'>) => {
      const id = uuidv4();

      const mensagenNova = {
        id,
        type,
        titulo,
        descricao,
      };
      setMensagens(mensagensVelhas => [...mensagensVelhas, mensagenNova]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMensagens(state => state.filter(mensagem => mensagem.id !== id));
  }, []);

  return (
    <ToastContex.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer mensagens={mensagens} />
    </ToastContex.Provider>
  );
};

function useToast(): IToastContextProps {
  const context = useContext(ToastContex);

  if (!context) {
    throw new Error('useToast deve ser usado dentro de um ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
