// src/pages/Home.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate

const Home = () => {
  const navigate = useNavigate(); // Hook para navegação

  return (
    <Container className="text-center mt-5">
      <h1>Bem-vindo ao Sistema de Cadastro</h1>
      <p>
        Este é um sistema de gerenciamento desenvolvido com React, React-Router-Dom e React-Bootstrap.
      </p>

      {/* Botões com navegação */}
      <Button
        variant="primary"
        className="m-2"
        onClick={() => navigate('/')} // Navega para a Home
      >
        Home
      </Button>

      <Button
        variant="success"
        className="m-2"
        onClick={() => navigate('/clientes')} // Navega para a tela de cadastro
      >
        Cadastro
      </Button>

      <Button
        variant="info"
        className="m-2"
        onClick={() => navigate('/sobre')} // Navega para a tela "Sobre o Sistema"
      >
        Sistema de Cadastro
      </Button>
    </Container>
  );
};

export default Home;