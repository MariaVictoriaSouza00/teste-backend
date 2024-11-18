import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.MYSQLDB_HOST,
    user: process.env.MYSQLDB_USER,
    password: process.env.MYSQLDB_PASSWORD,
    database: process.env.MYSQLDB_DATABASE,
    port: Number(process.env.MYSQLDB_PORT),
  });
  
connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados: ", err);
    return;
  }
  console.log("Conectado ao banco de dados.");
});

export default connection;
