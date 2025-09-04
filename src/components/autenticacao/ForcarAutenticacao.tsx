import { useRouter } from "next/router";
import Carregando from "../templates/Carregando";
import { useContext } from "react";
import AutenticacaoContext from "../data/contexts/AutenticacaoContext";

interface ForcarAutenticacaoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

export default function ForcarAutenticacao(props: ForcarAutenticacaoProps) {
  const router = useRouter();
  const { usuario, carregando } = useContext(AutenticacaoContext);
  if (carregando) {
    return <Carregando />;
  } else if (usuario?.email) {
    return props.children;
  } else {
    router.push("/");
    return <Carregando />;
  }
}
