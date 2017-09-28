function selectionSort(array) {
  let finalArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    var index = getTheSmallestIndexOfNumberInArray(array);
    finalArray.push(array[index]);
    array.splice(index, 1);
  }
  return finalArray;
}

function getTheSmallestIndexOfNumberInArray(array) {
  var minIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex;
}

var arrayWithData = [6, 5, 4, 3, 2, 1];
var itemToSearch = 1;

console.log(selectionSort(arrayWithData));
