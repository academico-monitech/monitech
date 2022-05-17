var indexModel = require("../models/indexModel");
var fs = require('fs');
function inicio(req, res){
    var idUsuario = req.params.idUsuario;

    indexModel.infoUsuario(idUsuario).then(
        function (resultado){
            res.status(200).json(resultado[0]);
        }
    );
}

function teste(req, res){
    res.set('Content-Type', 'text/html');
    res.send(data);
}

function returnCards(req, res){
    const templateCard = fs.readFileSync(`${__dirname}/../../public/templates/card.html`, 'utf8');
    const output = 
    res.set('Content-Type', 'text/html');
    res.send()
}


module.exports = {
    inicio,
    teste
}
