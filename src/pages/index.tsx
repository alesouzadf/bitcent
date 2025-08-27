import AutenticacaoContext from "@/components/data/contexts/AutenticacaoContext";
import Financas from "@/components/financas";
import Landing from "@/components/landing";
import { useContext } from "react";

export default function Home() {
  const { usuario } = useContext(AutenticacaoContext);

  return usuario ? <Financas /> : <Landing />;
}
