var circles=document.querySelectorAll(".circle");

let boxColor = ['red', 'green', 'yellow', 'orange']
function colors(){
 for (let i = 0;i<circles.length;i++) {
    let box = (Math.floor(Math.random()*boxColor.length)+1)-1
    let chosenColor = boxColor[box];
    circles[i].style.background=chosenColor  
 }
}
colors();


