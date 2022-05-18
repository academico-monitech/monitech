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
    fetch('/setups/listarCompleta').then(function(resposta){
        resposta.json().then(function(info){
            console.log(info);
            info.forEach(info => {
                document.querySelector('.inventario-content').append(createItem(info))
            });
        })
    })
}

getLista()