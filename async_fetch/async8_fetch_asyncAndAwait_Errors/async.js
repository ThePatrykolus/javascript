//async & await

//async function always returns a Promise
const getTodos = async () => {
  //fetch() returns a Promise, because we are in a async function, we don't have to use .then() to handle resolved or .catch() to handle rejected
  //await passes response from Promise ONLY AFTER it has been resolved or rejected
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");

  if (response.status !== 200) {
    throw new Error("cannot fetch data"); //error causes promise by async function to be rejected
  }

  const data = await response.json();
  return data;
};

getTodos()
  .then((data) => {
    console.log("resolved: ", data);
  })
  .catch((err) => console.log("rejected", err.message));
