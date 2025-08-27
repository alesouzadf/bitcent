import Cabecalho from "@/components/templates/Cabecalho";
import Conteudo from "@/components/templates/Conteudo";
import Pagina from "@/components/templates/Pagina";
import TituloPagina from "@/components/templates/TituloPagina";
import { IconForms } from "@tabler/icons-react";
import usuario from "@/components/data/constants/usuarioFalso";
import Formularios from "@/components/usuario/Formularios";

export default function CadastroUsuario() {
  return (
    <Pagina>
      <Cabecalho />
      <Conteudo>
        <TituloPagina
          icone={<IconForms />}
          principal="Dados Cadastrais"
          sub={`Informações de ${usuario.email}`}
        />
        <Formularios />
      </Conteudo>
    </Pagina>
  );
}
