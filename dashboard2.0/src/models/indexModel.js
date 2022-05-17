var database = require("../database/config");

function infoUsuario(id) {
    console.log("infoUsuario index")
    var instrucao = `
        SELECT nome, cargo FROM usuario WHERE id = '${id}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    infoUsuario
};