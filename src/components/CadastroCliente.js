// components/CadastroCliente.js
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const CadastroCliente = ({ clienteEditando, onSalvar, onCancelar }) => {
  const [cliente, setCliente] = useState({
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    endereco: ''
  });

  // Preenche o formulário com os dados do cliente que está sendo editado
  useEffect(() => {
    if (clienteEditando) {
      setCliente(clienteEditando);
    } else {
      setCliente({
        nome: '',
        cpf: '',
        email: '',
        telefone: '',
        endereco: ''
      });
    }
  }, [clienteEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSalvar(cliente); // Passa o cliente para a função onSalvar
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="nome">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          name="nome"
          value={cliente.nome}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="cpf">
        <Form.Label>CPF</Form.Label>
        <Form.Control
          type="text"
          name="cpf"
          value={cliente.cpf}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={cliente.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="telefone">
        <Form.Label>Telefone</Form.Label>
        <Form.Control
          type="text"
          name="telefone"
          value={cliente.telefone}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="endereco">
        <Form.Label>Endereço</Form.Label>
        <Form.Control
          type="text"
          name="endereco"
          value={cliente.endereco}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Salvar
      </Button>{' '}
      <Button variant="secondary" onClick={onCancelar}>
        Cancelar
      </Button>
    </Form>
  );
};

export default CadastroCliente;