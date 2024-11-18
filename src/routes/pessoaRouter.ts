import { Router } from "express";
import { cadastrarPessoa } from "../controllers/pessoaController";

const router = Router();

router.post("/cadastrar", cadastrarPessoa);

export default router;
