import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import { Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <ul>
        <li>
          <Link to="/classification">Classificador</Link>
        </li>
        <li>
          <Link to="/">Pesquisa</Link>
        </li>
        <li>
          <Link to="/">Contatos</Link>
        </li>
      </ul>
    </Container>
  );
};

export default NavBar;
