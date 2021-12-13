var plusBtn = document.querySelector(".plus");
var crossBtn = document.querySelector(".cross");
var closeBtnArr = document.querySelectorAll(".icon3");

function plusBtnClick() {
    console.log("Clicked")
    document.querySelector(".dialog").style.display = "flex"
}
plusBtn.addEventListener("click", plusBtnClick);


function closeDialog() {
document.querySelector(".dialog").style.display = "none"
}
crossBtn.addEventListener("click", closeDialog)
function closeTicket(e) {
    var box = e.target.parentElement.parentElement
    console.log(box);
    box.style.display = "none"
}
for (let index = 0; index < closeBtnArr.length; index++) {
    const closeBtn = closeBtnArr[index];
    closeBtn.addEventListener("click", closeTicket);

}
function addTicket() {
    closeDialog()
    var boxes = document.querySelector(".wrapper main")
    var puranaHTML = boxes.innerHTML;
    console.log(puranaHTML)
    var boxContent = document.getElementById("boxContent")
    console.log(boxContent.value)
    var title = document.getElementById("title");
    console.log(title.value)
    boxes.innerHTML = puranaHTML + ` <div class="box">
    <div class="header">
        <div class="box-heading">${title.value}</div>
        <div class="icon icon1">-</div>
        <div class="icon icon3">x</div>
        <div class="icon icon2">e</div>
    </div>
    <main>
        <textarea name="" >${boxContent.value}</textarea>
    </main>
<div>`
    
    // title.value = ""
    // boxContent.value = ""

}
function addDelTktlogic() {
    var closeBtnArr = document.querySelectorAll(".icon.icon3")
    var minimizeIcons = document.querySelectorAll(".icon.icon1")

    function closeTicket(e) {
        var box = e.target.closest(".box");
        console.log(box)
        box.style.display = "none"
    }
    function minimize(e) {
        alert("clicked")
        var box = e.target.closest(".header");
        console.log(box)
        if (box.querySelector("main>textarea").style.display !== "none") {
            box.querySelector("main>textarea").style.display = "none"
        } else {
            box.querySelector("main>textarea").style.display = "block"
        }

    }
    for (let index = 0; index < closeBtnArr.length; index++) {
        const closeBtn = closeBtnArr[index];
        closeBtn.addEventListener("click", closeTicket)

    }
    for (let index = 0; index<minimizeIcons.length; index++) {
        const closeBtn = minimizeIcons[index];
        closeBtn.addEventListener("click", minimize)

    }
}
