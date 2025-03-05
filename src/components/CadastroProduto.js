import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CadastroProduto = () => {
  const [formData, setFormData] = useState({
    nome: '',
    preco: '',
    descricao: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do Produto:', formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite o nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formPreco">
        <Form.Label>Preço</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite o preço"
          name="preco"
          value={formData.preco}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formDescricao">
        <Form.Label>Descrição</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite a descrição"
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
  );
};

export default CadastroProduto;