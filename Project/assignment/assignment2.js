var arr = ["red", "green", "blue"]
var main = document.querySelector("main")

function generate() {
    for (var i = 0; i < 100; i++) {
        var idx = parseInt(0 + Math.random() * arr.length);
        var div = `<div style="background:${arr[idx]}"></div>`
        main.innerHTML += div;
    }
}

var blue = document.getElementById("blue"),
    green = document.getElementById("green"),
    reset = document.getElementById("reset"),
    red = document.getElementById("red");



// functions 
function filterBlue() {


}

blue.addEventListener("click", filterBlue)

// arr = [1, 2, 3, 4]
// sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     // sum = arr[i];
// }
generate()
