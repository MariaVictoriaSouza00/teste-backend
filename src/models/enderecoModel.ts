import connection from "../config/database";
import { Endereco } from "../types/endereco";
import { ResultSetHeader } from "mysql2";

export const criarEndereco = (enderecoData: Endereco): Promise<number> => {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO endereco (cep, logradouro, numero, complemento, cidade, bairro, estado, pessoa_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = Object.values(enderecoData); 
    connection.query(query, values, (err, result: ResultSetHeader) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.insertId); 
      }
    });
  });
};
