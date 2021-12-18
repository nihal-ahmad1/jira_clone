


document.getElementById("btn").addEventListener("click", function(){
    document.querySelector("#thread").style.animation="movit 5s ease-in-out infinite ";
    document.querySelector(".shadow").style.animation=" moveShade 2.5s ease-in-out alternate infinite";
    
});

document.getElementById("btn2").addEventListener('click', function(){
    document.querySelector("#thread").style.animation="movdoup 5s ease-in-out infinite ";
})
