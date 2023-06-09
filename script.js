let formTodo = document.querySelector(".form-todo");
let submit = document.querySelector(".form-todo input[type = 'text']")

let todoList = document.querySelector(".todo-list")


formTodo.addEventListener("submit", (event)=>{
    event.preventDefault()
    let todoInput =  submit.value;
    let li = document.createElement("li")
    li.innerHTML = `<span class="text">${todoInput}</span>
    <div class="todo-btns">
        <button class="todo-btn done" >Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>  `

    submit.value = "";
    todoList.append(li)
    
})





todoList.addEventListener("click",(event)=>{
    if(event.target.classList.contains("done")){
        event.target.parentNode.previousElementSibling.style.textDecoration = "line-through";
    }else if(event.target.classList.contains("remove")){
        event.target.parentNode.parentNode.remove()
    }
})





