//HTTP requests - request to get data from another server
//we make these requests to API endpoints

const request = new XMLHttpRequest();

//fires everytime when there is a state change in request
request.addEventListener("readystatechange", () => {
    console.log(request, request.readyState); //console log current request state

    //even when we can't connect to the server (status: 404), we get to stage 4
    if(request.readyState === 4 && request.status === 200) {
        console.log(request.responseText)
    } else if(request.readyState === 4) {
        console.log("could not fetch the data")
    }
})

request.open("GET", "https://jsonplaceholder.typicode.com/todoss/");
request.send();