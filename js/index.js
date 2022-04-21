// Variables
const comidas = [
    {
        id:1,
        name : "Asado",
        img : './images/asado.jpg'
    },
    {
        id:2,
        name : "Empanadas",
        img : './images/empanadas.jpg'
    },
    {
        id:3,
        name : "Gambas al ajillo",
        img : './images/gambas-al-ajillo.jpg'
    },
    {
        id:4,
        name : "Pizza",
        img : './images/pizza.jpg'
    },
    {
        id:5,
        name : "Pollo frito",
        img : './images/pollo-frito.jpg'
    },
    {
        id:6,
        name : "Ramen",
        img : './images/ramen.jpg'
    },
    {
        id:7,
        name : "Ravioles",
        img : './images/ravioles.jpg'
    },
    {
        id:8,
        name : "Sushi",
        img : './images/sushi.jpg'
    },
    {
        id:9,
        name : "Ñoquis",
        img : './images/ñoquis.jpg'
    },
];

const contenedorComidas = document.querySelector('.conteiner-comidas');
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