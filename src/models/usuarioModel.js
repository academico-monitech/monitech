var database = require("../database/config")

/* function buscarMedidasEmTempoRealIdade() {
    instrucaoSql = `select count(idade) as qtdIdade, idade from usuario group by nome;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
} */

function buscarUltimasMedidasIdade() {
    instrucaoSql = `
        select count(idade) as qtdIdade, idade from usuario group by nome;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

    function buscarCidade() {
        instrucaoSql = `
            select count(cidade) as qtdCidade, cidade from usuario group by nome;
        `;

    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email, senha, cargo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, cargo);
    var instrucao = `
        INSERT INTO usuario (nome, email, senha, cargo) VALUES ('${nome}' , '${email}', '${senha}', '${cargo}');

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastroTimes(nome, area, cor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, area, cor);
    var instrucao = `
        INSERT INTO equipe (nome, area, cor) VALUES ('${nome}' , '${area}', '${cor}');
  
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

  function updateTimes(nome, area, cor, id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, area, cor);
    var instrucao = `
        UPDATE equipe set nome = '${nome}', area = '${area}', cor = '${cor}' WHERE id=${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

  function deleteTimes(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    var instrucao = `
        DELETE FROM equipe WHERE id=${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }
  
  function buscarTimes() {
    instrucaoSql = `
     SELECT * FROM equipe; 
    `;
    // e JOIN usuario u on u.FK_EQUIPE = e.id where u.FK_EQUIPE = ${FK_EQUIPE}
  
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
  }


module.exports = {
    entrar,
    cadastrar,
    listar,
    buscarUltimasMedidasIdade,
    buscarCidade,
    buscarTimes,
    cadastroTimes,
    updateTimes,
    deleteTimes,
};