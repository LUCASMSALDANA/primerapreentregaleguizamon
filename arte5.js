let monto="";
while(monto != "fin"){
    console.log("calcular moneda");
    monto=prompt("ingrese monto a calcular o ponga fin para salir");
    if(monto !="fin"){
        let precio=calcular_precios(monto);
        console.log("te quedan", precio);
    }
    console.log("pusiste:",monto);
    let precio=calcular_precios(monto);
    calcular_precios(monto);
    console.log("te quedan:", precio);
 }
function calcular_precios(monto){
let precio=0;
let moneda = prompt("pesos o dolar");
if(monto>0 && moneda =="pesos"){
    precio= monto * 315;
    console.log(precio);
    return precio;
}
else if (monto>0 && moneda=="dolar"){
  precio= monto /315;
  console.log(precio);
  return precio;
}
}
