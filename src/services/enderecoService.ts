import { criarEndereco } from "../models/enderecoModel";
import { Endereco } from "../types/endereco";

export const cadastrarEnderecoService = (enderecoData: Endereco): Promise<number> => {
  return criarEndereco(enderecoData);
};


export const validarEndereco = (enderecoData: Endereco): void => {
  const { numero, bairro, cidade, estado, cep } = enderecoData;

  if (!numero || numero.trim().length === 0) 
    throw new Error("Número é obrigatório.");

  if (!bairro || bairro.trim().length === 0) 
    throw new Error("Bairro é obrigatório.");

  if (!cidade || cidade.trim().length === 0) 
    throw new Error("Cidade é obrigatória.");

  if (!estado || estado.trim().length === 0) 
    throw new Error("Estado é obrigatório.");
  

  if (!cep || !validarCEP(cep)) 
    throw new Error("CEP inválido. O formato correto é XXXXX-XXX.");
  
};

const validarCEP = (cep: string): boolean => {
  const regex = /^\d{5}-\d{3}$/;
  return regex.test(cep);
};
