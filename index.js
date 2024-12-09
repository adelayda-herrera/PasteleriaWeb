function inicio(){
    colores();
}

function colores() {
    //cambiar color
    const principalElemento = document.getElementById("principal");
    

    setInterval(function(){
        const r = Math.floor(Math.random() * 124);
        const g = Math.floor(Math.random() * 124);
        const b = Math.floor(Math.random() * 124);
        //console.log(r, g, b);
        
        principalElemento.style.color =  `rgb(${r}, ${g}, ${b}) `;
    }, 1000);

}


// Array de textos:
const textos = [
    "Stay Fit & Enjoy Fresh, Organic Vegetables",
    "Live Well & Choose Only Fresh, Organic Veggies",
    "Prioritize Your Health & Eat Fresh, Organic Produce",
    "Stay Healthy & Nourish Yourself with Fresh Organic Vegetables",
    "Choose Wellness & Enjoy Fresh, Organic Vegetables",
    "Maintain Good Health & Opt for Fresh Organic Greens",
    "Live a Healthy Life & Consume Fresh, Organic Vegetables",
    "Eat Fresh & Embrace the Benefits of Organic Vegetables",
    "Nourish Your Body with Fresh, Organic Vegetables for Better Health",
    "Achieve Wellness by Eating Fresh and Organic Vegetables",
    "Be Healthy & Eat Only Fresh Organic Vagetables"
];

function slideTextos(textos) {
    let index = 0; // Comienza con el primer elemento

    // devuelve el siguiente texto en el array 
    return function() {
        const texto = textos[index];
        index = (index + 1) % textos.length; // Incrementa el índice y vuelve a 0 cuando llega al final
        return texto;
    };
}

const obtenerTexto = slideTextos(textos);

function slide(){
    //cambiar color
    const elemento = document.getElementById("titulo-banner");

    setInterval(function(){
        let nuevoTexto = obtenerTexto(textos);
        elemento.innerText = nuevoTexto;
    }, 1000);

}

function mostrarDetalleProduct(index){
    const detalle = document.getElementById(`detalle-${index}`)
    detalle.style.display="block"
    setTimeout(function(){
        detalle.style.display="none"
    },3000);
}

function cambiarBorde(agregar) {
    const elemento = document.getElementById('footer');
    if (agregar) elemento.style.border = "2px solid blue";
    else elemento.style.border = "none";
}


// Control de menu activado
const enlaces = document.querySelectorAll('.menu-links a');

// Activamos evento click en cada ocpion de menu
enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(event) {
        // eliminamos la clase 'active'
        enlaces.forEach(link => link.classList.remove('active'));

        // añadimos la clase 'active'
        enlace.classList.add('active');
    });
});

function hora() {
    
    const ahora = new Date(); //recuperar la hora del sistema

    // Obtener la hora en formato de 24 horas (hora:minutos:segundos)
    const hora = ahora.toLocaleTimeString('es-ES', {
        hour: '2-digit',   // Formato de dos dígitos para la hora
        minute: '2-digit', // Formato de dos dígitos para los minutos
        second: '2-digit', // Formato de dos dígitos para los segundos
        hour12: false       // 24 horas en lugar de formato AM/PM
    });
  
    document.querySelector('#hola div').textContent = 'Hora: ' + hora;

    setTimeout('hora()' , 1000 ); // se ejecuta cada segundo
}