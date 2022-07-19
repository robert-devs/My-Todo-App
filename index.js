let todos = []
const todosContainer = document.getElementById("mytask");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

const addTodo = (title, description, date)=>{
    const id = Math.ceil(Math.random() * 100000000);
    const todo = {id, title, description, date, completed: false }

    const newTodos = [...todos, todo]
    loadTodos(newTodos)

    todos.push(todo)
}

const loadTodos = (todos)=>{
    if(todos.length > 0 ){
        const todosHtml = todos.map(({id, date, title, description, completed})=>{
            const element = `<li class="task-item ${completed ? "completed":""}" id="${id}">
                <input type="checkbox" ${completed ? "checked" : "pending"} onchange="checkBoxChange(this)" /> 
                <div class="task-body">
                    <h4>${title} <span class="due-date">Due: ${date}</span></h4>
                    <p>${description}<span>${completed ? " completed":"pending"}</span></p>
                </div>
                <span class="close" onclick="deleteTodo(this)">\u00D7</span>
                </li>`

            return element
        })
        todosContainer.innerHTML = todosHtml.join("")
    }else{
        todosContainer.innerHTML = "<h2 style='text-align: center;'>No Todos Yet</h2>"
    }
}

const newTodoSubmit = ()=>{
    const titleValue = titleInput.value;
    const dateValue = dateInput.value;
    const descriptionValue = descriptionInput.value;

    if(!titleValue){
        alert("Title is required")
        return
    }

    if(!dateValue){
        alert("Date is required")
        return
    }

    if(!descriptionValue){
        alert("Dscription is required")
        return
    }

    addTodo(titleValue, descriptionValue, dateValue)
    titleInput.value = ""
    dateInput.value = ""
    descriptionInput.value = ""
}

const checkBoxChange = (e)=>{
    const todoId = e.parentElement.id

    const updatedTodos = todos.map(todo=>{
        // console.log(todo.id, todoId);
        if(todo.id === parseInt(todoId)) todo.completed = e.checked
        return todo
    })
    loadTodos(updatedTodos)
    todos = updatedTodos
}

const  deleteTodo = (e)=>{
    // console.log(e);
    const todoId = e.parentElement.id
    const updatedTodos = todos.filter(todo=> todo.id !== parseInt(todoId))

    loadTodos(updatedTodos)
    todos = updatedTodos
}
// const pendingTodos = (e)=>{
//     const todoId = e.parseInt.id;
//     const updatedTodos = todos.filter((todos)=>{
//         updatedTodos.id === parent(todoId)

//     })
// }
// const pendingTodo =(e)=>{
//     const todoId = e.parentElement.id
//     const checked = todos.map(checkBoxChange =>{
//         if(todoId === parseInt(checked)) todos.complete =false
//             return(checked?'task is pending':" task")
            
//         }
        
//     )
// }


// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
// //   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
// //   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function () {
//     var div = this.parentElement;
//     div.style.display = "none";
//   };
// }

// var list = document.querySelector("ul");
// list.addEventListener(
//   "click",
//   function (ev) {
//     if (ev.target.tagName === "LI") {
//       ev.target.classList.toggle("checked");
//     }
//   },
//   false
// );

loadTodos(todos)