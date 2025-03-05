import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Home from './pages/Home';
import Cadastros from './pages/Cadastros';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  // Função para verificar se o usuário está autenticado
  const isAuthenticated = () => {
    return user !== null;
  };

  return (
    <Router>
      <Header user={user} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Menu />
          </div>
          <div className="col-md-10">
            <Routes>
              {/* Rota padrão redireciona para o login se não estiver autenticado */}
              <Route
                path="/"
                element={
                  isAuthenticated() ? <Home /> : <Navigate to="/login" replace />
                }
              />
              <Route
                path="/home"
                element={
                  isAuthenticated() ? <Home /> : <Navigate to="/login" replace />
                }
              />
              <Route
                path="/cadastros"
                element={
                  isAuthenticated() ? <Cadastros /> : <Navigate to="/login" replace />
                }
              />
              <Route
                path="/login"
                element={
                  isAuthenticated() ? (
                    <Navigate to="/home" replace />
                  ) : (
                    <Login onLogin={handleLogin} />
                  )
                }
              />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;