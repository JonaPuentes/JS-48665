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

const arrayCarrito = [];

function sumaCarrito(Producto, cantidad,) {
if (typeof cantidad === "number" && cantidad > 0) {
    let productoEnCarrito = arrayCarrito.find(prod => prod.producto.nombre === Producto);
    if (productoEnCarrito != undefined) {
        productoEnCarrito.sumaStock();
    } else {
        const producto = productos.find(p => p.nombre === Producto);
        const enCarrito = new prodCarrito(Producto, cantidad, producto.precio);
        arrayCarrito.push(enCarrito);
    }
} 
}

function precioTotalCarrito() {
    let total = 0;
    for (let i = 0; i < arrayCarrito.length; i++) {
    total += arrayCarrito[i].precioTotal();
    }
    return total;
}


