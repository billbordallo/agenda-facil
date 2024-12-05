import { useEffect, useState } from "react";
import axios from 'axios';
import Notificacao from '../components/notificacao';
import Dropdown from '../components/dropdown';
import menuDownIcon from '../assets/menu-down.svg';
import "../styles/index.css";
import "../styles/buscadata.css";
import trashCanIcon from '../assets/trash-can-outline.svg';

const BuscaData = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [filteredAgendamentos, setFilteredAgendamentos] = useState([]);
  const [editingStatus, setEditingStatus] = useState(null);
  const [dropdownOpenIndex, setDropdownOpenIndex] = useState(null);
  const [notificacaoAberta, setNotificacaoAberta] = useState(false);
  const [notificacaoMensagem, setNotificacaoMensagem] = useState("");

  useEffect(() => {
    if (selectedDate) {
      axios.get('/agendamentos.json')
        .then(response => {
          const agendamentos = response.data.agendamentos;
          const formattedDate = formatDate(selectedDate);
          const filtered = agendamentos.filter(agendamento => agendamento.data_cliente === formattedDate);
          setFilteredAgendamentos(filtered);
        })
        .catch(error => {
          console.error('Erro ao carregar agendamentos:', error);
        });
    }
  }, [selectedDate]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  const handleStatusClick = (index) => {
    setEditingStatus(index);
    setDropdownOpenIndex(index); // Abre o dropdown para a linha clicada
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedList = filteredAgendamentos.map((agendamento, i) =>
      i === index ? { ...agendamento, status_agendamento: newStatus } : agendamento
    );
    setFilteredAgendamentos(updatedList);
    setEditingStatus(null);
    setDropdownOpenIndex(null);
    setNotificacaoMensagem("Status atualizado");
    setNotificacaoAberta(true); // Mostrar notificação após atualizar o status
  };

  const handleRemoveClick = (index) => {
    const updatedList = filteredAgendamentos.filter((_, i) => i !== index);
    setFilteredAgendamentos(updatedList);
    setNotificacaoMensagem("Agendamento removido");
    setNotificacaoAberta(true); // Mostrar notificação após remover o item
  };

  const handleNotificacaoClose = () => {
    setNotificacaoAberta(false);
  };

  return (
    <section className="buscadata-container">
      <h2 className="titulo-buscadata">Agendamentos - Busca por data</h2>
      <form className="buscadata-form">
        <label htmlFor="date">Selecione uma data para ver os agendamentos do dia selecionado:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </form>
      {selectedDate && (
      <table id="tabela-agendamentos" className="tabela-agendamentos">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Celular</th>
            <th>Endereço</th>
            <th>Data</th>
            <th>Hora</th>
            <th>Serviço</th>
            <th>Status</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody id="agendamentos">
          {filteredAgendamentos.length > 0 ? (
            filteredAgendamentos.map((agendamento, index) => (
              <tr key={index}>
                <td>{agendamento.id}</td>
                <td>{agendamento.nome_cliente}</td>
                <td>{agendamento.email_cliente}</td>
                <td>{agendamento.celular_cliente}</td>
                <td>{agendamento.endereco_cliente}</td>
                <td>{agendamento.data_cliente}</td>
                <td>{agendamento.hora_cliente}</td>
                <td>{agendamento.servico_cliente}</td>
                <td 
                    className="status-cell"
                    style={{ backgroundImage: `url(${menuDownIcon})` }}
                    onClick={() => handleStatusClick(index)}
                >
                  {editingStatus === index ? (
                    <Dropdown
                      options={["Aguardando confirmação", "Confirmado", "Cancelado", "Concluído"]}
                      value={agendamento.status_agendamento}
                      onChange={(newStatus) => handleStatusChange(index, newStatus)}
                      isOpen={dropdownOpenIndex === index} // Verifica se o dropdown deve estar aberto para esta linha
                      setIsOpen={() => setDropdownOpenIndex(index)} // Define o índice da linha que está sendo editada
                    />
                  ) : (
                    agendamento.status_agendamento
                  )}
                </td>
                <td>
                  <a onClick={() => handleRemoveClick(index)}>
                    <img src={trashCanIcon} alt="Remover" />
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" id="nenhum-pedido">
                Não há nenhum agendamento cadastrado para a data selecionada.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      )}
      <Notificacao open={notificacaoAberta} handleClose={handleNotificacaoClose} message={notificacaoMensagem} />
    </section>
  );
};

export default BuscaData;