swal({
    title: "Bienvenido",
    text: "Ingresa tus datos",
    icon:"info",
})

// Validacion de Datos
let btnSubmit = document.getElementById("FormDeIngreso")
btnSubmit.addEventListener("submit", validaForm)

function validaForm(e) {
    e.preventDefault();
    let contenidoForm = e.target;
    let nombreUser = contenidoForm.children[0].value
    let apellidoUser = contenidoForm.children[1].value
    let edad = contenidoForm.children[2].value;
    edad = parseInt(edad);

    if (edad >= 18) {
        swal({
            title: "Datos confirmados",
            text: "Gracias por ingresar tus datos, podes acceder",
            icon: "success",
        })
        const cardBoostrap = (stockCompra) => {
            for (e of stockCompra) {
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

        // Obtener el carrito almacenado en localStorage
        let carritoGuardado = localStorage.getItem("carrito");
        if (carritoGuardado) {
            arrayCarrito = JSON.parse(carritoGuardado);
            console.log("Carrito cargado desde localStorage:", arrayCarrito);
        }
    } else {
        swal({
            title: "Validacion erronea",
            text: "sos menor de 18 años, no podes ingresar",
            icon: "error",
        })
    }
}

// Productos 
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
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
    sumaStock() {
        this.cantidad = this.cantidad + 1;
    }
}
const producto0 = new Producto(0, 'Santa Julia', 900, 15, 'Santa Julia.png');
const producto1 = new Producto(1, 'Fernet', 1200, 20, 'Fernet.png');
const producto2 = new Producto(2, 'Portillo', 600, 10, 'Portillo.png');
const producto3 = new Producto(3, 'Aperol', 1200, 7, 'Aperol.png');
const producto4 = new Producto(4, 'Campari', 600, 15, 'Campari.png');

const productos = [producto0, producto1, producto2, producto3, producto4];

// Array de Carrito
let arrayCarrito = [];

//convertir el carrito a JSON
const carritoJSON = JSON.stringify(arrayCarrito);

//Recuperamos el carrito del localStorage
const carritoRecuperado = localStorage.getItem("arrayCarrito");

//convierto el JSON a objeto
const carritoObjeto = JSON.parse(carritoRecuperado);

//Paso los objetos a JSON
const productosJSON = JSON.stringify(productos)

//Almaceno los objetos en el local
localStorage.setItem("productos", productosJSON)

//Recupero los objetos del JSON
const produJSON = localStorage.getItem("productos");
const produConsole = JSON.parse(produJSON);
console.log(produConsole);


//modo dark en la pagina
const modeButton = document.getElementById("modeButton")
    modeButton.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("modo", "dark")
    } else {
        localStorage.setItem("modo", "light");
    }
})

//Lo recupero del localStorage
const modo = localStorage.getItem("modo");
    if(modo === "dark"){
        document.body.classList.add("dark");
    } else{
        document.body.classList.remove("dark");
    }

    //Uso de promesas & fetch (Usuarios aleatorios)

    const link = 
    "https://jsonplaceholder.typicode.com/users";  


    const Users = async() =>{
        const res = await fetch(link);
        const data = await res.json();
        console.log(data)
    }

    Users()



    function sumaCarrito(Produ){
    //console.log(Produ);
    let producto = productos.find(e => e.id == Produ);
    //console.log(producto);

    const prodAlCarrito = {
        nombre : producto.nombre,
        precio : producto.precio,
        id     : producto.id,
        stock  : producto.stock,
        img    : producto.imagen,
        cantidad: 1,
    }

    let existe = arrayCarrito.some(e => e.id == Produ)
    if (existe) {
        let posicion = arrayCarrito.findIndex((elem) => elem.id == producto.id);
        arrayCarrito[posicion].cantidad++;
        arrayCarrito[posicion].precio = prodAlCarrito.precio * arrayCarrito [posicion].cantidad;
        console.log(arrayCarrito)
    } else {
        
        arrayCarrito.push(prodAlCarrito);
        console.log(arrayCarrito)
    }
    localStorage.setItem("arrayCarrito", JSON.stringify(arrayCarrito))
}

const total = calcularTotalCarrito();
console.log(total);


function precioTotalCarrito() {
    let total = 0;
    for (let i = 0; i < arrayCarrito.length; i++) {
        total += arrayCarrito[i].precioTotal();
    }
    return total;
}

function calcularTotalCarrito(){
    const total = arrayCarrito.reduce ( (acc, prod) => acc += prod.precio, 0);
    return total;
}


