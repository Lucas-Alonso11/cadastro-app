// components/Login.js
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate para redirecionar

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate(); // Hook para redirecionamento

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples
    if (email === 'admin@example.com' && senha === '123456') {
      setErro(''); // Limpa o erro
      onLogin(email); // Chama a função de login passada como prop
      navigate('/clientes'); // Redireciona para a página de clientes
    } else {
      setErro('Credenciais inválidas.'); // Exibe mensagem de erro
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="senha">
        <Form.Label>Senha</Form.Label>
        <Form.Control
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
      </Form.Group>

      {erro && <Alert variant="danger">{erro}</Alert>}

      <Button variant="primary" type="submit">
        Entrar
      </Button>
    </Form>
  );
};

export default Login;