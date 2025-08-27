import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useFormulario<T = any>(dadosIniciais: T) {
  const [dados, setDados] = useState(dadosIniciais);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  function alterarAtributo(atributo: string, fn?: Function) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (valorOuEvento: any) => {
      const v = _obterValor(valorOuEvento);
      setDados({ ...dados, [atributo]: fn?.(v) ?? v });
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function _obterValor(v: any) {
    const target = v?.currentTarget ?? v?.target;
    const checkbox = target?.type === "checkbox";
    const valor = checkbox ? target?.checked : target?.value;
    return valor ?? v;
  }

  return {
    dados,
    alterarDados: setDados,
    alterarAtributo,
  };
}
