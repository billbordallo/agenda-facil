import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Agendamentos from './pages/agendamentos';
import Servicos from './pages/servicos';
import BuscaData from './pages/busca-data.jsx';
import NovoAgendamento from './pages/novo-agendamento.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Agendamentos />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/busca-data" element={<BuscaData />} />
      <Route path="/novo-agendamento" element={<NovoAgendamento />} />
    </Routes>
  );
};

export default AppRoutes;