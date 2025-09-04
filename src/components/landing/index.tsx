import Pagina from "../templates/Pagina";
import Cabecalho from "./cabecalho";
import Depoimentos from "./depoimentos";
import Destaque from "./destaque";
import Rodape from "./rodape";
import Vantagens from "./vantagens";

export default function Landing() {
  return (
    <div>
      <Pagina externa className="items-center">
        <Cabecalho />
        <Destaque />
        <Vantagens />
        <Depoimentos />
        <Rodape />
      </Pagina>
    </div>
  );
}
