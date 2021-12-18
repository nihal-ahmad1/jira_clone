let ball=document.querySelector(".ball");
let main=document.querySelector(".outer");
let box=document.querySelector(".box");
let outer=main.getBoundingClientRect();
let x=true;
let y=true;

function move(box,val){
    let boxmove=box.getBoundingClientRect();
    if(boxmove.left+val>=outer.left && boxmove.right+val<=outer.right){
        box.style.left=boxmove.left+val+"px";
    }
    
}


function movebox(e){
    if(e.key == "ArrowLeft"){
        move(box,-window.innerWidth*0.05)
    } else if(e.key == "ArrowRight"){
        move(box,window.innerWidth*0.05)
    }
}

document.addEventListener("keydown",movebox)



function movement(){
let ballmove=ball.getBoundingClientRect();
let ballleft=ballmove.left;
let balltop=ballmove.top;
let ballbottom=ballmove.bottom;
let ballright=ballmove.right;
let boxmove=box.getBoundingClientRect();
let boxtop=boxmove.top;
let boxleft=boxmove.left;
let boxbottom=boxmove.bottom;
let boxright=boxmove.right;

if(ballleft<=outer.left||ballright>=outer.right){
    x=!x
}

if(balltop<=boxtop && ballbottom+20>=boxbottom && ballleft+20>=boxleft && ballright-20<=boxright ||balltop<=outer.top|| ballbottom>=outer.bottom){
    y=!y
}

if(y==true){
    ball.style.top=balltop+1+"px"
}else{
    ball.style.top=balltop-1+"px"
}
if(x==true){
    ball.style.left=ballleft+1+"px"
}else{
    ball.style.left=ballleft-1+"px"
}


requestAnimationFrame(movement)

}
requestAnimationFrame(movement);