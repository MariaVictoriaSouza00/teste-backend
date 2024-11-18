import { Request, Response } from "express";
import { cadastrar } from "../services/pessoaService";

export const cadastrarPessoa = async (req: Request, res: Response): Promise<Response> => {
  const pessoaData = req.body.pessoa;
  const enderecoData = req.body.endereco;

  try {
    await cadastrar(pessoaData, enderecoData);

    return res.status(201).json({
      status: "sucesso",
      mensagem: "Cadastro Realizado com sucesso!"
    });
  } catch (err: any) {
    console.error("Erro:", err.message);
    return res.status(400).json({
      status: "erro",
      mensagem: err.message || "Erro ao realizar Cadastro."
    });
  }
};
