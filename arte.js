

class arte{
    constructor(nombre,tipo,tamaño){
        this.nombre=nombre;
        this.tipo=tipo;
        this.tamaño=tamaño;
    }
}
let lista_arte=[];
for(let i=0;i<2;i=i+1) {
    let nombre=prompt("ingrese su nombre");
    let tipo=prompt("¿ponga si es una pintura,escultura o fotografia?")
    let tamaño=prompt("ingrese el tamaño de su obra de arte");
    let nuevo_arte= new arte(nombre, tipo, tamaño);
    lista_arte.push(nuevo_arte); 
}
console.log(lista_arte.length);

for(let arte of lista_arte){
    console.log(arte);
    console.log("nombre:",arte.nombre);
    console.log("tipo:",arte.tipo);
    console.log("tamaño:",arte.tamaño);

}