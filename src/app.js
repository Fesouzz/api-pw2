const express = require("express");
const userRoutes = require("./src/routes/userRoutes");
const path = require("path");const pool = require("./src/config/pool");
require("dotenv").config({ path: path.resolve(__dirname, ".env")});
const app = express();const PORT = process.env.PORT || 3000;

app.use(express.json());
// Rota inicial documentando os Endpoints solicitados
app.get("/", (req, res) => {
  res.json({
    mensagem: "API de Gerenciamento de Usuários",
    versao: "1.0.0",
    endpoints: {
      ListarTodos: "GET /users",
      BuscarPorId: "GET /users/:id",
      CriarUsuario: "POST /users"
    }
  });
});

app.use("/users", userRoutes);

app.use((req, res) => {
  res.status(404).json({
    sucesso: false,
    mensagem: "Rota não encontrada",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
