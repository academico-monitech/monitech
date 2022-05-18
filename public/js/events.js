const btnEsconderMenu = document.getElementById('botao-interacao')
const divEsconderOpcoes = document.querySelector('.expansivel')
const btnEsconderOpcoes = document.querySelector('.btn-esconder-div')

const itens = document.querySelectorAll('.hover')
itens.forEach(el => {
    if (el.style.transition == '') {
        el.style.transition = '0.3s';
    }
});


btnEsconderMenu.addEventListener("click", function (){
    if(btnEsconderMenu.classList.contains('mostrando')){
        document.querySelector('.menu').style.left = "-140px";
        btnEsconderMenu.classList.remove('mostrando');
        document.querySelector('.content-menu').classList.add('escondido');
        document.querySelector('.btn-esconder').classList.add('escondido');
        btnEsconderMenu.setAttribute('src', '../assets/icons/menu.svg');

    } else {
        document.querySelector('.menu').style.left = "0";
        btnEsconderMenu.classList.add('mostrando');
        document.querySelector('.content-menu').classList.remove('escondido');
        document.querySelector('.btn-esconder').classList.remove('escondido');
        btnEsconderMenu.setAttribute('src', '../assets/icons/x.svg');
    }
})

btnEsconderOpcoes.addEventListener('click', function(){
    if(divEsconderOpcoes.classList.contains('expansivel')){
        divEsconderOpcoes.classList.remove('expansivel');
        divEsconderOpcoes.classList.add('minimizado');
        document.querySelector('.btn-esconder').style.transform = "rotate(0deg)";

    } else {
        divEsconderOpcoes.classList.remove('minimizado');
        divEsconderOpcoes.classList.add('expansivel');
        document.querySelector('.btn-esconder').style.transform = "rotate(180deg)";
    }
})

itens.forEach(el => {
    el.addEventListener('mouseover', function(){
        el.style.opacity = '1';
    })
});

itens.forEach(el => {
    el.addEventListener('mouseout', function(){
        el.style.opacity = '50%';
    })
});

const opacityCards = function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(el => {
        el.addEventListener('mouseover', function(){
            el.style.opacity = '1';
        })
    });
    
    cards.forEach(el => {
        el.addEventListener('mouseout', function(){
            el.style.opacity = '50%';
        })
    });

    cards.forEach(el => {
        el.addEventListener('click', function(){
            const selected = document.querySelector('.selected');
            if(selected) {
                selected.addEventListener('mouseout', function(){
                    selected.style.opacity = '50%';
                })
                selected.setAttribute('style', 'opacity: 0.5;');
                selected.classList.remove('selected'); 
            }
            el.classList.add('selected');
            el.removeAttribute('style');
            el.addEventListener('mouseout', function(){
                el.style.opacity = '100%';
            })
            el.setAttribute('style', 'opacity: 1;')
        })
    })
}

document.querySelector('.bem-vindo').addEventListener('click', function() {
    window.location.href = '/bem-vindo.html'
})

document.querySelector('.setups').addEventListener('click', function() {
    window.location.href = '/dashboard-setups.html'
})

document.querySelector('.inventario').addEventListener('click', function() {
    window.location.href = '/inventario.html'
})
