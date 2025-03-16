// pages/Clientes.js
import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import CadastroCliente from '../components/CadastroCliente';

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [clienteEditando, setClienteEditando] = useState(null);

  // Adicionar ou editar cliente
  const adicionarCliente = (cliente) => {
    if (clienteEditando) {
      // Editar cliente existente
      setClientes((prevClientes) =>
        prevClientes.map((c) => (c.cpf === cliente.cpf ? cliente : c))
      );
      setClienteEditando(null); // Limpa o estado de edição
    } else {
      // Adicionar novo cliente
      setClientes((prevClientes) => [...prevClientes, cliente]);
    }
    setMostrarFormulario(false); // Fecha o formulário
  };

  // Editar cliente
  const editarCliente = (cliente) => {
    setClienteEditando(cliente); // Define o cliente que está sendo editado
    setMostrarFormulario(true); // Abre o formulário
  };

  // Excluir cliente
  const excluirCliente = (cpf) => {
    setClientes((prevClientes) => prevClientes.filter((c) => c.cpf !== cpf));
  };

  return (
    <div>
      <h1>Clientes</h1>
      {mostrarFormulario ? (
        <CadastroCliente
          clienteEditando={clienteEditando}
          onSalvar={adicionarCliente}
          onCancelar={() => setMostrarFormulario(false)}
        />
      ) : (
        <>
          <Button onClick={() => setMostrarFormulario(true)}>Novo Cliente</Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Email</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.cpf}>
                  <td>{cliente.nome}</td>
                  <td>{cliente.cpf}</td>
                  <td>{cliente.email}</td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => editarCliente(cliente)}
                    >
                      Editar
                    </Button>{' '}
                    <Button
                      variant="danger"
                      onClick={() => excluirCliente(cliente.cpf)}
                    >
                      Excluir
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
};

export default Clientes;