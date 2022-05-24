const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sFuncao = document.querySelector('#m-funcao')
const sSalario = document.querySelector('#m-salario')
const btnSalvar = document.querySelector('#btnSalvar')

let equipe
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sNome.value = equipe[index].nome
    sFuncao.value = equipe[index].funcao
    sSalario.value = equipe[index].salario
    id = index
  } else {
    sNome.value = ''
    sFuncao.value = ''
    sSalario.value = ''
  }
  
}


function testezinho(){
  document.getElementById("btSalvar").setAttribute('onclick','cadastroTimes()')
  openModal()
}

function editItem(index) {
  document.getElementById("btSalvar").setAttribute('onclick',`updateItem(${index})`);
  openModal(true, index)
}

function deleteItem(index) {
  deleteTimes(index)
  equipe.splice(index, 1)
  setequipeBD()
  loadequipe()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.funcao}</td>
    <td>R$ ${item.salario}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (sNome.value == '' || sFuncao.value == '' || sSalario.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    equipe[id].nome = sNome.value
    equipe[id].funcao = sFuncao.value
    equipe[id].salario = sSalario.value
  } else {
    equipe.push({'nome': sNome.value, 'funcao': sFuncao.value, 'salario': sSalario.value})
  }

  setequipeBD()

  modal.classList.remove('active')
  loadequipe()
  id = undefined
}

function loadequipe() {
  equipe = getequipeBD()
  tbody.innerHTML = ''
  equipe.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getequipeBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setequipeBD = () => localStorage.setItem('dbfunc', JSON.stringify(equipe))

loadequipe()