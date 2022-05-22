document.body.onload(validarSessao())
// sessão
function validarSessao() {
  // aguardar();
  var idUsuario = sessionStorage.ID_USUARIO;
  var email = sessionStorage.EMAIL_USUARIO;
  var nome = sessionStorage.NOME_USUARIO;
  var cargo = sessionStorage.CARGO_USUARIO;

  const nomePerfil = document.getElementById('nome_usuario');
  const cargoPerfil = document.getElementById('cargo_usuario');


  if(email == null && nome == null && idUsuario == null && cargo == null) window.location = "/login.html";

  if (document.getElementById('nome_usuario') || document.getElementById('cargo_usuario')){
    nomePerfil.innerHTML = nome;
    cargoPerfil.innerHTML = cargo
  }
}

function limparSessao() {
  // aguardar();
  sessionStorage.clear();
  // finalizarAguardar();
  window.location = "/index.html";
}

// carregamento (loading)
function aguardar() {
  var divAguardar = document.getElementById("div_aguardar");
  divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
  var divAguardar = document.getElementById("div_aguardar");
  divAguardar.style.display = "none";

  var divErrosLogin = document.getElementById("div_erros_login");
  if (texto) {
      divErrosLogin.innerHTML = texto;
  }
}


// modal
function mostrarModal() {
  var divModal = document.getElementById("div_modal");
  divModal.style.display = "flex";
}

function fecharModal() {
  var divModal = document.getElementById("div_modal");
  divModal.style.display = "none";
}
