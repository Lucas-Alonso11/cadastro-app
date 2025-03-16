// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './pages/Home';
import Clientes from './pages/Clientes';
import Sobre from './pages/Sobre'; // Crie este componente
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [usuario, setUsuario] = useState(null);

  const handleLogin = (email) => {
    setUsuario(email);
  };

  return (
    <Router>
      <Header usuario={usuario} />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/clientes"
          element={usuario ? <Clientes /> : <Navigate to="/login" />}
        />
        <Route path="/sobre" element={<Sobre />} /> {/* Rota para a tela "Sobre" */}
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;