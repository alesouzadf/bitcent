import Usuario from "@/logic/core/usuario/Usuario";
import Autenticacao from "@/logic/firebase/auth/Autenticacao";
import { createContext, useState } from "react";

interface AutenticacaoProps {
  carregando: boolean;
  usuario: Usuario | null;
  loginGoogle: () => Promise<Usuario | null>;
  logout: () => Promise<void>;
}

const AutenticacaoContext = createContext<AutenticacaoProps>({
  carregando: true,
  usuario: null,
  loginGoogle: async () => null,
  logout: async () => {},
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function AutenticacaoProvider(props: any) {
  const [carregando, setCarregando] = useState<boolean>(false);
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const autenticacao = new Autenticacao();

  async function loginGoogle() {
    const usuario = await autenticacao.loginGoogle();
    setUsuario(usuario);
    return usuario;
  }

  async function logout() {
    await autenticacao.logout();
    setUsuario(null);
  }

  return (
    <AutenticacaoContext.Provider
      value={{
        carregando,
        usuario,
        loginGoogle: loginGoogle,
        logout: logout,
      }}
    >
      {props.children}
    </AutenticacaoContext.Provider>
  );
}

export default AutenticacaoContext;
