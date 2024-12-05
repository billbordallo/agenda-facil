import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import "../styles/index.css";
import "../styles/novoagendamento.css";

const NovoAgendamento = () => {
    const [formData, setFormData] = useState({
      nome: '',
      email: '',
      celular: '',
      endereco: '',
      data: '',
      hora: '',
      servico: '',
      observacoes: '',
    });

    const [open, setOpen] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setOpen(true); // Exibir o modal ao submeter o formulário
    };

    const handleClose = () => {
        setOpen(false);
      };

    return (
        <section className="novo-agendamento-container">
            <h2 className="titulo-novo-agendamento">Inserir novo agendamento</h2>
            <form className="form-novo-agendamento" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nome">Nome:*</label>
                    <input
                    placeholder="Ex.: João da Silva"
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail:*</label>
                    <input
                    placeholder="Ex.: joao@email.com"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="celular">Celular:*</label>
                    <input
                    placeholder="Ex.: (99) 99999-8888"
                    type="tel"
                    id="celular"
                    name="celular"
                    value={formData.celular}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="endereco">Endereço:*</label>
                    <input
                    placeholder="Ex.: Avenida Atlântica, 123, ap 201"
                    type="text"
                    id="endereco"
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="data">Data:*</label>
                    <input
                    type="date"
                    id="data"
                    name="data"
                    value={formData.data}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="hora">Hora:*</label>
                    <input
                    type="time"
                    id="hora"
                    name="hora"
                    value={formData.hora}
                    onChange={handleChange}
                    required
                    />
                </div>
                <fieldset className="form-group" style={{ gridColumn: '1 / 3' }}>
                    <legend>Selecione o serviço desejado:*</legend>
                    <div className="form-group-radio">
                        <input
                            type="radio"
                            id="corte-de-cabelo"
                            name="servico"
                            value="corte-de-cabelo"
                            checked={formData.servico === 'corte-de-cabelo'}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="corte-de-cabelo">Corte de cabelo</label>
                    </div>
                    <div className="form-group-radio">
                        <input
                            type="radio"
                            id="barba"
                            name="servico"
                            value="barba"
                            checked={formData.servico === 'barba'}
                            onChange={handleChange}
                            required
                            />
                        <label htmlFor="barba">Barba completa</label>
                    </div>
                    <div className="form-group-radio">
                        <input
                            type="radio"
                            id="cabelo-e-barba"
                            name="servico"
                            value="cabelo-e-barba"
                            checked={formData.servico === 'cabelo-e-barba'}
                            onChange={handleChange}
                            required
                            />
                        <label htmlFor="cabelo-e-barba">Cabelo e barba</label>
                    </div>
                    <div className="form-group-radio">
                        <input
                            type="radio"
                            id="hidratacao"
                            name="servico"
                            value="hidratacao"
                            checked={formData.servico === 'hidratacao'}
                            onChange={handleChange}
                            required
                            />
                        <label htmlFor="hidratacao">Hidratação</label>
                    </div>
                </fieldset>
                <div className="form-group" style={{ gridColumn: '1 / 3' }}>
                    <label htmlFor="observacoes">Observações (opcional):</label>
                    <textarea
                        placeholder="Ex.: Casa dos fundos, tocar o interfone"
                        id="observacoes"
                        name="observacoes"
                        value={formData.observacoes}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="form-group" style={{ gridColumn: '1 / 3' }}>
                    <button type="submit">Agendar</button>
                </div>
            </form>
            <Dialog id="resumo-agendamento-modal" open={open} onClose={handleClose}>
                <DialogTitle>Agendamento realizado com sucesso!</DialogTitle>
                <DialogContent>
                <h3 id="resumo-titulo">Resumo do agendamento:</h3>
                <p><strong>Nome:</strong> {formData.nome}</p>
                <p><strong>E-mail:</strong> {formData.email}</p>
                <p><strong>Celular:</strong> {formData.celular}</p>
                <p><strong>Endereço:</strong> {formData.endereco}</p>
                <p><strong>Data:</strong> {formData.data}</p>
                <p><strong>Hora:</strong> {formData.hora}</p>
                <p><strong>Serviço:</strong> {formData.servico}</p>
                <p><strong>Observações:</strong> {formData.observacoes}</p>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Fechar</Button>
                </DialogActions>
            </Dialog>
        </section>
    )
};

export default NovoAgendamento;