let carrito = [];
let totalCompra = 0;



// Referencia
const Mollie = document.querySelector("#btnMollie");
const Amy = document.querySelector("#btnAmy");
const El10 = document.querySelector("#btnEl10");
const SarahKey = document.querySelector("#btnSarahKey");

// Eventos de click


Amy.addEventListener("click", function() {
  agregarAlCarrito("Amy");
});

Mollie.addEventListener("click", function() {
  agregarAlCarrito("Mollie");
});

El10.addEventListener("click", function() {
  agregarAlCarrito("El 10");
});

SarahKey.addEventListener("click", function() {
  agregarAlCarrito("Sarah Key");
});

// Agregar al carrito
function agregarAlCarrito(nombreProducto) {
  
    // Agregar el producto al carrito
    carrito.push(nombreProducto);
  
    // Actualizar el precio del producto agregado al totalCompra
    if (nombreProducto === "Mollie") {
      totalCompra += 2000; // Precio de Mollie
    } else if (nombreProducto === "Amy") {
      totalCompra += 2000; // Precio de Amy
    } else if (nombreProducto === "El 10") {
      totalCompra += 2000; // Precio de El 10
    } else if (nombreProducto === "Sarah Key") {
      totalCompra += 2000; // Precio de Sarah Key
    }
  
    // Actualizar la visualización del carrito
    actualizarCarrito();

  
    console.log("Añadir al carrito: " + nombreProducto);
  
  
}

// Actualizar el contenido del carrito
function actualizarCarrito() {
   
        const carritoElement = document.querySelector("#carrito");
        const totalElement = document.querySelector("#total");
        carritoElement.innerHTML = ""; // Limpiar el contenido previo del carrito
      
        // Agregar cada producto del carrito al carritoElement
        carrito.forEach(function(producto) {
          const productoElement = document.createElement("li");
          productoElement.textContent = producto;
          carritoElement.appendChild(productoElement);
        });
      
        // Total de la compra
        totalElement.textContent = "Total: $" + totalCompra;
      }
      
 
  
  // Agregar cada producto del carrito al carritoElement
  carrito.forEach(function(producto) {
    const productoElement = document.createElement("li");
    productoElement.textContent = producto;
    carritoElement.appendChild(productoElement);
  });


//Modifico nombre del carrito

const titulo= document.querySelector('#carro')
titulo.textContent = "Tu Carrito"

console.log("carro")

// Validar formulario
  const form = document.querySelector("#myForm");
  const btnSignIn = document.querySelector("#btnSignIn");

  function validarFormulario() {
    const inputName = document.querySelector("#inputName").value;
    const inputEmail = document.querySelector("#inputEmail").value;
    const inputAddress = document.querySelector("#inputAddress").value;
    const inputCelular = document.querySelector("#inputCelular").value;
    const inputTipe = document.querySelector("#inputTipe").value;
    const inputImageLink = document.querySelector("#inputImageLink").value;

    btnSignIn.addEventListener("click", function(event) {
      event.preventDefault(); // Evitar que se envíe el formulario automáticamente

      if (validarFormulario()) {
        form.submit(); // Enviar el formulario si pasa la validación
      }
    });
    // Verificar formulario completo
    if (inputName === "" || inputEmail === "" || inputAddress === "" || inputCelular === "" || inputTipe === "" || inputImageLink === "") {
      alert("Por favor, complete todos los campos");
      return false;
     
    }
    return true; // Devolver true si el formulario es válido
  
  }
  
  console.log ("myForm") 

  
 


    
    
 


