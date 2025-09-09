import ServicoTransacao from "./ServicoTransacao";

class Servicos {
  get transacao() {
    return new ServicoTransacao();
  }
}

const servicos = new Servicos();
export default servicos;
