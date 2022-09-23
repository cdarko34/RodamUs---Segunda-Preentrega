class usuario {
  constructor(username,email,password,prommo){
    this. username = username;
    this.email = email;
    this.password = password;
    this.promo = promo;
  }
}

const usuarios = []; 


const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

guardarLocal('listaUsuarios', JSON.stringify(usuarios));




document.getElementById('formulario-registro').addEventListener('submit', agregarUsuario);



function agregarUsuario(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const promo = document.getElementById('promo').value;

  const usuarioNuevo = new usuario(username, email, password, promo);
  usuarios.push(usuarioNuevo);

  console.log(usuarios);
  
  e.target.reset();
  
}


// //Inputs del form
 
// const form = document.querySelector('#form');
// const username = document.querySelector('#username');
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// const promo = document.querySelector('#promo');
// const botonPagar = document.querySelector('#botonPagar');





//Estructura para los paquetes del evento
class paquete {
    constructor(titulo, caracteristicas, precio){
        this.titulo = titulo;
        this.caracteristicas = caracteristicas;
        this.precio = precio;
    }
};


//Nuevos paquetes
const paquete1 = new paquete('Golden Pass', 'Entrada al evento, hospedaje en el destino, comida, bebidas, playera, vaso y parche conmemorativos.', '3000');
const paquete2 = new paquete('Silver Pass', 'Entrada al evento, hospedaje en el destino, comida y bebidas', '2000');


//Array de paquetes
const paquetes = [];

//Se agregan los paquetes nuevos al array
paquetes.push(paquete1);
paquetes.push(paquete2);



//Contenido del div para motrar el precio del paquete seleccionado
function mostrarPrecio(paquete){

    const contenedorDePrecios = document.getElementById("contenedor-precio");
    contenedorDePrecios.innerHTML = "";
  
    contenedorDePrecios.innerHTML = `
      Precio: $ ${paquete.precio} 
    `;
  }


//Se crea el boton "Seleccionar" y al dar clic muestra el precio con base en el paquete seleccionado
function crearBotonSeleccionar(paquete){
  const button = document.createElement("button");
  button.innerText = "Seleccionar";
  button.addEventListener("click", () => {
      mostrarPrecio(paquete);
    })
  return button;
}



//Crea un div en el que se muestran las características de los paquetes junto con el botón seleccionar
function mostrarPaquetes(paquetes) {
    const contenedorDePaquetes = document.getElementById('contenedor-de-paquetes');
    contenedorDePaquetes.innerHTML = "";

    paquetes.forEach(paquete => {
        const divPaquete = document.createElement("div"); // <div></div>
        divPaquete.classList.add('paquete');// <div class='paquete'></div>
        divPaquete.innerHTML = `
        <h3>${paquete.titulo}</h3>
        <p>${paquete.caracteristicas}</p>
        <p>$ ${paquete.precio}</p>
        `;
        

     // ==========
        const botonSeleccionar = crearBotonSeleccionar(paquete)


     // ==========        
        divPaquete.appendChild(botonSeleccionar);
        contenedorDePaquetes.append(divPaquete);

    });    
}


//Publica la sección de paquetes para el evento
mostrarPaquetes(paquetes);


// //Crea un div en el que se muestran las características de los paquetes junto con el botón seleccionar
// botonPagar.addEventListener('click', () => {
//   console.log(username.value);
//   console.log(email.value);
//   console.log(promo.value);

// })