// Tenemos un li de productos

const products = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./imagenes/taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./imagenes/taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./imagenes/bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./imagenes/bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./imagenes/zapato-rojo.jpg" }
];

// Seleccionamos correctamente el contenedor de productos
const listaDeProductos = document.getElementById("lista-de-productos");

// Seleccionamos el campo de entrada correctamente
const inputBusqueda = document.querySelector('#busqueda');

// Función para mostrar los productos
const mostrarProductos = (productos) => {
  // Limpiar la lista de productos antes de mostrar los nuevos
  listaDeProductos.innerHTML = '';
  
  productos.forEach(producto => {
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    d.appendChild(ti);
    d.appendChild(imagen);

    listaDeProductos.appendChild(d);
  });
};

// Mostrar los productos al cargar la página
mostrarProductos(productos);

// Seleccionamos el botón de filtro
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {
  const texto = inputBusqueda.value.trim().toLowerCase();
  const productosFiltrados = filtrado(productos, texto);
  mostrarProductos(productosFiltrados);
}

// Función para filtrar productos
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.toLowerCase().includes(texto) || item.color.toLowerCase().includes(texto));
}


