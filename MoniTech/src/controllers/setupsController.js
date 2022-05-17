var setupsModel = require("../models/setupsModel");

    function listar(req, res){
        setupsModel.listar().then(function(resultado){
            if(resultado.length > 0){
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(err =>{
            console.log(err);
        })
    }

function detalhes(req, res){
    const id = req.params.id
    setupsModel.detalhes(id).then(function(resultado){
        res.status(200).json(resultado[0]);
    }).catch(err =>{
        console.log(err);
    })
}

module.exports = {
    listar,
    detalhes
}