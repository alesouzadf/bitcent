import Colecao from "@/logic/firebase/db/Colecao";
import Usuario from "../usuario/Usuario";
import Transacao from "./Transacao";

export default class ServicoTransacao {
  private _colecao = new Colecao();

  async salvar(transacao: Transacao, usuario: Usuario) {
    console.log(usuario.email);
    return await this._colecao.salvar(
      `financas/${usuario.email}/transacoes`,
      transacao
    );
  }
}
