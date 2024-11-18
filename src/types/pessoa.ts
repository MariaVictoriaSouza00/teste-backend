export interface Pessoa {
    id?: number;  
    tipo_pessoa: "fisica" | "juridica"; 
    nome: string;
    cpfResponsavel?: string;  
    cnpj?: string;  
    celular?: string;
    telefone?: string;
    email?: string;
    emailConfirmacao?: string;
    situacao: "ativa" | "inativa";
  }
  