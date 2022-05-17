let isOnTimer = false;

let timer;

const getList = function () {
    document.querySelector('.lista').innerHTML = '';
    fetch(`./setups/listar`).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then((json) => {
                if (json.length > 0) {
                    json.forEach((setup) => {
                        document
                            .querySelector('.lista')
                            .appendChild(createSetup(setup));
                        opacityCards();
                    });
                }
            });
        }
    });
};

function getInfoSetup(id) {
    fetch(`./setups/detalhes/${id}`).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then((json) => {
                return json[0];
            });
        }
    });
}

function setSetup(id) {
    if (isOnTimer) {
        clearInterval(timer);
        clearChart(chartRAM); clearChart(chartCPU);
    }
    fetch(`/setups/detalhes/${id}`).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then((setup) => {
                //document.querySelector('.info-setup').style.display = 'flex';
                includeSetup(setup)
                console.log(setup);
                
            });
        }
    });
}

const includeSetup = function(setup){
    const ramPorcent = setup.ram / setup.memoriaRam
    document.querySelector('.sec-2').style.display = "initial";
    const hostname = setup.hostname || "undefined";
    document.getElementById("hostname").innerHTML = hostname;
    if (setup.equipe) {
        document.getElementById("equipe").innerHTML = equipe;
    } else {
        document.getElementById("equipe").innerHTML = "sem equipe";
    }
    document.getElementById("processador").innerHTML =
        setup.processador;
        if(setup.memoriaRam < 1) {
            document.getElementById(
                "ram"
            ).innerHTML = `Memória RAM: ${setup.memoriaRam*100}MB`;
        } else {
            document.getElementById(
                "ram"
            ).innerHTML = `Memória RAM: ${setup.memoriaRam}GB`;
        }
    document.getElementById('qtd_ram').style.width = `calc(100% * ${ramPorcent})`
    document.getElementById("storage").innerHTML = `Storage: ${setup.espacoDisco} GB`;
    document.getElementById(
        "storage-number"
    ).innerHTML = `${(setup.qtdEspacoDisco / setup.espacoDisco *100).toFixed()}%`;
    startCharts(setup.id);
    setDisco((setup.espacoDisco - setup.qtdEspacoDisco), setup.qtdEspacoDisco)
    if(setup.ram < 1) {
        document.querySelector('.content-ram p').innerHTML = `Uso de memória: ${setup.ram*100}MB`
    } else {
        document.querySelector('.content-ram p').innerHTML = `Uso de memória: ${setup.ram}GB`
    }
}

function startCharts(id) {
    isOnTimer = true
    timer = setInterval(async () => {
        const response = await fetch(`/setups/getTempoReal/${id}`)
        const json = await response.json();
        const porcentagemRam = (json.ramAtual / json.ramTotal) * 100;
        const porcentagemCpu = json.cpu;
        const re = new Date(json.registro);
        document.getElementById('qtd_ram').style.width = `${porcentagemRam}%`
        const registro = re.getHours() + ':' + re.getMinutes() + ':' + re.getSeconds();
        addData(chartRAM, registro, porcentagemRam);
        addData(chartCPU, registro, porcentagemCpu);
      }, 3000);
}


function createCardComEquipe() {
    const cardSetup = document.createElement("div");
    cardSetup.classList.add('card', 'opacity');
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    const img = document.createElement("img");
    img.setAttribute("src", `../assets/icons/desktop.svg`);
    const nome = document.createElement("p");
    nome.classList.add('nome')
    const equipe = document.createElement("p");
    equipe.classList.add('equipe')
    const etiqueta = document.createElement("div");
    etiqueta.setAttribute("class", "etiqueta");
    cardContent.appendChild(img);
    cardContent.appendChild(nome);
    cardContent.appendChild(equipe);
    cardSetup.appendChild(cardContent);
    cardSetup.appendChild(etiqueta);

    return cardSetup;
}

function createCardSemEquipe() {
    const cardSetup = document.createElement("div");
    cardSetup.classList.add('card', 'opacity', 'sem-time');
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    const img = document.createElement("img");
    img.setAttribute("src", `../assets/icons/desktop.svg`);
    const nome = document.createElement("p");
    nome.classList.add('nome')
    const online = document.createElement('div');
    online.setAttribute('id', 'online')
    const etiqueta = document.createElement("div");
    etiqueta.setAttribute("class", "etiqueta");
    cardContent.appendChild(img);
    cardContent.appendChild(nome);
    cardContent.appendChild(online);
    cardSetup.appendChild(cardContent);
    cardSetup.appendChild(etiqueta);

    return cardSetup;
}

function createSetup(setup) {
    let card;
    setup.equipe ? card = createCardComEquipe() : card = createCardSemEquipe();
    const id = setup.id;
    const hostname = setup.hostname || "undefined";
    const cor = setup.cor || "#444444";
    card.querySelector(".nome").innerHTML = hostname;
    if (setup.equipe) {
        card.querySelector(".equipe").innerHTML = setup.equipe;
    }
    card.querySelector(".etiqueta").style.backgroundColor = cor;
    card.addEventListener("click", function () {
        setSetup(id);
    });
    const agora = new Date();
    const horario = new Date(setup.registro)
    const online = card.querySelector('#online').style
    agora.getTime() - horario.getTime() > 10000 ? online.backgroundColor = 'red' : online.backgroundColor = 'green';
    return card;
}
