//Validacion de Datos

let btnSubmit = document.getElementById("FormDeIngreso")
btnSubmit.addEventListener("submit", validaForm)

function validaForm(e){
    e.preventDefault();
    let contenidoForm = e.target;

    let nombreUser = contenidoForm.children[0].value

    let apellidoUser = contenidoForm.children[1].value
    console.log(contenidoForm.children[1].value)

    let edad = contenidoForm.children[2].value;
    edad = parseInt(edad);
    if (edad >= 18){
        const cardBoostrap = (stockCompra) => {
            for    (e of stockCompra){
                let card = document.createElement("div")
                card.innerHTML = `<div class="card" style="width: 18rem;">
                <img src="./img/${e.imagen}" class="card-img-top" alt=" Esta es la imagen de ${e.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${e.nombre}</h5>
                    <p class="card-text">Aprovecha estas ofertas ${e.precio}! </p>
                    <input type="button" onclick= "sumaCarrito(${e.id})" class="btn btn-primary" value="Solo quedan ${e.stock} unidades" >
                </div>
            </div>` 
            document.body.append(card);
            }
        }
        cardBoostrap(productos);
    }
    else{
        let div = document.createElement("div")
        div.innerHTML =`<h1> Hola ${nombreUser} NO sos mayor de 18, no podes ingresar a la web</h1>`
        document.body.appendChild(div)
    }
}

//Productos 

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


const producto0 = new Producto(0, 'Santa Julia', 900, 15, 'Santa Julia.png');
const producto1 = new Producto(1, 'Fernet', 1200, 20, 'Fernet.png');
const producto2 = new Producto(2, 'Portillo', 600, 10, 'Portillo.png');
const producto3 = new Producto(3, 'Aperol', 1200, 7, 'Aperol.png');
const producto4 = new Producto(4, 'Campari', 600, 15, 'Campari.png');

const productos = [producto0, producto1, producto2, producto3, producto4];
console.log(productos);


//array Carrito
const arrayCarrito = []

class prodCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
    
    sumaStock(){
        this.cantidad = this.cantidad + 1;
    }
}


function sumaCarrito(Produ){
    let ProductoEnCarrito = arrayCarrito.find(e => e.Producto == Produ)
    if(ProductoEnCarrito != undefined){
        let posicion = arrayCarrito.findIndex(elem => elem.producto == ProductoEnCarrito.producto)
        arrayCarrito [posicion].sumaStock() 
        console.table(arrayCarrito)
    }else{
        const sumaProducto = new prodCarrito (Produ, 1)
        arrayCarrito.push(sumaProducto);
        console.table(arrayCarrito)
    }
}

function precioTotalCarrito() {
    let total = 0;
    for (let i = 0; i < arrayCarrito.length; i++) {
    total += arrayCarrito[i].precioTotal();
    }
    return total;
}


