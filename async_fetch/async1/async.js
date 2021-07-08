//async = start now, finish later

console.log(1);
console.log(2);

//async function example, starts now,  calls callback function later
//function that fires after a certain amout of time
setTimeout(() => {
    console.log("callback function fired")
}, 2000);

console.log(3);
console.log(4);