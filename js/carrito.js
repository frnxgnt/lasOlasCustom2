
const quitarItemBoton = document.querySelector("#boton-quitar")
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

// funcion para crear las guitarras seleccionadas en el div del carrito
function mostrarCarrito(carrito) {
    carritoGuitarras.innerHTML = "";
    carrito.forEach(guitarra => {
      carritoGuitarras.innerHTML += `
      <div class="guitar">
        <img src="${guitarra.imagen}" alt="${guitarra.titulo}">
        <div class="guitar-info">
          <h3>${guitarra.titulo}</h3>
          <p>${guitarra.precio}</p>
        </div>
      </div>`;
  });
  }

mostrarCarrito(productosEnCarrito);

quitarItemBoton.addEventListener("click", limpiarCarrito)
function limpiarCarrito(){
    localStorage.removeItem("productos-en-carrito");
    mostrarCarrito();
}