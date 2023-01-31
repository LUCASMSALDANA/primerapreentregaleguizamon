/* IMPORTACIONES */
import { agregar_carrito, actualizarCarrito, finalizarCompra} from "../carrito.js";
import { subastar, set_info } from "./subastas.js";

/*Llamamos y guardamos los botones en variables*/
const botonSubastar = document.getElementById("btn-subastar")
const boton=document.getElementById("btn-subastar");
const botonFinalizarcompra= document.getElementById("compraFinal"); 

/*Les asignamos a los botones una funcion*/
botonSubastar.onclick = subastar;
boton.addEventListener("click",set_info);
botonFinalizarcompra.addEventListener("click",finalizarCompra); 


actualizarCarrito();

let url="https://dummyjson.com/products?limit=6"; /*Guardamos la url de donde vamos a consumir el recurso*/

fetch(url) /* Consumimos una API con productos*/
.then(res => res.json()) 
.then(producto=>mostrarProducto(producto.products))
.catch(error=>console.log(error));


function mostrarProducto(producto){
    const areaMarket = document.getElementById("areaMarket")
    for(let i = 0; i<producto.length;i++){
        const card= document.createElement("div")
        card.className="card";
        card.style.width="90%"
        card.innerHTML = `
        <div>
            <img style="height: 265px;" src="${producto[i].thumbnail}" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">${producto[i].title}</h5>
          <p class="card-text">${producto[i].description} </p>
          <span class="precio">${producto[i].price}</span>  
          <a href="#carrito" class="btn btn-primary botonCompra">Comprar</a>
        </div>
         `; 
        areaMarket.append(card);
        let botonCompra=card.querySelector(".botonCompra")
        botonCompra.addEventListener("click",agregar_carrito);
    }
}