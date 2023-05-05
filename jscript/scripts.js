const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})




function mostrarContenido(){
    cartel = document.getElementById('formulario');
    if(cartel.style.display = 'none'){
        cartel.style.display = 'flex'
    }
    
    
   
}

function ocultarContenido(){
    cartel = document.getElementById('formulario');
    if(cartel.style.display = 'flex'){
        cartel.style.display = 'none';
    }
}

// comienzo del slider
// boton next
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition ="all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500
    );
}

// boton previo

function prev(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast =sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition ="all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500
    );
}

btnRight.addEventListener('click', function(){next()});
btnLeft.addEventListener('click', function(){prev()});

// función mostrar / ocultar carta

function mostrarCarta(){
    menu = document.getElementById('menu-carta');
    if(menu.style.display = 'none'){
        menu.style.display = 'flex'
    }
    
    
   
}

function ocultarContenido(){
    cartel = document.getElementById('menu-carta');
    if(cartel.style.display = 'flex'){
        cartel.style.display = 'none';
    }
}

