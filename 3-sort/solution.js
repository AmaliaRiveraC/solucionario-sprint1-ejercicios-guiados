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
var itemToSearch = 6;

arrayWithData = selectionSort(arrayWithData);

console.log("sorted array: " + arrayWithData);

function binarySearch(array, itemToSearch) {
  var searching = true;

  while (searching == true) {
    var nIndex = Math.floor(array.length / 2);
    var n = array[nIndex];

    if (n == itemToSearch) {
      return true;
    } else {
      if (itemToSearch > n) {
        var array = array.splice(nIndex);
      } else if (itemToSearch < n) {
        var array = array.splice(0, nIndex);
      }

      if (array.length === 1) {
        return false;
      }
    }
  }
}

console.log(binarySearch(arrayWithData, itemToSearch));
