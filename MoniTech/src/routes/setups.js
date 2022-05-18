var express = require("express");
var router = express.Router();

var setupsController = require("../controllers/setupsController");

router.get("/listar", function (req, res) {
    setupsController.listar(req, res);
});

router.get("/detalhes/:id", function (req, res) {
    setupsController.detalhes(req, res);
});

module.exports = router;