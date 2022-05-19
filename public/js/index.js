var formulario = document.querySelector("#form_contato");

formulario.addEventListener("submit", function() {
    formulario.querySelector("#ipt_nome").value = '';
    formulario.querySelector("#ipt_email").value = '';
    formulario.querySelector("#ipt_descricao").value = '';console.log("entrei na funcao crl")
    formulario.querySelector("#ipt_telefone").value = '';

    document.querySelector(".fundo").style.display= "flex";
})

var popup = document.querySelector("#btn_popup");

function fechar() {
    document.querySelector(".fundo").style.display= "none";
    
}