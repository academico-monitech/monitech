let isOnTimer = false;
let currentSetup = {};
let equipes = [];

let timer;

const getList = function () {
    document.querySelector(".lista").innerHTML = "";
    fetch(`./setups/listar`).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then((json) => {
                if (json.length > 0) {
                    json.forEach((setup) => {
                        document
                            .querySelector(".lista")
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
        currentSetup = {}
        clearInterval(timer);
        clearChart(chartRAM);
        clearChart(chartCPU);
    }
    fetch(`/setups/detalhes/${id}`).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then((setup) => {
                currentSetup = setup;
                //document.querySelector('.info-setup').style.display = 'flex';
                includeSetup(currentSetup);
                console.log(currentSetup);
            });
        }
    });
}

const includeSetup = function (setup) {
    console.log(setup.idEquipe);
    if(setup.equipe){
        listarEquipesC(setup.equipe, setup.idEquipe) 
    } else {
        listarEquipesS();
    }
    const ramPorcent = setup.ram / setup.memoriaRam;
    document.querySelector(".sec-2").style.display = "initial";
    const hostname = setup.hostname || "undefined";
    document.getElementById("hostname").innerHTML = hostname;
    document.getElementById('lista_equipes').addEventListener('change', (event) => {
        atribuirTime(setup.id, setup.idUsuario, event.target.value);

    });
    // if (setup.equipe) {
    //     document.getElementById("equipe").innerHTML = equipe;
    // } else {
    //     document.getElementById("equipe").innerHTML = "sem equipe";
    // }
    document.getElementById("processador").innerHTML = setup.processador;
    if (setup.memoriaRam < 1) {
        document.getElementById("ram").innerHTML = `Memória RAM: ${
            setup.memoriaRam * 100
        }MB`;
    } else {
        document.getElementById(
            "ram"
        ).innerHTML = `Memória RAM: ${setup.memoriaRam}GB`;
    }
    document.getElementById(
        "qtd_ram"
    ).style.width = `calc(100% * ${ramPorcent})`;
    document.getElementById(
        "storage"
    ).innerHTML = `Storage: ${setup.espacoDisco} GB`;
    document.getElementById("storage-number").innerHTML = `${(
        (setup.qtdEspacoDisco / setup.espacoDisco) *
        100
    ).toFixed()}%`;
    startCharts(setup.id);
    setDisco(setup.espacoDisco - setup.qtdEspacoDisco, setup.qtdEspacoDisco);
    if (setup.ram < 1) {
        document.querySelector(".content-ram p").innerHTML = `Uso de memória: ${
            setup.ram * 100
        }MB`;
    } else {
        document.querySelector(
            ".content-ram p"
        ).innerHTML = `Uso de memória: ${setup.ram}GB`;
    }
    document.querySelector('#etiqueta_info').style.backgroundColor = setup.cor;
};

function startCharts(id) {
    isOnTimer = true;
    timer = setInterval(async () => {
        const response = await fetch(`/setups/getTempoReal/${id}`);
        const json = await response.json();
        const porcentagemRam = (json.ramAtual / json.ramTotal) * 100;
        const porcentagemCpu = json.cpu;
        const re = new Date(json.registro);
        document.getElementById("qtd_ram").style.width = `${porcentagemRam}%`;
        const registro =
            re.getHours() + ":" + re.getMinutes() + ":" + re.getSeconds();
        addData(chartRAM, registro, porcentagemRam);
        addData(chartCPU, registro, porcentagemCpu);
    }, 3000);
}

function createCardComEquipe() {
    const cardSetup = document.createElement("div");
    cardSetup.classList.add("card", "opacity");
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    const img = document.createElement("img");
    img.setAttribute("src", `../assets/icons/desktop.svg`);
    const nome = document.createElement("p");
    nome.classList.add("nome");
    const online = document.createElement("div");
    online.setAttribute("id", "online");
    const equipe = document.createElement("p");
    equipe.classList.add("equipe");
    const etiqueta = document.createElement("div");
    etiqueta.setAttribute("class", "etiqueta");
    cardContent.appendChild(img);
    cardContent.appendChild(nome);
    cardContent.appendChild(equipe);
    cardContent.appendChild(online);
    cardSetup.appendChild(cardContent);
    cardSetup.appendChild(etiqueta);

    return cardSetup;
}

function createCardSemEquipe() {
    const cardSetup = document.createElement("div");
    cardSetup.classList.add("card", "opacity", "sem-time");
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    const img = document.createElement("img");
    img.setAttribute("src", `../assets/icons/desktop.svg`);
    const nome = document.createElement("p");
    nome.classList.add("nome");
    const online = document.createElement("div");
    online.setAttribute("id", "online");
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
    console.log(setup);
    let card;
    if(setup.equipe){
        card = createCardComEquipe()
    } else {
        card = createCardSemEquipe()
    }
    console.log(card);
    const id = setup.id;
    const hostname = setup.hostname || "undefined";
    const cor = setup.cor || "#444444";
    console.log(cor);
    card.querySelector(".nome").innerHTML = hostname;
    if (setup.equipe) {
        card.querySelector(".equipe").innerHTML = setup.equipe;
    }
    card.querySelector(".etiqueta").style.backgroundColor = cor;
    card.addEventListener("click", function () {
        setSetup(id);
    });
    const agora = new Date();
    const horario = new Date(setup.registro);
    const online = card.querySelector("#online").style;
    agora.getTime() - horario.getTime() > 10000
        ? (online.backgroundColor = "red")
        : (online.backgroundColor = "green");
    return card;
}

function getTimes() {
    equipes = [];
    fetch("/usuarios/timesbuscar", { cache: "no-store" })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(resposta)
                    resposta.forEach(res => {
                        equipes.push(res)
                    });
                });
            } else {
                console.error("Nenhum dado encontrado ou erro na API");
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados: ${error.message}`);
        });
}

function listarEquipesC(nome, id){
    let select = document.querySelector('#lista_equipes')
    select.innerHTML = '';
    select.innerHTML += `<option value="${id}" selected disabled>${nome}</option>`
    equipes.forEach(equipe => {
        if (equipe.id != id) {
            select.innerHTML += `<option value="${equipe.id}">${equipe.nome}</option>` 
        }
    }); 
}

function listarEquipesS(){
    let select = document.querySelector('#lista_equipes')
    select.innerHTML = '';
    select.innerHTML += `<option value="" selected disabled>Atribuir time</option>`
    equipes.forEach(equipe => {
            select.innerHTML += `<option value="${equipe.id}">${equipe.nome}</option>` 
    });
}

function atribuirTime(idSetup, idUsuario, idEquipe){
    fetch('/setups/updateTimeSetup', {
        method: 'POST',
        body: JSON.stringify({
        idSetup: idUsuario,
        idEquipe: idEquipe
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8'
        }
        })
        .then(response => {
            console.log(response);
            //getList();
            
            //setSetup(idSetup);
            window.location.reload();
        })
}

getTimes()