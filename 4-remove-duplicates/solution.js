var arrayNumeros = [1,2,3,3,4,5,5,6,7,8,8,9];
var arrayLetras = ["h","o","o","l","a","a"]
var resultado = [];

function removeDuplicates(array){
  for (var i = 0; i < array.length; i++){
    if(array[i] != array[i+1]){
      resultado.push(array[i]);
    }
  }
  console.log(resultado);
}

removeDuplicates(arrayNumeros);
//removeDuplicates(arrayLetras);
