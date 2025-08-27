import Transacao, { transacaoVazia } from "@/logic/core/financas/Transacao";
import Cabecalho from "../templates/Cabecalho";
import Conteudo from "../templates/Conteudo";
import Pagina from "../templates/Pagina";
import Lista from "@/components/financas/lista";
import { useState } from "react";
import transacoesFalsas from "../data/constants/transacoesFalsas";
import Formulario from "./Formulario";
import NaoEncontrado from "../templates/NaoEncontrado";
import Id from "@/logic/comum/id";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

export default function Financas() {
  const [transacoes, setTransacoes] = useState<Transacao[]>(transacoesFalsas);
  const [transacao, setTransacao] = useState<Transacao | null>(null);

  function salvar(transacao: Transacao) {
    const outrasTransacoes = transacoes.filter((t) => t.id !== transacao.id);
    setTransacoes([
      ...outrasTransacoes,
      {
        ...transacao,
        id: transacao.id ?? Id.novo(),
      },
    ]);
    setTransacao(null);
  }

  function exlcuir(transacao: Transacao) {
    const outrasTransacoes = transacoes.filter((t) => t.id !== transacao.id);
    setTransacoes(outrasTransacoes);
    setTransacao(null);
  }

  return (
    <Pagina>
      <Cabecalho />
      <Conteudo className="gap-5">
        <Button
          className="bg-blue-500"
          leftIcon={<IconPlus />}
          onClick={() => setTransacao(transacaoVazia)}
        >
          Nova Transacao
        </Button>
        {transacao ? (
          <Formulario
            transacao={transacao}
            salvar={salvar}
            exlcuir={exlcuir}
            cancelar={() => setTransacao(null)}
          ></Formulario>
        ) : transacoes.length ? (
          <Lista transacoes={transacoes} selecionarTransacao={setTransacao} />
        ) : (
          <NaoEncontrado>Nenhuma transação encontrada</NaoEncontrado>
        )}
      </Conteudo>
    </Pagina>
  );
}
