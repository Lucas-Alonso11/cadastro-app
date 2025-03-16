// src/pages/Sobre.js
import React from 'react';
import { Container } from 'react-bootstrap';

const Sobre = () => {
  return (
    <Container className="text-center mt-5">
      <h1>Sobre o Sistema de Cadastro</h1>
      <p>
        Este sistema foi desenvolvido para gerenciar cadastros de clientes, produtos, fornecedores e muito mais.
      </p>
      <p>
        Tecnologias utilizadas: React, React Router, React Bootstrap.
      </p>
    </Container>
  );
};

export default Sobre;