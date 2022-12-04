let monto= prompt ("ingrese el monto:");
let precio= 0;
let moneda= prompt("¿dolar, peso o salir?");
while(monto!="fin"){
    if(monto>0 && moneda =="pesos"){
        precio= monto * 315;
        console.log("su monto es:",monto);
        console.log("el precio de la pintura es de:",precio);   
        }
        else if (monto>0 && moneda=="dolar"){
        precio= monto /315;
        console.log("su monto es:",monto);
        console.log("el precio de la pintura es de:",precio);   
        } 
     break
    }      


