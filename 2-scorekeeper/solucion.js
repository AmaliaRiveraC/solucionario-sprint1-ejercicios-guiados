/*
Imagina que estás jugando un juego con algunas amigas y quieres ir registrando el
puntaje de cada una. Crea un object llamado scores donde los keys o propiedades son
los nombres de tus amigas, y los valores serán los puntajes (todos empiezan con 0).
Escribe una función que toma dos argumentos, el nombre de tu amiga y la cantidad de
puntos nuevos que ha obtenido, y que actualice los puntos de la jugadora en el object
scores. También escribe una función que imprima en la consola el total de los puntos.
*/

var scores = {
  pointsCount: 0
};

var scoreFriends = function(name, points){
  scores = {
    nameFriends: name,
    pointsCount: points
  };
  printTotalScore(scores);
};

var printTotalScore = function(scores){
 console.log(scores.nameFriends);
 console.log(scores.pointsCount);
};

scoreFriends('karla',2);
scoreFriends('Ameli', 4);
scoreFriends('Lau', 2);
