import express from "express";
import bodyParser from "body-parser";
import pessoaRoutes from "./routes/pessoaRouter";

const app = express();
const port = process.env.PORT || 4568;

app.use(bodyParser.json());
app.use("/pessoa", pessoaRoutes);

app.get("/ping", (req, res) => {
  return res.send("pong");
});

app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
});
