let moneda="";
let monto="";
while(moneda != "salir"){
    moneda= prompt ("¿dolar, pesos o salir?");
    if (moneda != "salir"){
    monto= prompt ("ingrese su monto: ");
    calcular_precios(monto);
    }
}

function calcular_precios (monto){
    if(monto>0 && moneda =="pesos"){
        precio1= monto / 315;
        console.log("su monto es:",monto);
        console.log("el precio de la pintura es de:",precio1);   
        }
        else if (monto>0 && moneda=="dolar"){
        precio2= monto *315;
        console.log("su monto es:",monto);
        console.log("el precio de la pintura es de:",precio2);  
     }
    }
    