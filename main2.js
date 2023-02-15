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

class Producto{
    constructor(id, nombre, precio, stock, imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock  = stock;
        this.imagen = imagen;
    }
    restaStock(){
        this.stock = this.stock - 1;
        console.log(`El stock de ${this.nombre} ha sido actualizado`);
    }
};

//objetos

const producto0 = new Producto(0, 'Santa Julia', 900, 15, 'Santa Julia.png');
const producto1 = new Producto(1,'Fernet', 1200, 20, 'Fernet.png');
const producto2 = new Producto(2, 'Portillo',600, 10, 'Portillo.png');
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


//arrayCarrito

const arrayCarrito = [];
class prodCarrito{
    constructor(productos, cant, precio){
        this.producto = productos;
        this.cantidad = cant;
        this.precio = precio;
    }
    sumaStock(){
        this.cantidad = this.cantidad + 1
    }
}

// let arrayPrecios = [];
// class prodCarrito2{
//     constructor(precio){
//         this.precio = precio
// }
//     totalSuma(){
//         this.precio = this.precio + 1
//     }
// }

function sumaCarrito(prod){
    let variableCarrito = arrayCarrito.find(e => e.producto == prod);
    if(variableCarrito != undefined){

    let posicion = arrayCarrito.findIndex(elem => elem.producto == variableCarrito.producto)
    arrayCarrito[posicion].sumaStock()
    }else{
        const enCarrito = new prodCarrito(prod, 1,)
        arrayCarrito.push(enCarrito);
        console.log(arrayCarrito);
    }
}



