const { fs } = require("file-system");
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

function listarCompleta(req, res){
    setupsModel.listarCompleta().then(function(resultado){
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

function getTempoReal(req, res){
    const id = req.params.id;
    setupsModel.getTempoReal(id).then(function(resultado){
        res.status(200).json(resultado[0]);
    }).catch(err =>{
        console.log(err);
    })
}

function updateTimeSetup(req, res){
    const idSetup = req.body.idSetup;
    const idEquipe = req.body.idEquipe;

    console.log(idSetup, idEquipe);

    if (idSetup == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (idEquipe == undefined) {
        res.status(400).send("Seu area está undefined!");
    } else {
        
        setupsModel.updateTimeSetup(idSetup, idEquipe)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro dos times! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

module.exports = {
    listar,
    detalhes,
    getTempoReal,
    listarCompleta,
    updateTimeSetup
}