// import useCentralDeAcesso from "../../data/hook/useCentralDeAcesso"
import usuario from "@/components/data/constants/usuarioFalso";

// https://unicode-table.com/en/1F44B/

export default function BoasVindas() {
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
