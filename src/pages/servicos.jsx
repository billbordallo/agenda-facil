import { useEffect, useState } from "react";
import axios from "axios";
import Notificacao from '../components/notificacao';
import "../styles/index.css";
import "../styles/servicos.css";
import trashCanIcon from '../assets/trash-can-outline.svg';

export default function Servicos() {
  const [ServicosList, setServicosList] = useState([]);
  const [notificacaoAberta, setNotificacaoAberta] = useState(false);
  const [notificacaoMensagem, setNotificacaoMensagem] = useState("");

  useEffect(() => {
    axios
      .get("/servicos.json")
      .then((res) => setServicosList(res.data.servicos))
      .catch((error) => console.log(error));
  }, []);

  const handleRemoveClick = (index) => {
    const updatedList = ServicosList.filter((_, i) => i !== index);
    setServicosList(updatedList);
    setNotificacaoMensagem("Serviço removido");
    setNotificacaoAberta(true); // Mostrar notificação após remover o item
  };

  const handleNotificacaoClose = () => {
    setNotificacaoAberta(false);
  };

  return (
    <section className="servicos-container">
      <h2 className="titulo-servicos">Serviços</h2>
      <table id="tabela-servicos" className="tabela-servicos">
        <thead>
          <tr>
            <th>#</th>
            <th>Serviço</th>
            <th>Descrição</th>
            <th>Duração</th>
            <th>Valor</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody id="servicos">
          {ServicosList.length === 0 ? (
            <tr>
              <td colSpan="6" id="nenhum-pedido">
                Ainda não há nenhum serviço cadastrado.
              </td>
            </tr>
          ) : (
            ServicosList.map((servicos, index) => (
              <tr key={index}>
                <td>{servicos.id}</td>
                <td>{servicos.nome_servico}</td>
                <td>{servicos.desc_servico}</td>
                <td>{servicos.duracao_servico}</td>
                <td>R$ {servicos.valor_servico}</td>
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