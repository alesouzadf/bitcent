export default class Data {
  static ddmmyy = {
    formatar(dt: Date, separador: string = "/"): string {
      const dia = dt.getDate().toString().padStart(2, "0");
      const mes = (dt.getMonth() + 1).toString().padStart(2, "0");
      return `${dia}${separador}${mes}${separador}${dt.getFullYear()}`;
    },
    desformatar(valor: string): Date {
      const hoje = new Date();
      const partes = valor.split("/");
      const dia = partes[0] ? +partes[0] : hoje.getDay();
      const mes = partes[1] ? +partes[1] - 1 : hoje.getMonth();
      const ano = partes[2] ? +partes[2] : hoje.getFullYear();
      return new Date(ano, mes, dia);
    },
    primeiroDia(date: Date): Date {
      return new Date(date.getFullYear(), date.getMonth(), 1);
    },
    ultimoDia(date: Date): Date {
      return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    },
  };
}
