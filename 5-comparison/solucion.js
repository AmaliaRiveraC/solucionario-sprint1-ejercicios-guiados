var arreglo1 = [0,1,2,3,4,5,6,7,8,9];
var arreglo2 = [0,1,2,3,4,5,6,7,8,9];

var areArraysSame = function(primerDato, segundoDato){		
	for (var i = 0; i < arreglo1.length; i++) {
		if (arreglo1[i] !== arreglo2[i]){
			console.log(false);
			return false;
		}else{
		}
	}
console.log(true);
return true;
}

areArraysSame(arreglo1, arreglo2);