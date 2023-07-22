
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

//generar formulario para finalizar compra
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("generarFormulario");
  const formContainer = document.getElementById("formularioContainer");

  button.addEventListener("click", function () {
    
    const form = document.createElement("form");

    
    const nombreLabel = document.createElement("label");
    nombreLabel.textContent = "Nombre: ";
    const nombreInput = document.createElement("input");
    nombreInput.setAttribute("type", "text");
    nombreInput.setAttribute("name", "nombre");
    form.appendChild(nombreLabel);//lo agrego como hijo del form
    form.appendChild(nombreInput);
    form.appendChild(document.createElement("br")); //salto de linea

    
    const apellidoLabel = document.createElement("label");
    apellidoLabel.textContent = "Apellido: ";
    const apellidoInput = document.createElement("input");
    apellidoInput.setAttribute("type", "text");
    apellidoInput.setAttribute("name", "apellido");
    form.appendChild(apellidoLabel);
    form.appendChild(apellidoInput);
    form.appendChild(document.createElement("br"));

    
    const domicilioLabel = document.createElement("label");
    domicilioLabel.textContent = "Domicilio: ";
    const domicilioInput = document.createElement("input");
    domicilioInput.setAttribute("type", "text");
    domicilioInput.setAttribute("name", "domicilio");
    form.appendChild(domicilioLabel);
    form.appendChild(domicilioInput);
    form.appendChild(document.createElement("br"));

    
    const cpLabel = document.createElement("label");
    cpLabel.textContent = "Código Postal: ";
    const cpInput = document.createElement("input");
    cpInput.setAttribute("type", "text");
    cpInput.setAttribute("name", "codigo_postal");
    form.appendChild(cpLabel);
    form.appendChild(cpInput);
    form.appendChild(document.createElement("br"));

    
    const provinciaLabel = document.createElement("label");
    provinciaLabel.textContent = "Provincia: ";
    const provinciaInput = document.createElement("input");
    provinciaInput.setAttribute("type", "text");
    provinciaInput.setAttribute("name", "provincia");
    form.appendChild(provinciaLabel);
    form.appendChild(provinciaInput);
    form.appendChild(document.createElement("br"));

    // boton para enviar el formulario
    const submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Finalizar Compra");
    submitButton.setAttribute("id", "boton-finalizarCompra")
    form.appendChild(submitButton);

    
    formContainer.innerHTML = "";
    formContainer.appendChild(form);

    // limpio el carrito una vez completado el formulario
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Compra finalizada',
        showConfirmButton: false,
        timer: 1500
      })
      limpiarCarrito();
    });
  });

  

});

