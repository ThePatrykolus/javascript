const array = [1, 2, 3];
const array2 = [...array]; //array copy
// const array2 = array //array reference
array2[0] = 100;
console.log(array);
console.log(array2);
