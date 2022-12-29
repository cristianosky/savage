export interface Tarjetas {
  tarjeta: string;
  mes: string;
  anio: string;
  cvv: string;
}

export interface verificarIP {
  ip: string;
  score: string;
  text: string;
  valor: number;
}

export interface FakeData {
  address: string;
  city: string;
  first_name: string;
  last_name: string;
  postcode: number;
  state: string;
  title: string;
}
