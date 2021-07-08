//promise example

const getSomething = () => {
  //promise - something that will take some time to do. It will lead to 2 things: 1.resolved - we get the data we want, 2.rejected - error at some point
  return new Promise((resolve, reject) => {
    //fetch something
    // resolve("some data");
    reject("some error");
  });
};

//getSomething returns a promise, that a some point in time will either resolve or reject, when that happens, we use .then()
//resolve or reject functions trigger .then() callback function with the data they received
//resolve triggers first callback function, reject triggers second callback function in .then()
getSomething().then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);

//the same thing as above, but different notation
getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//WE USE PROMISE WITH THEN() AND CATCH(), BECAUSE WE DON'T WANT TO END UP IN CALLBACK HELL AND CHAINING IS EASIER - we want to call SECOND Api AFTER we get response from FIRST Api
getTodos("url1", (err, data) => {
  console.log(data, "from url1 here");
  getTodos("url2", (err, data) => {
    console.log(data, "from url2 here");
    getTodos("url3", (err, data) => {
      console.log(data, "from url3 here");
    });
  });
});

//////////////////////////////////////////////////////////////////////////////////////////

const getTodos = (/*urlAdress, callbackFunction*/) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest(); //XMLHttpRequest is asynchronous

    //fires everytime when there is a state change in request
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        // callbackFunction(undefined, data); swap callback with resolve()
        resolve(data);
      } else if (request.readyState === 4) {
        // callbackFunction("could not fetch data", undefined); swap callback with reject()
        reject("error getting resource");
      }
    });

    request.open("GET", "https://jsonplaceholder.typicode.com/todos/"); //state 1
    request.send(); //state 2
    //request then automatically goes to state 3 (loading) and state 4 (done)
  });
};

getTodos()
  .then((data) => {
    console.log("promise resolved: ", data);
  })
  .catch((err) => {
    console.log("promise rejected: ", err);
  });

//more advanced chaining
getTodos("url1")
  .then((data) => {
    console.log("promise from url1 resolved: ", data);
    return getTodos("url2"); //this .then() function will now return a Promise which we can handle with another .then()
  })
  .then((data) => {
    console.log("promise from url2 resolved: ", data);
  })
  .catch((err) => {
    //this catches any error from Promise with url2 and Promise with url2
    console.log("promise rejected: ", err);
  });
