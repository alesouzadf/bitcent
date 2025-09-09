import Cabecalho from "../templates/Cabecalho";
import Conteudo from "../templates/Conteudo";
import Pagina from "../templates/Pagina";
import Lista from "@/components/financas/lista";
import Formulario from "./Formulario";
import NaoEncontrado from "../templates/NaoEncontrado";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import useTransacao from "../data/hooks/useTransacao";
import { transacaoVazia } from "@/logic/core/financas/Transacao";

export default function Financas() {
  const { transacoes, transacao, salvar, selecionar, excluir } = useTransacao();

  return (
    <Pagina>
      <Cabecalho />
      <Conteudo className="gap-5">
        <Button
          className="bg-blue-500"
          leftIcon={<IconPlus />}
          onClick={() => selecionar(transacaoVazia)}
        >
          Nova Transacao
        </Button>
        {transacao ? (
          <Formulario
            transacao={transacao}
            salvar={salvar}
            exlcuir={excluir}
            cancelar={() => selecionar(null)}
          ></Formulario>
        ) : transacoes.length ? (
          <Lista transacoes={transacoes} selecionarTransacao={selecionar} />
        ) : (
          <NaoEncontrado>Nenhuma transação encontrada</NaoEncontrado>
        )}
      </Conteudo>
    </Pagina>
  );
}
