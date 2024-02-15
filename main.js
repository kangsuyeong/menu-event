// horizontal
let horizontalUnderLine = document.getElementById("horizontal-underline")
let horizontalMenus = document.querySelectorAll("nav:first-child a")

//vertical
let verticalUnderLine = document.getElementById("vertical-underline") //underline불러오기
let verticalMenus = document.querySelectorAll("nav:nth-child(2) a")

console.log(horizontalUnderLine)
console.log(horizontalMenus)

horizontalMenus.forEach(menu=>
    menu.addEventListener("click",(e)=>horizontalIndicator(e))
)

function horizontalIndicator(e){
    horizontalUnderLine.style.left=e.currentTarget.offsetLeft + "px";
    horizontalUnderLine.style.width=e.currentTarget.offsetWidth + "px";
    horizontalUnderLine.style.top=e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}

verticalMenus.forEach(menu=>
    menu.addEventListener("click",(e)=>verticalIndicator(e))
)

function verticalIndicator(e){
    verticalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
    verticalUnderLine.style.width=e.currentTarget.offsetWidth + "px";
    verticalUnderLine.style.top=e.currentTarget.offsetTop +  e.currentTarget.offsetHeight + "px";
}