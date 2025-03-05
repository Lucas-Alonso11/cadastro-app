import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import CadastroCliente from '../components/CadastroCliente';
import CadastroProduto from '../components/CadastroProduto';

const Cadastros = () => {
  return (
    <Tabs defaultActiveKey="cliente" id="cadastros-tab">
      <Tab eventKey="cliente" title="Cliente">
        <CadastroCliente />
      </Tab>
      <Tab eventKey="produto" title="Produto">
        <CadastroProduto />
      </Tab>
    </Tabs>
  );
};

export default Cadastros;