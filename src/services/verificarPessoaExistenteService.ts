import  connection  from "../config/database";
import { Pessoa } from "../types/pessoa";

export const verificarPessoaExistente = async (pessoaData: Pessoa): Promise<boolean> => {
  const { tipo_pessoa, cpfResponsavel, cnpj } = pessoaData;

  let query = `
    SELECT COUNT(*) AS count
    FROM pessoa
    WHERE situacao = 'ativa'
  `;

  if (tipo_pessoa === 'fisica') {
    query += " AND cpfResponsavel = ?";
  } else if (tipo_pessoa === 'juridica') {
    query += " AND cnpj = ?";
  }

  return new Promise((resolve, reject) => {
    connection.query(query, [tipo_pessoa === 'fisica' ? cpfResponsavel : cnpj], (err, result) => {
      if (err) {
        return reject(err);
      }

      if (Array.isArray(result) && result.length > 0) {
        resolve(result.length > 0);
      } else {
        resolve(false);
      }
    });
  });
};
