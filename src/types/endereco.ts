export interface Endereco {
    id?: number; 
    cep: string;
    logradouro: string;
    numero: string;
    complemento?: string;
    cidade: string;
    bairro: string;
    estado: string;
    pessoa_id: number; 
  }
  