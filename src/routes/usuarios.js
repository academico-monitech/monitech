var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");


router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.get("/ultimasIdade", function (req, res) {
    usuarioController.buscarUltimasMedidasIdade(req, res);
});

router.get("/Cidade", function (req, res) {
    usuarioController.buscarCidade(req, res);
})

router.post("/cadastroTimes", function (req, res) {
    usuarioController.cadastroTimes(req, res);
});

router.put("/updateTimes", function (req, res) {
    usuarioController.updateTimes(req, res);
});

router.delete("/deleteTimes", function (req, res) {
    usuarioController.deleteTimes(req, res);
});

router.get("/timesbuscar", function (req, res) {
    usuarioController.buscarTimes(req, res);
});

module.exports = router;