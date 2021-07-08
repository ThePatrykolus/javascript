//fetch api
console.log("before fetch");
//fetch returns a Promise, at some point it will resolve or reject (asynchronous)
//WARNING, Promise in fetch is only rejected, when we get network error (404 is resolved, because we got response from the server)
fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => {
    console.log("resolved", response);

    // const data = response.json(); //this won't work, because response.json() returns a Promise
    //response ISN'T data, it is a weird object with functions
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("rejected", err);
  });

console.log("after fetch");
