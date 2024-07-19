export type TUnities = {
  id: number;
  nome: string;
  descricao: string;
  localizacao: string;
  turnos: {
    id: number;
    dia: string;
    disponivel: boolean;
    horarioInicio: string;
    horarioFim: string;
    descricao: string;
  }[];
};
