var database = require("../database/config");

function listar() {
    var instrucao = `
        SELECT maquina.id id,usuario.nome usuario, equipe.nome equipe, maquina.hostname hostname, equipe.cor FROM usuario join maquina on usuario.id = fk_usuario left join equipe on equipe.id = fk_equipe;
    `;
    return database.executar(instrucao);
}

function detalhes(id){
    var instrucao = `
        SELECT usuario.nome usuario, equipe.nome equipe, maquina.* FROM usuario join maquina on usuario.id = fk_usuario left join equipe on equipe.id = fk_equipe where maquina.id = ${id}
    `;
    return database.executar(instrucao);
}

module.exports = {
    listar,
    detalhes
}