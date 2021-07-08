const getTodos = (callbackFunction) => {
    const request = new XMLHttpRequest(); //XMLHttpRequest is asynchronous

    //fires everytime when there is a state change in request
    request.addEventListener("readystatechange", () => {
        //even when we can't connect to the server (status: 404), we get to stage 4
        if(request.readyState === 4 && request.status === 200) {
            callbackFunction(undefined, request.responseText);
        } else if(request.readyState === 4) {
            callbackFunction("could not fetch data", undefined);
        }
    })

    request.open("GET", "https://jsonplaceholder.typicode.com/todoss/"); //state 1
    request.send(); //state 2
    //request then automatically goes to state 3 (loading) and state 4 (done)
}

console.log(1);
console.log(2);

//callback function is a function passed as an argument (it is almost always anonymous arrow function)
//getTodos has XMLHttpRequest inside which is asynchronous (start now, finish later)
getTodos((err, data) => {
    console.log("callback function fired");
    if(err){
        console.log(err)
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);