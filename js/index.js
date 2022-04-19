// Variables
const comidas = [
    {
        id:1,
        name : "Ceviche",
        img : './images/ceviche.jpg'
    },
    {
        id:2,
        name : "Arroz con Pato",
        img : './images/arroz-con-pato.jpg'
    },
    {
        id:3,
        name : "Causa Limeña",
        img : './images/causa-limena.jpg'
    },
    {
        id:4,
        name : "Lomo Saltado",
        img : './images/lomo-saltado.jpg'
    },
    {
        id:5,
        name : "Papa a la Huancaina",
        img : './images/papa-a-la-huancaina.jpg'
    },
    {
        id:6,
        name : "Parihuela",
        img : './images/parihuela-comida.jpg'
    },
    {
        id:7,
        name : "Aji de Gallina",
        img : './images/aji-de-gallina.jpg'
    },
    {
        id:8,
        name : "Rocoto Relleno",
        img : './images/rocoto-relleno.jpg'
    },
    {
        id:9,
        name : "Tallarines Verdes",
        img : './images/tallarines-verdes.jpg'
    },
];

const contenedorComidas = document.querySelector('.contenedor-comidas');
const listadoFavoritos = document.querySelector('.listado-favoritos');
const comidasFavoritas = [];

//Eventos 
document.addEventListener('DOMContentLoaded', () => {
    mostrarComidas();
})

//Funciones
function mostrarComidas() {
    comidas.forEach(comida => {
        //Scripting
        const divComida = document.createElement('div');
        divComida.classList.add('card');

        const imgComida = document.createElement('img');
        imgComida.src = comida.img;
        imgComida.classList.add('imagen-comida');

        const tituloComida = document.createElement('h3');
        tituloComida.textContent = comida.name;

        const btnFavorito = document.createElement('button');
        btnFavorito.className = "btn-favorito";
        btnFavorito.textContent = "Agregar a Favorito";
        btnFavorito.onclick = () => {
            agregarAFavorito(comida.id)
        };

        divComida.appendChild(imgComida);
        divComida.appendChild(tituloComida);
        divComida.appendChild(btnFavorito);
        
        contenedorComidas.appendChild(divComida);
    })
}

function agregarAFavorito(id){
    const comidaSeleccionada = comidas.find( comida => comida.id === id);
    comidasFavoritas.push(comidaSeleccionada);
    mostrarComidasFavoritas(comidasFavoritas);
}

function mostrarComidasFavoritas( favoritos ) {
    
    listadoFavoritos.innerHTML =  "";

    favoritos.forEach(comida => {
        //Scripting
        const divComida = document.createElement('div');
        divComida.classList.add('card');

        const imgComida = document.createElement('img');
        imgComida.src = comida.img;
        imgComida.classList.add('imagen-comida');

        const tituloComida = document.createElement('h3');
        tituloComida.textContent = comida.name;

        divComida.appendChild(imgComida);
        divComida.appendChild(tituloComida);
        
        listadoFavoritos.appendChild(divComida);
    })
}