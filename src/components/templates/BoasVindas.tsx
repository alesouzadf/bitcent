// import useCentralDeAcesso from "../../data/hook/useCentralDeAcesso"

import { useContext } from "react";
import AutenticacaoContext from "../data/contexts/AutenticacaoContext";

// https://unicode-table.com/en/1F44B/

export default function BoasVindas() {
  const { usuario } = useContext(AutenticacaoContext);

  function renderizarNome() {
    return (
      <span className="hidden sm:inline">{usuario?.nome?.split(" ")[0]}</span>
    );
  }
  return (
    <div className={`text-white text-3xl font-black`}>
      Olá {renderizarNome()}👋
    </div>
  );
}
