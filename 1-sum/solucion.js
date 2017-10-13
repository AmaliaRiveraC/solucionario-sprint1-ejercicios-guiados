var start = parseInt(prompt('Ingresa un numero inicial'));
var end = parseInt(prompt('Ingresa un numero final'));
var step = parseInt(prompt('Ingresa el numero en que se incrementara tu cadena de numeros'));

var range = function(start, end, step) {
  var array = [];
  if(isNaN(step)) {
    
    for(var i = start; i <= end; i+=1) {
      array.push(i);
    }
    console.log(array);
    return array;
   } else {
    for (var i = start; step > 0 ? i <= end : i >= end; i += step) {
    array.push(i);
  }
    console.log(array);
    return array;
  } 
};



var sum = function(array) {
  var res = 0;
  for(var i=0; i < array.length; i++) {
    res += array[i];
  }
  return res;
};

var res = range(start, end, step);

console.log(sum(res));



