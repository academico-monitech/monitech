var indexModel = require("../models/indexModel");

function inicio(req, res){
    var idUsuario = req.params.idUsuario;

    indexModel.infoUsuario(idUsuario).then(
        function (resultado){
            res.status(200).json(resultado[0]);
        }
    );
}


module.exports = {
    inicio
}
