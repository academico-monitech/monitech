const maquinas = [];
const maquinasPesquisa = [];

const createItem = function(info){
    const item = document.createElement('div')
    item.classList.add('inventario-item')
    const id = document.createElement('p')
    const hosname = document.createElement('p')
    const dono = document.createElement('p')
    const cpu = document.createElement('p')
    cpu.setAttribute('id', 'big-name')
    const core = document.createElement('p')
    const ram = document.createElement('p')
    const totalDisco = document.createElement('p')

    id.innerHTML = `${info.id}`
    hosname.innerHTML = `${info.hostname}`
    dono.innerHTML = `${info.dono}`
    cpu.innerHTML = `${info.cpu}`
    core.innerHTML = `${info.cores}`
    if(info.ram < 1) {
        ram.innerHTML = `${info.ram*100} MB`;
    } else {
        ram.innerHTML = `${info.ram} GB`;
    }
    totalDisco.innerHTML = `${info.totalDisco} GB`

    item.appendChild(id)
    item.appendChild(hosname)
    item.appendChild(dono)
    item.appendChild(cpu)
    item.appendChild(core)
    item.appendChild(ram)
    item.appendChild(totalDisco)

    return item
}


const getLista = function(){
    maquinas.length = 0;
    fetch('/setups/listarCompleta').then(function(resposta){
        resposta.json().then(function(info){
            console.log(info);
            info.forEach(info => {
                maquinas.push(info)
            });
            atualizarLista(maquinas);
        })
    })
}

const pesquisa = function(string){
    maquinasPesquisa.length = 0;
    string = string.toLowerCase();
    maquinas.map(el => {
        if (
            el.hostname.toLowerCase().includes(string) ||
            el.dono.toLowerCase().includes(string) || 
            el.cpu.toLowerCase().includes(string)
        ) {
            maquinasPesquisa.push(el)
        }
    })
    atualizarLista(maquinasPesquisa, string);
}

const atualizarLista = function(array, string){
    document.querySelector('#lista').innerHTML = '';
    document.getElementById('msgNaoEncontrou').style.display = "none"
    if(array.length == 0){
        if(string.length==0){
            maquinas.forEach(maquina => {
                document.querySelector('#lista').append(createItem(maquina))
            });
        } else {
            document.querySelector('#lista').innerHTML = "";
            document.getElementById('msgNaoEncontrou').style.display = "block"
        }
    } else {
        array.forEach(maquina => {
            document.querySelector('#lista').append(createItem(maquina))
        });
    }
}

getLista()
console.log(maquinas);