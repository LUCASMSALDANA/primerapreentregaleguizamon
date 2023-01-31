const botonesVendido = document.querySelectorAll(".btnvendido"); // Nos devuelve una lista

//YO, NO PUEDO AGREGAR A UNA LISTA EVENTOS....

botonesVendido.forEach(boton =>{
    boton.addEventListener("click", (evento)=>{
        Toastify({

            text: "VENDIDO",
            
            duration: 1500
            
            }).showToast();
    })
})


