import { useEffect, useState } from "react";
import axios from "axios";
import Notificacao from '../components/notificacao';
import Dropdown from '../components/dropdown';
import menuDownIcon from '../assets/menu-down.svg';
import "../styles/index.css";
import "../styles/agendamentos.css";
import trashCanIcon from '../assets/trash-can-outline.svg';

export default function Agendamentos() {
  const [AgendamentosList, setAgendamentosList] = useState([]);
  const [editingStatus, setEditingStatus] = useState(null);
  const [dropdownOpenIndex, setDropdownOpenIndex] = useState(null); // Armazena o índice da linha que está sendo editada
  const [notificacaoAberta, setNotificacaoAberta] = useState(false);
  const [notificacaoMensagem, setNotificacaoMensagem] = useState("");

  useEffect(() => {
    axios
      .get("/agendamentos.json")
      .then((res) => setAgendamentosList(res.data.agendamentos))
      .catch((error) => console.log(error));
  }, []);

  const handleStatusClick = (index) => {
    setEditingStatus(index);
    setDropdownOpenIndex(index); // Abre o dropdown para a linha clicada
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedList = AgendamentosList.map((agendamento, i) =>
      i === index ? { ...agendamento, status_agendamento: newStatus } : agendamento
    );
    setAgendamentosList(updatedList);
    setEditingStatus(null);
    setDropdownOpenIndex(null); // Fecha o dropdown após a seleção
    setNotificacaoMensagem("Status atualizado");
    setNotificacaoAberta(true); // Mostrar notificação após atualizar o status
  };

  const handleRemoveClick = (index) => {
    const updatedList = AgendamentosList.filter((_, i) => i !== index);
    setAgendamentosList(updatedList);
    setNotificacaoMensagem("Agendamento removido");
    setNotificacaoAberta(true); // Mostrar notificação após remover o item
  };

  const handleNotificacaoClose = () => {
    setNotificacaoAberta(false);
  };

  return (
    <section className="agendamentos-container">
      <h2 className="titulo-agendamentos">Agendamentos</h2>
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
          {AgendamentosList.length === 0 ? (
            <tr>
              <td colSpan="10" id="nenhum-pedido">
                Ainda não há nenhum agendamento cadastrado. Envie o link para seus clientes para que eles realizem um agendamento.
              </td>
            </tr>
          ) : (
            AgendamentosList.map((agendamento, index) => (
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
          )}
        </tbody>
      </table>
      <Notificacao open={notificacaoAberta} handleClose={handleNotificacaoClose} message={notificacaoMensagem} />
    </section>
  );
}