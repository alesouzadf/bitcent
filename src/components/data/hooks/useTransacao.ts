import { useContext, useEffect, useState } from "react";
import AutenticacaoContext from "../contexts/AutenticacaoContext";
import Transacao from "@/logic/core/financas/Transacao";
import Id from "@/logic/comum/id";
import servicos from "@/logic/core/financas";

export default function useTransacao() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [transacao, setTransacao] = useState<Transacao | null>(null);
  const { usuario } = useContext(AutenticacaoContext);

  useEffect(() => {
    buscarTransacoes();
  }, []);

  async function buscarTransacoes() {
    if (!usuario) return;
    const transacoes = await servicos.transacao.consultar(usuario);
    setTransacoes(transacoes);
  }

  function salvar(transacao: Transacao) {
    if (!usuario) return;
    const outrasTransacoes = transacoes.filter((t) => t.id !== transacao.id);
    setTransacoes([
      ...outrasTransacoes,
      {
        ...transacao,
        id: transacao.id ?? Id.novo(),
      },
    ]);
    servicos.transacao.salvar(transacao, usuario);
    setTransacao(null);
  }

  function excluir(transacao: Transacao) {
    const outrasTransacoes = transacoes.filter((t) => t.id !== transacao.id);
    setTransacoes(outrasTransacoes);
    setTransacao(null);
  }

  return {
    transacoes,
    transacao,
    salvar,
    selecionar: setTransacao,
    excluir,
  };
}
