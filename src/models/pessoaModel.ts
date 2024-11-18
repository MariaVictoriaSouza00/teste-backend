import connection from "../config/database";
import { Pessoa } from "../types/pessoa";
import { ResultSetHeader } from "mysql2";

export const criarPessoa = (pessoaData: Pessoa): Promise<number> => {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO pessoa (tipo_pessoa, nome, cpfResponsavel, cnpj, celular, telefone, email, emailConfirmacao, situacao)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = Object.values(pessoaData); 

    connection.query(query, values, (err, result: ResultSetHeader) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.insertId);  
      }
    });
  });
};

