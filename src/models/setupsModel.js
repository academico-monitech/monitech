var database = require("../database/config");

function listar() {
    var instrucao = `
        SELECT maquina.id id, usuario.nome usuario, usuario.id idUsuario, equipe.nome equipe, maquina.hostname hostname, equipe.cor, equipe.id idEquipe, (select top 1 registro from medida where fk_maquina = maquina.id order by registro desc) as registro
        FROM usuario join maquina 
        on usuario.id = fk_usuario 
        left join equipe 
        on equipe.id = fk_equipe
    `;
    return database.executar(instrucao);
}

function listarCompleta() {
    var instrucao = `
        SELECT maquina.registro as id, maquina.hostname as hostname, equipe.nome as equipe, maquina.processador as cpu, maquina.coreProcessador as cores, maquina.memoriaRam as ram, maquina.espacoDisco as totalDisco
        FROM usuario join maquina 
        on usuario.id = fk_usuario 
        join equipe
        on equipe.id = fk_equipe
    `;
    return database.executar(instrucao);
}

function detalhes(id){
    var instrucao = `
        SELECT top 1 usuario.nome usuario,usuario.id idUsuario, equipe.nome equipe, maquina.*,
        medida.qtdEspacoDisco, medida.qtdMemoriaRam ram, equipe.id idEquipe, equipe.cor cor
        FROM usuario 
        join maquina 
        on usuario.id = fk_usuario 
        join medida
        on maquina.id = medida.fk_maquina
        left join equipe 
        on equipe.id = fk_equipe 
        where maquina.id = ${id} order by medida.registro desc
    `;
    return database.executar(instrucao);
}

function getTempoReal(id){
    var instrucao = `
        SELECT top 1 medida.qtdMemoriaRam ramAtual, maquina.memoriaRam ramTotal ,medida.registro registro, medida.porcentagemCPU cpu
        FROM medida 
        join maquina 
        on maquina.id = medida.fk_maquina
        where fk_maquina = ${id} order by registro desc;
    `;
    return database.executar(instrucao);
}

function updateTimeSetup(idSetup, idTime){
    var instrucao = `
        update [dbo].[usuario] set FK_Equipe = ${idTime} WHERE id = ${idSetup}
    `;
return database.executar(instrucao);
}

module.exports = {
    listar,
    detalhes,
    getTempoReal,
    listarCompleta,
    updateTimeSetup
}