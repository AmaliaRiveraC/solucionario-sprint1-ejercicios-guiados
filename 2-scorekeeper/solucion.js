/*
Imagina que estás jugando un juego con algunas amigas y quieres ir registrando el
puntaje de cada una. Crea un object llamado scores donde los keys o propiedades son
los nombres de tus amigas, y los valores serán los puntajes (todos empiezan con 0).
Escribe una función que toma dos argumentos, el nombre de tu amiga y la cantidad de
puntos nuevos que ha obtenido, y que actualice los puntos de la jugadora en el object
scores. También escribe una función que imprima en la consola el total de los puntos.
var scores = {
  karla: 8,
  ameli: 3,
  amalia: 0
}
*/
var scores = {};

var scoresFriends = function(name, points){
  if(scores[name] == null){
    scores[name] = 0;
  }
  scores[name] += points;
};

var printScores = function(){
  console.log(scores);
}

scoresFriends('Karla', 8);
scoresFriends('Karla', 8);
scoresFriends('Manu', 1);
scoresFriends('Meme', 5);
scoresFriends('Jonh', null);
printScores(scores);
