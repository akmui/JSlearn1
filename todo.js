const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function deleteToDo(){
   const btn = event.target;
   const li = btn.parentNode;
   toDoList.removeChild(li);
   const cleanToDos = toDos.filter(function(toDo){
       return toDo.id !== parseInt(li.id);
   });
   toDos = cleanToDos;
   saveToDos();
}

/* Filter는 기본 Array에서 아래 조건 참인것들에 대한 모든 것을 Array로 제공한다.
이때 중요한 것은 비교하는 데이터 형태가 같은것인지 주의해야 하는것이다. string 이냐 number인가
*/



function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
 const li = document.createElement("li");
 const delBtn = document.createElement("button");
 const span = document.createElement("span");
 const newId = toDos.length + 1;
 delBtn.value = "gone";
 delBtn.addEventListener("click", deleteToDo)
 span.innerText = text;
 li.appendChild(delBtn);
 li.appendChild(span);
 li.id = newId
 toDoList.appendChild(li);
 
 const toDoObj = {
     text: text,
     id : newId};
toDos.push(toDoObj);
saveToDos();
}

function handleSubmit(event){
 event.preventDefault();
 const currentValue = toDoInput.value;
 paintToDo(currentValue);
 toDoInput.value = "";
}


function loadToDos(){
const loadedToDos = localStorage.getItem(TODOS_LS);
if(loadedToDos !== null){
  const parseToDos = JSON.parse(loadedToDos); 
  parseToDos.forEach(function(toDo){
    paintToDo(toDo.text);

  });
}
}
/* 
forEach안에 toDo 는 forEach기능으로 뽑아낸 값들이 자동으로 들어가는 걸 말함. 

paintToDo에서는 갈림길. 
아무것도 없을때는 그냥 loadToDo가 실행되지 않음. 그냥 화면에 표시와 저장의 기능만 있음
이후에 다시 새로고침되면서 loadedToDo !== null로 가면서 저장된 걸 불러오면서 화면에 나타내는 기능을 실행함. */


function init(){
loadToDos();
toDoForm.addEventListener("submit", handleSubmit);
}

init();