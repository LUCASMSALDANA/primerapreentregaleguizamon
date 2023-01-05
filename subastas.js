/*class compradores {
    constructor(nombre,apellido,subastado,edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.subastado=subastado;
        this.edad=edad;
    }
}

let lista_compradores = [];

for(let i=0;i<2;i=i+1){
    let nombre= prompt("ingrese su nombre");
    let apellido=prompt("ingrese apellido");
    let subastado=prompt("¿desea comprar una pintura, una escultura o una fotografia?")
    let edad=prompt("ponga su edad:")

    let nuevo_comprador = new compradores(nombre,apellido,subastado,edad);
    lista_compradores.push (nuevo_comprador);
}

console.log(lista_compradores);

function mayor_edad (compradores){
   
    return compradores.edad >=18;
}
lista_compradores.forEach (compradores =>{
    if (mayor_edad(compradores)){
        console.log("mayor de edad")
    }
})

let resultado_filter = lista_compradores.filter (mayor_edad);

console.log(resultado_filter);*/

const subastaDiv = document.getElementById("subastas-div");
const precioSubasta = document.getElementById("precio-subasta");
const inputSubasta = document.getElementById("caja-input-subasta")
const botonSubastar = document.getElementById("btn-subastar")

console.log(precioSubasta.innerHTML);
console.log("");
console.log(inputSubasta.value);

botonSubastar.onclick = subastar;

function subastar(){
    if(inputSubasta.value>precioSubasta.innerHTML){        
        precioSubasta.innerHTML=inputSubasta.value;
    }else{
        alert("El precio ofertado debe ser mayor al precio actual");
    }
}

let lista_usuarios=[];

function set_info(){
    let nombre=document.getElementById("nombre_usuario");
    let mail= document.getElementById("mail_usuario");
    let telefono=document.getElementById("telefono_usuario");
    console.log(nombre.value);
    console.log(mail.value);
    console.log(telefono.value);
    let usuario={nombre_del_usuario:nombre.value,
    mail_del_usuario:mail.value,
    telefono_del_usuario:telefono.value};
    lista_usuarios.push(usuario);
    let lista_json= JSON.stringify(lista_usuarios);
    localStorage.setItem("lista",lista_json);
    let recuperando= localStorage.getItem("lista");
    recuperando=JSON.parse(recuperando);
    console.log(recuperando);
}

let boton=document.getElementById("btn-subastar");

boton.addEventListener("click",set_info);

let boton_compra= document.querySelectorAll(".botonCompra");

function agregar_carrito(e){
    console.log("producto agregado");
    let producto_2= e.target;
    let producto_1= producto_2.parentNode;
    let producto=producto_1.parentNode;
    console.log(producto);
    let nombre_productos = producto_1.querySelector("h5").textcontent;
    let precio_productos = producto_1.querySelector("span").textcontent;
    let img_productos = producto.querySelector("img").src;

    console.log(nombre_productos);
    console.log(precio_productos);
    console.log(img_productos);
    let servicio={
        nombre: nombre_productos,
        precio: precio_productos,
        img: img_productos,
        cantidad:1
    };
    let servicio_json=JSON.stringify(servicio);
    localStorage.setItem("lista",servicio_json);
    carrito.push(servicio);
    function carrito(servicio){

        let fila = document.createElement("tr");
        fila.innerHTML = `<td><img src="${servicio.img}"></td>
                          <td>${servicio.nombre}</td>
                          <td>${servicio.cantidad}</td>
                          <td>${servicio.precio}</td>
                          <td><button class="btn btn-danger borrar_elemento">Borrar</button></td>
                          `;    
    
        let tabla = document.getElementById("tbody");
        tabla.append( fila );
}

}