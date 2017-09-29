/*
 6. Cajero automático

    Crea un programa que un cajero automático pueda utilizar para determinar el número mínimo
     de billetes a entregar dado un monto solicitado. El cajero empieza con:

    100 billetes de 100
    50 billetes de 50
    200 billetes de 20
    300 billetes de 10
    500 billetes de 5
    800 billetes de 1
    Veamos un caso de uso:

    Si el usuario solicita 250 dólares, la salida debe verse así:

    Monto solicitado 250 dólares.
    Se entregan 3 billetes:

    100: 2
    50: 1

    En el cajero quedan:

    100: 98
    50: 49
    20: 200
    10: 300
    5: 500
    1: 800
    El cajero recuerda cuánto dinero le queda para las siguientes transacciones.
    Por ejemplo, sí el usuario desea retirar 150 dólares adicionales, la salida debe verse así:

    Monto solicitado 150 dólares, se entregan 2 billetes:

    100: 1
    50: 1

    En el cajero quedan:

    100: 97
    50: 48
    20: 200
    10: 300
    5: 500
    1: 800
*/
/*
Pseudocógigo

  1. Obtener el monto que el usuario desea retirar, consultar saldo.
*/
var retirarDinero=function(fondosCajero){
  var dineroSolicitado=parseInt(prompt('Hola, cuanto dinero necesitas: '));
  var efectivoParaEntregar = [];
  /*
    1. Obtener el dinero solicitado. Si el dinero es menor o igual a cero, no realizo ninguna operación.
    2. Recorrer el ATM para comparar el dinero solicitado con la cantidad de billetes existentes.
    3. Si el dinero es mayor a cero, entonces compara con el arreglo, si es igual o mayor a cero, termina la operacion
  */
    //(150)
    for(var i = 0;i<fondosCajero.length;i++){
      var billetes = 0;
      var cantidadNecesariaDeBilletes = 0
      if(dineroSolicitado>0){
          //(150 > 0)
          //Para conocer la cantidad necesaria de billetes solo necesitamos la parte entera de
          //La division entre el montoSolicitado y el monto que se encuentra siendo evaluado en [i].
          cantidadNecesariaDeBilletes = parseInt(dineroSolicitado/fondosCajero[i].monto);//(=entero(150/100)=entero(1.5)=1)
          /*si la cantidadNecesariaDeBilletes es mayor a la cantidad de billetes existentes, entonces
            los billetes otorgados serán los billetes que existan para el monto [i].
          */
          if(cantidadNecesariaDeBilletes > fondosCajero[i].cantidad){
            billetes=fondosCajero[i].cantidad;
            fondosCajero[i].cantidad -= billetes;
          }else{
            billetes=cantidadNecesariaDeBilletes;
            fondosCajero[i].cantidad -= cantidadNecesariaDeBilletes;
          }
          efectivoParaEntregar.push({monto:fondosCajero[i].monto,cantidad:billetes});
          var dineroEntregado = (fondosCajero[i].monto*billetes);
          dineroSolicitado -= dineroEntregado;
      }
      else{
        //Si el dineroEntregado=dineroSolicitado, es decir si se entrega
        // todo el dinero que se pidio o el monto ingresado es <= a 0
        //Se termina el for.
        break;
      }
    }
    return efectivoParaEntregar;
}

var imprimirDinero = function(fondos,tituloOperacion){
    console.clear();
    console.log(tituloOperacion+'\n\n');
    return fondos.forEach(function(e){
        console.log ('Monto: ' + e.monto,'Cantidad: ' + e.cantidad);
    });

}

var encenderCajero = function(){

    var fondosCajero = [
        { monto: 100, cantidad: 100 },
        { monto: 50, cantidad: 50 },
        { monto: 20, cantidad: 200 },
        { monto: 10, cantidad: 300 },
        { monto: 5, cantidad: 500 },
        { monto: 1, cantidad: 800 }
    ];

    do{
      var menu = 'Qué deseas hacer: \n\n 1. Retirar Dinero \n\n 2.Consultar Saldo \n\n 3.apagar'
      var operacionSeleccionada = parseInt(prompt(menu));
      switch (operacionSeleccionada) {
        case 1:
          var tituloOperacion='Retiro de Efectivo: '
          var dineroEntregado=retirarDinero(fondosCajero);
          imprimirDinero(dineroEntregado,tituloOperacion);
          break;
        case 2:
          var tituloOperacion='Consulta de Saldo: '
          imprimirDinero(fondosCajero,tituloOperacion);
          break;
        default:
          var confirmar=confirm('¿Desea apagar el cajero automático?');
          break;
      }
    }while(confirmar!= true)
}

encenderCajero();
