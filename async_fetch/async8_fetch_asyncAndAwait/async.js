//async & await

//async function always returns a Promise
const getTodos = async () => {
  //fetch() returns a Promise, because we are in a async function, we don't have to use .then() to handle resolved or .catch() to handle rejected
  //await passes response from Promise ONLY AFTER it has been resolved or rejected
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();
  return data;
};

//promise isn't data
// const test = getTodos();
// console.log(test);

console.log(1);

getTodos().then((data) => {
  console.log("resolved: ", data);
});

console.log(2);

// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((response) => {
//     console.log("resolved", response);

//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });
