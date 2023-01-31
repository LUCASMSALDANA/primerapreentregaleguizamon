import { agregar_carrito, actualizarCarrito, finalizarCompra} from "../carrito.js";
import { subastar, set_info } from "./subastas.js";

const botonSubastar = document.getElementById("btn-subastar")
const boton=document.getElementById("btn-subastar");
const botonFinalizarcompra= document.getElementById("compraFinal"); 

botonSubastar.onclick = subastar;
boton.addEventListener("click",set_info);
botonFinalizarcompra.addEventListener("click",finalizarCompra); 

const boton_compra= document.querySelectorAll(".botonCompra");

for(let i=0; i<boton_compra.length;i++){
    boton_compra[i].addEventListener("click",agregar_carrito)
}

actualizarCarrito();

    
