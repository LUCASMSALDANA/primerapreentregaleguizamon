import { agregar_carrito, mostrarCarrito} from "./carrito.js";

const subastaDiv = document.getElementById("subastas-div");
const precioSubasta = document.getElementById("precio-subasta");
const inputSubasta = document.getElementById("caja-input-subasta")
const botonSubastar = document.getElementById("btn-subastar")


botonSubastar.onclick = subastar;

function subastar(){
    if(parseInt(inputSubasta.value)>parseInt(precioSubasta.innerHTML)){ 
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
    let usuario={nombre_del_usuario:nombre.value,
    mail_del_usuario:mail.value,
    telefono_del_usuario:telefono.value};
    lista_usuarios.push(usuario);
    let lista_json= JSON.stringify(lista_usuarios);
    localStorage.setItem("lista",lista_json);
    let recuperando= localStorage.getItem("lista");
    recuperando=JSON.parse(recuperando);

}

let boton=document.getElementById("btn-subastar");
mostrarCarrito();


boton.addEventListener("click",set_info);

const boton_compra= document.querySelectorAll(".botonCompra");


for(let i=0; i<boton_compra.length;i++){
    boton_compra[i].addEventListener("click",agregar_carrito)
}


