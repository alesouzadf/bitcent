import Colecao from "@/logic/firebase/db/Colecao";
import Usuario from "../usuario/Usuario";
import Transacao from "./Transacao";
import Data from "@/logic/utils/Data";

export default class ServicoTransacao {
  private _colecao = new Colecao();

  async salvar(transacao: Transacao, usuario: Usuario) {
    console.log(usuario.email);
    return await this._colecao.salvar(
      `financas/${usuario.email}/transacoes`,
      transacao
    );
  }

  async consultar(usuario: Usuario) {
    const caminho = `financas/${usuario.email}/transacoes`;
    return this._colecao.consultar(caminho, "data", "desc");
  }

  // async consultarPorMes(usuario: Usuario, data: Date) {
  //   const caminho = `financas/${usuario.email}/transacoes`;
  //   return this._colecao.consultarComFiltros(caminho, [
  //     { atributo: "data", op: ">=", valor: Data.primeiroDia(data) },
  //     { atributo: "data", op: "<=", valor: Data.ultimoDia(data) },
  //   ]);
  // }
}
