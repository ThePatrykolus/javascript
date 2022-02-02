var array = [5, 34, 44, 54];
var total = 0;

for (let i = 0; i < array.length; i++) {
  total += array[i];
}

//=================
var array2 = [
  [1, 2],
  [3, 4],
  [5, 6, 7],
];

function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product += arr[i][j];
    }
  }
  return product;
}

console.log(multiplyAll(array2));
