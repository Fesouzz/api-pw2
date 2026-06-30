const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", userController.ListarUsuarios);
router.get("/:id", userController.BuscarUsuarioPorId);
router.post("/", userController.adicionarUsuario);

module.exports = router;