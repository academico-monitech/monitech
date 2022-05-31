let pointSelecionado = "";
const points = document.querySelectorAll('.point');

points.forEach(el => {
    el.addEventListener('click', function(){
        selectPoint(el)
    })
})

function selectPoint(el){
    points.forEach(element => {
        element.style.opacity = '20%'
    })
    console.log(el.id);
    document.querySelectorAll('.page-carrossel').forEach(el => {
        el.style.display = 'none'
    });
    el.style.opacity = '100%';
    const id = el.id;

    switch (el.id) {
        case "point-1":
            document.querySelector('#page-1').style.display = 'flex'
            break;
        case "point-2":
            document.querySelector('#page-2').style.display = 'flex'
            break;
        case "point-3":
            document.querySelector('#page-3').style.display = 'flex'
            break;
        case "point-4":
            document.querySelector('#page-4').style.display = 'flex'
            break;
        default:
            break;
    }
}