function createCard() {
    const cardSetup = document.createElement("div");
    cardSetup.setAttribute("class", "card-setup");
    const img = document.createElement("img");
    img.setAttribute("src", `../assets/icons/desktop-svgrepo-com 1.svg`);
    const desc = document.createElement("div");
    desc.setAttribute("class", "desc");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const etiqueta = document.createElement("div");
    etiqueta.setAttribute("class", "etiqueta");
    desc.appendChild(h1);
    desc.appendChild(p);
    cardSetup.appendChild(img);
    cardSetup.appendChild(desc);
    cardSetup.appendChild(etiqueta);

    return cardSetup;
}

function createSetup(setup) {
    console.log("criando card");
    var card = createCard();
    const id = setup.id;
    const hostname = setup.hostname || "undefined";
    const cor = setup.cor || "#444444";
    card.querySelector("h1").innerHTML = hostname;
    if (setup.equipe) {
        card.querySelector("p").innerHTML = setup.equipe;
    }
    card.querySelector(".etiqueta").style.backgroundColor = cor;
    card.addEventListener("click", function () {
        setSetup(id);
    });
    return card;
}

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
    fetch(`./setups/detalhes/${id}`).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then((setup) => {
                document.querySelector(".info-setup").style.display = "flex";
                const hostname = setup.hostname || "undefined";
                document.getElementById("hostname").innerHTML = hostname;
                if (setup.equipe) {
                    document.getElementById("equipe").innerHTML = equipe;
                } else {
                    document.getElementById("equipe").innerHTML = "sem equipe";
                }
                document.getElementById("processador").innerHTML =
                    setup.processador;
                document.getElementById(
                    "ram"
                ).innerHTML = `Memória RAM: ${setup.memoriaRam}`;
                document.getElementById(
                    "storage"
                ).innerHTML = `Storage: ${setup.espacoDisco} GB`;
            });
        }
    });
}
