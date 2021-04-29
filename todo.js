const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = ("toDos");
let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id != li.id;
    });

    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "✔";
    delBtn.addEventListener("click", deleteToDo);
    delBtn.classList.add("toDoDelBtn");
    const span = document.createElement("span");
    span.innerText = text;
    const newID = toDos.length + 1;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newID;

    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newID
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    if(toDos.length < 10) {
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
        toDoInput.value = "";
    }
    else {
        alert('목록은 최대 10개까지 등록이 가능합니다.');
    }
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function main() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

main();