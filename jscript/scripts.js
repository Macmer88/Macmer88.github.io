const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const list = document.querySelector("#items");



abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


list.addEventListener("click", () => {
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

//función mostrar - ocultar carta

function mostrarCarta(){
    menu = document.getElementById('carta');
    if(menu.style.display = 'none'){
        menu.style.display = 'flex'
    }
    
    
   
}

function cerrarCarta(){
    cartel = document.getElementById('carta');
    if(cartel.style.display = 'flex'){
        cartel.style.display = 'none';
    }
}

//validacion del formulario 
const btnEnviar = document.querySelector('#btn-enviar');

function validacion(){

    const nombreYapellido = document.querySelector('#nombreapellido');

    const correoelectronico = document.querySelector('#correoelectronico');

    const telefono = document.querySelector('#telefono');

    const mensaje = document.querySelector('#mensaje');



    if(nombreYapellido.value === ""){
        alert('Por favor, ingrese su nombre y apellido');
        return false
    }

    if(correoelectronico.value === ""){
        alert('Por favor, ingrese su dirección de email');
        return false
    }
   
    if(telefono.value === ""){
            alert('Por favor ingrese un número de teléfono valido');
        
        return false
    }
    if(mensaje.value === ""){
        alert('Por favor, ingrese su mensaje');
        return false
    }

     return true;
}


//Funcion que llama a la API y muestra cotizaciones de divisas
fetch('https://openexchangerates.org/api/latest.json?app_id=7496c72487724a238e80189324d7a83e')
  .then(response => response.json())
  .then(data => {
    const ArsToUsd = (data.rates.USD / data.rates.ARS).toFixed(4);
    const ArsToBrl = (data.rates.BRL / data.rates.ARS).toFixed(3);
    const ArsToUyu = (data.rates.UYU / data.rates.ARS).toFixed(2);

    const ArsToUsdElement = document.getElementById('ars-to-usd');
    const ArsToBrlElement = document.getElementById('ars-to-brl');
    const ArsToUyuElement = document.getElementById('usd-to-uyu');
    

    ArsToUsdElement.innerHTML = `USD: ${ArsToUsd}`;
    ArsToBrlElement.innerHTML = `BRL: ${ArsToBrl}`;
    ArsToUyuElement.innerHTML = `UYU: ${ArsToUyu}`;
  });








