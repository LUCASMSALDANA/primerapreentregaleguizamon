class compradores {
    constructor(nombre,apellido,subastado,edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.subastado=subastado;
        this.edad=edad;
    }
}

let lista_compradores = [];

for(let i=0;i<3;i=i+1){
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

console.log(resultado_filter);

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


