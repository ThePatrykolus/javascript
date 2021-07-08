//HTTP requests - request to get data from another server
//we make these requests to API endpoints

const request = new XMLHttpRequest(); //creates request object

//fires everytime when there is a state change in request
request.addEventListener("readystatechange", () => {
    console.log(request, request.readyState); //console log current request state

    //request has 4 stages, 1 - open, 2 - send, 3 - loading, 4 - done
    if(request.readyState === 4) {
        console.log(request.responseText)
    }
})

request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send();