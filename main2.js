let nombreUser = prompt("Bienvenido a CerTek, Por favor ingrese su nombre");
let apellidoUser = prompt ("Ingresa tu apellido");

let datosUser = nombreUser + " " + apellidoUser;

function saludoEspecifico (nombre){
    alert(`Hola ${nombre}`);
}
saludoEspecifico(datosUser)

const mayor = 18; 
let edad = parseInt(prompt("Ingresa tu edad"));

if(edad >=mayor){
    alert("Sos mayor podes ingresar a la web");
} else {
    alert("No sos mayor de 18, no podes ingresar a la web");
}
console.log(datosUser + "," + edad );

//Identificador

class Producto {
    constructor(id, nombre, precio, stock, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }

    restaStock() {
        this.stock = this.stock - 1;
        console.log(`El stock de ${this.nombre} ha sido actualizado`);
    }
}

class prodCarrito {
    constructor(producto, cantidad, precio) {
        this.producto = producto;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    sumaStock() {
        this.cantidad = this.cantidad + 1;
    }

    precioTotal() {
      return this.cantidad * this.precio;
    }
}

const producto0 = new Producto(0, 'Santa Julia', 900, 15, 'Santa Julia.png');
const producto1 = new Producto(1, 'Fernet', 1200, 20, 'Fernet.png');
const producto2 = new Producto(2, 'Portillo', 600, 10, 'Portillo.png');
const producto3 = new Producto(3, 'Aperol', 1200, 7, 'Aperol.png');
const producto4 = new Producto(4, 'Campari', 600, 15, 'Campari.png');

const productos = [producto0, producto1, producto2, producto3, producto4];
console.log(productos);

const cardDiv = (stockProducto) => {
    for (elem of stockProducto){
        let = card = document.createElement("div")
        card.innerHTML = `<h2>Agregar ${elem.nombre}</h2>
        <input type ="button" value="comprame" onclick ="elem.restaStock()">`
        document.body.append(card)
    }
}
cardDiv(productos)



//Func (DOM)
const cardBoostrap = (stockProducto) =>{
    for (e of stockProducto){
        let card = document.createElement("div")
        card.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="./img/${e.imagen}" class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">${e.nombre}</h5>
                            <p class="card-text">Aprovecha estas ofertas ${e.precio}</p>
                            <input type ="button" onclick="sumaCarrito (${e.id})" class= "btn btn-primary" value ="Agregar al Carrito" >
                            </div>
                            </div>`
                document.body.append(card);
    }
}
cardBoostrap(productos)

const arrayCarrito = [];

function sumaCarrito(nombreProducto, cantidad,) {
    if (typeof cantidad === "number" && cantidad > 0) {
        let productoEnCarrito = arrayCarrito.find(prod => prod.producto.nombre === nombreProducto);
        if (productoEnCarrito != undefined) {
        productoEnCarrito.sumaStock();
        } else {
        const producto = productos.find(p => p.nombre === nombreProducto);
        const enCarrito = new prodCarrito(producto, cantidad, producto.precio);
        arrayCarrito.push(enCarrito);
        }
        actualizarCarrito();
    } else {
        const totalCarrito = precioTotalCarrito();
        console.log(`El precio total de la compra es de ${totalCarrito}`);
    }
}

function precioTotalCarrito() {
    let total = 0;
    for (let i = 0; i < arrayCarrito.length; i++) {
        total += arrayCarrito[i].precioTotal();
    }
    return total;
}


