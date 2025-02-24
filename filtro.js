// La listas de productos con las imagenes de las tarjetas de productos. 

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "images/taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "images/taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "images/bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "images/bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "images/zapato-rojo.jpg" }
]

 //Cambie el nombre de las variables para que fueran mas descriptivas y fuera más fácil identificarlas.

const listaDeProductos = document.getElementById("listaDeProductos"); // Se cambió como nombre Id y después agregué un Id en HTML
const inputFiltro = document.querySelector('.input'); 

// Mostrar los productos que tenemos

const mostrarProductos = (productos) => { // Función para mostrar los productos. 
  for (let i = 0; i < productos.length; i++) {
    const divProducto = document.createElement("div");  
    divProducto.classList.add("producto");

    const tituloProducto = document.createElement("p");  
    tituloProducto.classList.add("titulo");
    tituloProducto.textContent = productos[i].nombre;

    const imagenProducto = document.createElement("img");
    imagenProducto.setAttribute('src', productos[i].img);

    divProducto.appendChild(tituloProducto);
    divProducto.appendChild(imagenProducto);
    listaDeProductos.appendChild(divProducto);
  }
}

// Llama a la función para mostrar los productos una vez que ya se establecieron. 
mostrarProductos(productos); // Mostrar productos function 

const botonDeFiltro = document.querySelector("button");

// Utilice addEventListener , pero tenfo entendido que On click hace lo mismo, no sé bien cuál es la diferencia.
botonDeFiltro.addEventListener('click', () => {
  // Al momento de mostrar los productos, elimina los demás para mostrar solo lo filtrado, estoy seguro que funciona así.
  while (listaDeProductos.firstChild) {
    listaDeProductos.removeChild(listaDeProductos.firstChild);
  }

  const textoFiltro = inputFiltro.value;
  console.log(textoFiltro);
  const productosFiltrados = filtrarProductos(productos, textoFiltro);

  // Agrege que muentre un mensaje si no se encuentran productos o se escriben mal
  if (productosFiltrados.length === 0) {
    const mensajeNoEncontrado = document.createElement("p");
    mensajeNoEncontrado.textContent = "No se encontraron productos.";
    listaDeProductos.appendChild(mensajeNoEncontrado);
  } else {
    for (let i = 0; i < productosFiltrados.length; i++) {
      const divProducto = document.createElement("div");
      divProducto.classList.add("producto");

      const tituloProducto = document.createElement("p");
      tituloProducto.classList.add("titulo");
      tituloProducto.textContent = productosFiltrados[i].nombre;

      const imagenProducto = document.createElement("img");
      imagenProducto.setAttribute('src', productosFiltrados[i].img);

      divProducto.appendChild(tituloProducto);
      divProducto.appendChild(imagenProducto);
      listaDeProductos.appendChild(divProducto);
    }
  }
});

// Función de filtrado operación 
const filtrarProductos = (productos = [], textoFiltro) => {
  return productos.filter(item => item.tipo.includes(textoFiltro) || item.color.includes(textoFiltro));
}
}


