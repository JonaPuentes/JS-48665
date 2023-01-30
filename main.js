const productos = [
    {nombre:"Santa Julia", Precio: 900},
    {nombre:"Fernet", Precio: 1200},
    {nombre:"Vino Portillo", Precio: 600},
    {nombre:"Aperol", Precio: 1200},
    {nombre:"Campari", Precio: 800},
];


let nombreUser = prompt("Bienvenido a CerTek, Por favor ingrese su nombre");
let apellidoUser = prompt ("Ingresa tu apellido");

let datosUser = nombreUser + " " + apellidoUser;
console.log(datosUser);

const mayor = 18; 
let edad = parseInt(prompt("Ingresa tu edad"));

if(edad >=mayor){
    alert("Sos mayor podes ingresar a la web");
} else {
    alert("No sos mayor de 18, no podes ingresar a la web");
}

let carrito = [];

let seleccion = prompt("¿Quiere comprar alcohol?, Responda si o no");

while(seleccion != "si" && seleccion != "no"){
    alert ("Por favor ingrese si o no");
    seleccion = prompt("¿Quiere comprar alcohol?, Responda si o no")
}
if(seleccion == "si"){
    alert ("a continuacion la lista de productos");
    let listaDeProductos = productos.map ((productos)=> productos.nombre + " " + productos.Precio + "$");
    alert (listaDeProductos.join(" - "));
}
else if (seleccion== "no"){
    alert ("Gracias por visitarnos, lo esperamos la proxima.");
}
while (seleccion != "no"){
    let productos = prompt("¿Que deseabas comprar?");
    let Precio = 0;

    if(productos == "Vino Santa Julia" || productos == "Fernet Branca" || productos== "Aperol" ||productos == "Vino Portillo" ||productos == "Campari"){
        switch(productos){
            case "Vino Santa Julia":
            Precio = 900
            break
            case "Fernet Branca":
            Precio = 1200
            break
            case "Aperol":
            Precio = 1200
            break
            case "Vino Portillo":
            Precio = 600
            break
            case "Campari":
            Precio = 600
            break
        }
        let unidades = parseInt(prompt("¿Cuantas unidades quiere?"))
        carrito.push({carrito, unidades, Precio})
        console.log(carrito)
    } else{
        alert("No tenemos ese producto")
    }
    seleccion = prompt ("¿Desea seguir comprando?")
    while (seleccion === "no"){
        alert ("Gracias por la compra.");
        carrito.forEach((carritoFinal)=> {
            console.log(`producto: ${carritoFinal.productos}, unidades: ${carrito.unidades} Precio por unidad: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;

    }
}