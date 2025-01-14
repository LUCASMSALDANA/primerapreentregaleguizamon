export function agregar_carrito(e){
    let listaCarrito=recuperarCarrito();
    let itemRepetido= false; /**Esta variable se usa cuando quiero comprar un item q ya esta en mi lista */

    let producto_2= e.target;
    let producto_1= producto_2.parentNode;
    let producto=producto_1.parentNode;

    let nombre_productos = producto_1.querySelector("h5").innerHTML;
    let precio_productos = producto_1.querySelector("span").innerHTML;
    let img_productos = producto.querySelector("img").src;

    let itemCarrito={  /** Es el mismo objeto pero le cambie el nombre para q sea mas facil */
        nombre: nombre_productos,
        precio: precio_productos,
        img: img_productos,
        cantidad:1
    };

    listaCarrito.forEach(producto => {  /** Recorro mi listaCarrito (Es la que esta en local storage) */
        if(itemCarrito.img==producto.img){ /**Pregunto si la imagen del item que va a comprar la persona es igual al producto que tengo guardado en el localstorage (es decir si ya existe en mi carrito) */
            producto.cantidad++ /** en caso de que exista, a ese producto dentro de mi localstorage le sumo 1  */
            itemRepetido=true; /**Como el item que quiere comprar esta repetido cambio el valor de la variable */
        }
    });

    if(!itemRepetido){ /**Si el item no esta repetido, entonces voy a agregarlo a mi lista que voy a guardar en mi local storage */
        listaCarrito.push(itemCarrito);    
    }

    guardarCarrito(listaCarrito);
    actualizarCarrito(); /* LLamo a la funcion que muestra el carrito */
}

function recuperarCarrito(){
    let listaCarrito = JSON.parse(localStorage.getItem("listaCarrito")) || [];
    return listaCarrito;
}

export function actualizarCarrito(){  /*Le cambie el nombre a la funcion (antes era solo carrito), de esta manera se entiende mejor que hace esta funcion */
    const carritoEnPantalla = document.getElementById("tbody");
    carritoEnPantalla.innerHTML="";
    let listaCarrito = recuperarCarrito();
    listaCarrito.forEach(producto =>{ /*para cada elemento de la lista voy a hacer lo siguiente */
        let fila = document.createElement("tr");
        fila.innerHTML = `<td><img class="carrito-img" src="${producto.img}"></td> 
                          <td>${producto.nombre}</td>
                          <td>${producto.cantidad}</td>
                          <td>${producto.precio}</td>
                          <td><button class="botones-carrito boton-suma">+</button></td>
                          <td><button class="botones-carrito boton-resta">-</button></td>
                          <td><button class="btn btn-danger borrar_elemento">Borrar</button></td>
                          `;    /**En la linea 129 agregue un estilo para q la imagen se vea chico */
        let botonSuma= fila.querySelector(".boton-suma");
        let botonResta = fila.querySelector(".boton-resta")
        botonSuma.addEventListener("click", sumarRestarItems);
        botonResta.addEventListener("click", sumarRestarItems);
        const boton_borrar= fila.querySelector(".borrar_elemento");
        boton_borrar.addEventListener("click",borrarElemento)
        let tabla = document.getElementById("tbody");
        tabla.append( fila );
    })
    
    return ;    
}

function borrarElemento(e){
    let listaCarrito=recuperarCarrito();
    let imgParaBorrar= e.target.parentNode.parentNode.querySelector(".carrito-img").src;

    let pos=0;
    listaCarrito.forEach(producto => {  /** Recorro mi listaCarrito (Es la que esta en local storage) */
        if(imgParaBorrar==producto.img){ /**Pregunto si la imagen del item que va a comprar la persona es igual al producto que tengo guardado en el localstorage (es decir si ya existe en mi carrito) */
            listaCarrito.splice(pos,1);
        }
        pos++;
    });
    guardarCarrito(listaCarrito);
    
    let botonPresionado = e.target;
    let columnaBotonPresionado = botonPresionado.parentNode;
    let fila = columnaBotonPresionado.parentNode;
    fila.innerHTML="";
}

function guardarCarrito(listaCarrito){
    let listaCarrito_json=JSON.stringify(listaCarrito);
    localStorage.setItem("listaCarrito",listaCarrito_json); /**Guardo mi lista, ya sea porque le agregue un item al carrito, o porque aumente el valor de algun producto que ya estaba dentro del carrito */

}

function sumarRestarItems(e){
    let imgParaBorrar = e.target.parentNode.parentNode.querySelector("img").src;
    let listaCarrito = recuperarCarrito();
    if(e.target.classList.contains("boton-suma")){
        listaCarrito.forEach(producto => {  /** Recorro mi listaCarrito (Es la que esta en local storage) */
        if(imgParaBorrar==producto.img){ /**Pregunto si la imagen del item que va a comprar la persona es igual al producto que tengo guardado en el localstorage (es decir si ya existe en mi carrito) */
            producto.cantidad++;
        }
    });
    }else{
        console.log(listaCarrito)
        let pos=0;
        listaCarrito.forEach(producto => {  /** Recorro mi listaCarrito (Es la que esta en local storage) */
        if(imgParaBorrar==producto.img){ /**Pregunto si la imagen del item que va a comprar la persona es igual al producto que tengo guardado en el localstorage (es decir si ya existe en mi carrito) */
           if(producto.cantidad>1){
               producto.cantidad--;
           }
           else{
            listaCarrito.splice(pos,1);
           }
        }
        pos++;
    });
    }
    
    guardarCarrito(listaCarrito);
    
    actualizarCarrito();
}

export function finalizarCompra(evento){
    notificacionExitosa();
    localStorage.removeItem("listaCarrito");
    actualizarCarrito();
}

function notificacionExitosa(){
    Toastify({

        text: "Compra Exitosa",
        
        duration: 1500
        
        }).showToast();
}