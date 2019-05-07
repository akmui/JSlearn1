/*const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = "I own you now";*/

/*function handleResize(event){
console.log(event)
};
window.addEventListener("resize", handleResize); */

/*function handleClick(){
 title.style.color = "orange";
};

title.addEventListener("click", handleClick);*/

/*
if(20 > 5 || "nicolas" === "necolas"){
 console.log("hi");
} else if("10" === "10"){
 console.log("ho");
} else{
 console.log("ha");
};

//=== && ||
*/

/*const age = prompt("how old are you");

if(age>=18 && age<=21){
console.log('you can but you should not')
}else if(age > 21){
console.log("go ahead")
}else {
console.log('too young')
};
*/

/*const title = document.querySelector("#title");
const BASE_COLOR = "rebeccapurple";
const OTHER_COLOR = "#00cec9";

function handleClick(){ 
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR){
      title.style.color = OTHER_COLOR;
  } else{
    title.style.color = BASE_COLOR;
  }
};

 
function init(){
  title.style.color = BASE_COLOR;  
  title.addEventListener("mouseenter", handleClick);  
};

init();
*/

/*function handOffLine(){
    console.log("akmui");
}
window.addEventListener("offline", handOffLine);*/

/*const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
} 
 
function init(){
    title.addEventListener("click", handleClick);
}

init();*/
