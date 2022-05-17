var express = require("express");
var router = express.Router();

var indexController = require("../controllers/indexController"); 


router.get("/", function (req, res) {
    res.render("index", { title: "Express" });
});

router.get("/inicio:idUsuario", function (req, res) {
    indexController.inicio(req, res)
    res.set('Content-Type', 'text/html');
});

router.get("/test", function(req, res){
    indexController.teste(req,res);
})

module.exports = router;
