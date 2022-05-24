var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function buscarUltimasMedidasIdade(req, res) {

    console.log(`Recuperando as ultimas idades`);

    usuarioModel.buscarUltimasMedidasIdade().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarCidade(req, res) {

    console.log(`Recuperando as ultimas cidades`);

    usuarioModel.buscarCidade().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;       /* Requerimento */
    var senha = req.body.senhaServer;
    var cargo = req.body.cargoServer;

   

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else if (cargo == undefined) {
            res.status(400).send("Sua senha está undefined!");
    } else {
        
        usuarioModel.cadastrar(nome, email, senha, cargo)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function cadastroTimes(req, res) {
    var nome = req.body.nomeServer;
    var area = req.body.areaServer;       /* Requerimento */
    var cor = req.body.corServer;
  
  
   
  
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (area == undefined) {
        res.status(400).send("Seu area está undefined!");
    } else if (cor == undefined) {
        res.status(400).send("Sua cor está undefined!");
    
    } else {
        
        usuarioModel.cadastroTimes(nome, area, cor)
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


  function updateTimes(req, res) {
    var nome = req.body.nomeServer;
    var area = req.body.areaServer;       /* Requerimento */
    var cor = req.body.corServer;
    var id = req.body.idServer
  
  
   
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (area == undefined) {
        res.status(400).send("Seu area está undefined!");
    } else if (cor == undefined) {
        res.status(400).send("Sua cor está undefined!");
    
    } else {
        
        usuarioModel.updateTimes(nome, area, cor, id)
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


  function deleteTimes(req, res) {
    var id = req.body.idServer
  
  
   
    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } 
    
    else {
        
        usuarioModel.deleteTimes(id)
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


  function buscarTimes(req, res) {
  
    console.log(`Recuperando as ultimas cidades`);
  
    usuarioModel.buscarTimes().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
  }

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    buscarUltimasMedidasIdade,
    buscarCidade,
    buscarTimes,
    cadastroTimes,
    updateTimes,
    deleteTimes,
}