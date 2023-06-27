let guitarras = [];
let carrito = [];

let contenedorGuitarras = document.querySelector("#contenedorGuitarras");
const carritoGuitarras = document.querySelector("#carritoGuitarras");
const contenedorMarcas = document.querySelector("#marcas");


function cargarMarcas(guitarras){
  const marcasUnicas = [];

  for (let i = 0; i < guitarras.length; i++) {
      const marca = guitarras[i].marca;

      if (!marcasUnicas.includes(marca)) {
          marcasUnicas.push(marca);
      }
  } console.log(marcasUnicas);

  marcasUnicas.forEach(marca => {
    contenedorMarcas.innerHTML += `
    <option class="opcionMarca" value="${marca}">${marca}</option>`
  })
    
  contenedorMarcas.addEventListener("change", (e) => {
    const opcionSeleccionada = e.target.value;
    console.log('Opción seleccionada:', opcionSeleccionada);

    const marcasFiltradas = guitarras.filter(guitarra =>{
      return guitarra.marca === opcionSeleccionada;
    })
    contenedorGuitarras.innerHTML = "";
    cargarGuitarras(marcasFiltradas)
  });

}

fetch("./js/guitarras.json")
  .then(response => response.json())
  .then(data => {
    guitarras = data;
    cargarGuitarras(guitarras);
    cargarMarcas(guitarras);
  });

  

function cargarGuitarras(guitarras) {
 console.log(contenedorGuitarras)
  guitarras.forEach(guitarra => {
    contenedorGuitarras.innerHTML += `
    <div class="guitar">
      <img src="${guitarra.imagen}" alt="${guitarra.titulo}">
      <div class="guitar-info">
        <h3>${guitarra.titulo}</h3>
        <p>${guitarra.precio}</p>
        <button class="boton-agregar" id="${guitarra.id}">Agregar</button>
      </div>
    </div>
    `;
  });
  const botonesAgregar = document.querySelectorAll(".boton-agregar");
  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", () => {
      console.log(boton.id)
      agregarAlCarrito(boton.id);
      mostrarCarrito();
      alert("Se agrego su guitarra al carrito") //REEMPLAZAR POR SWEETALERT
    });
  });
}




function agregarAlCarrito(id) {
  const guitarraElegida = guitarras.find(guitarra => guitarra.id === id);
  carrito.push(guitarraElegida);
}

function mostrarCarrito() {
  carritoGuitarras.innerHTML = "";
  carrito.forEach(guitarra => {
    carritoGuitarras.innerHTML += `
    <div class="guitarra">
      <img src="${guitarra.imagen}" alt="${guitarra.titulo}">
      <div class="guitarra-info">
        <h3>${guitarra.titulo}</h3>
        <p>${guitarra.precio}</p>
      </div>
    </div>
    `;
  });
}


