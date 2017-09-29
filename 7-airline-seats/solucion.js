var asientos = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
]

var menuPrincipal = function () {
  var algo = parseInt(prompt("ingrese la opcion requerida \n Por favor escribir 1 para *reservar asiento* \n Por favor escribir 2 para liberar asiento \n Por favor escribir 3 para buscar por documento de identificación \n Por favor escribir 4 para listar todos los pasajeros\n Por favor escribir -1 para salir del sistema"));
  elegirOpcion(algo);
}

var reservar = function (asiento) {
  var nombre = prompt("Ingrese el nombre y apellido del pasajero");
  var dni = prompt("Ingrese el documento de identificacion del pasajero");
  var viajero = {
    nombre:nombre,
    dni:dni
  }
  asientos[asiento-1]=viajero;
  alert("su asiento es "+asiento);
}

var liberar = function (posicion) {
  if (asientos[posicion-1] == false) {
    alert("El asiento se encuentra vacío");
  } else {
    var confirmacion = confirm("Esta seguro que desea liberar el asiento: "+posicion+"\n "+asientos[posicion-1].nombre+" "+asientos[posicion-1].dni);
    if(confirmacion){
      asientos[posicion-1] = false;
    }
  }
}

var buscar = function (array,dni) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].dni==dni) {
      var mostrarEncontrado = array[i].nombre+[i+1]+array[i].dni
      alert("Se ha encontra a: \n"+mostrarEncontrado);
      return;
    }
  }
  alert ("NO se encontro");
}

var listar = function () {
  var lista = "";
  for (var i = 0; i <asientos.length; i++) {
    if (asientos[i].hasOwnProperty('nombre')) {
      lista+=[i+1]+" "+asientos[i].nombre+" "+asientos[i].dni+"  \n";
    }
  }
  return lista;
}

var elegirOpcion = function (opcion) {
  switch (opcion) {
    case 1:
      var reservarAsiento = parseInt(prompt("Ingrese el numero de asiento"))
      if (asientos[reservarAsiento-1]===false) {
        reservar(reservarAsiento);
      } else {
        alert("El asiento "+reservarAsiento+" ya se encuentra ocupado")
      }
      menuPrincipal();
      break;
    case 2:
      var asientoALiberar = parseInt(prompt("Ingrese el asiento que desea liberar"));
      liberar(asientoALiberar);
      menuPrincipal();
      break;
    case 3:
      var dni = prompt("Favor de ingresar el numero de Identificacion");
      buscar(asientos,dni);
      menuPrincipal()
      break;
    case 4:
      alert(listar());
      menuPrincipal();
      break;
    case -1:
      break;
    default:
      // alert("Ingresa un numero válido");
      // menuPrincipal();
      break;
  }
}
elegirOpcion(menuPrincipal());
