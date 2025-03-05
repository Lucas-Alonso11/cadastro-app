import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = ({ user }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Sistema de Cadastro</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Usuário: {user ? user : 'Não logado'}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;