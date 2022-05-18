// sessão
function validarSessao() {
  // aguardar();
  var idUsuario = sessionStorage.ID_USUARIO;
  var email = sessionStorage.EMAIL_USUARIO;
  var nome = sessionStorage.NOME_USUARIO;
  var cargo = sessionStorage.CARGO_USUARIO;

  const nomePerfil = document.getElementById('nomePerfil');
  const cargoPerfil = document.getElementById('cargoPerfil');

  if (email != null && nome != null && idUsuario != null && cargo != null) {
    nomePerfil.innerHTML = nome;
    cargoPerfil.innerHTML = cargo
  } else {
      window.location = "../login.html";
  }
}

function limparSessao() {
  // aguardar();
  sessionStorage.clear();
  // finalizarAguardar();
  window.location = "../login.html";
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
