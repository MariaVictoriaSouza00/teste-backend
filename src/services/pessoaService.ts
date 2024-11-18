import { criarPessoa } from "../models/pessoaModel";
import { criarEndereco } from "../models/enderecoModel";
import { Pessoa } from "../types/pessoa";
import { Endereco } from "../types/endereco";
import { verificarPessoaExistente } from "./verificarPessoaExistenteService";


export const cadastrar = async (pessoaData: Pessoa, enderecoData: Endereco): Promise<void> => {
  try {

    const pessoaExiste = await verificarPessoaExistente(pessoaData);
    
    if (pessoaExiste) 
      throw new Error("Pessoa já está cadastrada.");
    

   validarPessoa(pessoaData);

    const pessoaId = await criarPessoa(pessoaData);

    enderecoData.pessoa_id = pessoaId;

    await criarEndereco(enderecoData);
    
  } catch (err: unknown) {
    const error = err as Error;
    throw new Error("" + err);
  }
};

export const validarPessoa = (pessoaData: Pessoa): void => {
  const { tipo_pessoa, nome, cpfResponsavel, cnpj, celular, telefone, email, emailConfirmacao, situacao } = pessoaData;

  if (tipo_pessoa !== 'fisica' && tipo_pessoa !== 'juridica') 
    throw new Error("Tipo de pessoa inválido. Deve ser 'fisica' ou 'juridica'.");

  if (!nome || nome.trim().length === 0)
    throw new Error("Nome é obrigatório.");
  
  if (tipo_pessoa === 'fisica') {
    if (!cpfResponsavel || !validarCPF(cpfResponsavel)) {
      throw new Error("CPF inválido.");
    }
  } else if (tipo_pessoa === 'juridica') {
    if (!cnpj || !validarCNPJ(cnpj)) {
      throw new Error("CNPJ inválido.");
    }
  }

  if (!celular || celular.trim().length === 0) 
    throw new Error("Celular é obrigatório.");
  

  if (!telefone || telefone.trim().length === 0) 
    throw new Error("Telefone é obrigatório.");
  
  if (!email || email.trim().length === 0) 
    throw new Error("Email é obrigatório.");
  

  if (emailConfirmacao !== email) 
    throw new Error("Email de confirmação deve ser igual ao email.");
  

  if (!situacao || (situacao !== 'ativa' && situacao !== 'inativa')) 
    throw new Error("Situação inválida. Deve ser 'ativa' ou 'inativa'.");
  
}

const validarCPF = (cpf: string): boolean => {
  const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return regex.test(cpf);
}

const validarCNPJ = (cnpj: string): boolean => {
  const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
  return regex.test(cnpj);
}
