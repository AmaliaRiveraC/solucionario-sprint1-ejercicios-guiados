## Pseudocódigo ATM, cajero automático.


### Pseudocodigo de función 1: getCash

  1. Recorrer el arreglo de ATM para entregar los billetes, comprobar que aun hay existencias y hacer difentes operaciones. 
  2. mientras i sea menor a los elementos del cajero y mientras aún deba entregarse dinero realizamos lo siguientes
      * Preguntamos si aún debe entregarse dinero.
      * Se divide el dinero solicitado entre el monto de la iteracion actual 
        Por ejemplo:
            dinero solitado = 230
            iteracion 1 -- monto 100 
            div = parteEntera(dineroSolicitado/montoActual)=parteEntera(230/100)=2.
            son dos los billetes que necesito con ese monto. 
      * Tengo do opciones: Que los billetes necesarios  sean más a la cantidad disponible de billetes en esa cantidad || Que los billetes necesarios sean menos o iguales a la cantidad disponible de billetes. 
        __Opcion 1__
          - Asigno a los billetes para entregar la cantidad disponible. 
          - Resto a la cantidad disponible de billetes, los billetes para entregar. 
        __Opcion 2__
          - Igualo los billetes a la division hecha con anterioridad 
          - Resto a la cantidad de billetes en el monto actual, los billetes entregados. 
          
  3. Al arreglo efectivo que habiamos declarado en un inicio de la función, le agregamos un objeto con el monto y la cantidad de billetes a entregar.
  4. Despues restamos el dinero entregado al dinero solicitado.

### Pseudocódigo de función 2: imprimirOperacion.
  
1. Declara una cadena en la cual se concatenará el mensaje:
    * Monto solicitado: montoSolicitadoIngresadoPorElUsuario
    * Se entregan (Suma de todos los billetes entregados (efectivo[i].cantidad));
    * Detalle de la operacion(lista): 
        * monto : cantidadDeBilletes
        * monto : cantidadDeBilletes
    * Detalle del restante en el cajero. (función3 imprimirATM)
        
  
### Pseudocodigo función 3: imprimirATM

  1. función que reciba al atm como parametro
  2. recorre el atm imprimiendo la lista de los eleementos del cajero.
  3. Preview:
    -
     monto : cantidad
     monto : cantidad 
     monto : cantidad
    -
