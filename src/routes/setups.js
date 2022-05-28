var express = require("express");
var router = express.Router();

var setupsController = require("../controllers/setupsController");

router.get("/listar", function (req, res) {
    setupsController.listar(req, res);
});

router.get("/listarCompleta", function (req, res) {
    setupsController.listarCompleta(req, res);
});

router.get("/detalhes/:id", function (req, res) {
    setupsController.detalhes(req, res);
});

router.get("/getTempoReal/:id", function (req, res) {
    setupsController.getTempoReal(req, res);
});

router.post("/updateTimeSetup", function(req, res){
    setupsController.updateTimeSetup(req, res)
})

module.exports = router;