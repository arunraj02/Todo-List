// S1: Add a new task
let formEle = document.querySelector("#form-container");
let inputEle = document.querySelector("#input_add_task");
let listEle = document.querySelector("#task_data");

formEle.addEventListener("submit", function(e){
    e.preventDefault();

    //get the input value from inputEle
    let task = inputEle.value;

    //1.create tasks element
    let taskEle = document.createElement("div");
    taskEle.classList.add("tasks");

    //2.create a checkbox element
    let taskCheckBoxEle = document.createElement("input");
    taskCheckBoxEle.setAttribute("type","checkbox");
    //append checkbox element into tasks element
    taskEle.appendChild(taskCheckBoxEle);

    //3.create a task content element
    let contentEle = document.createElement("div");
    contentEle.classList.add("content");
    //append task content into tasks element
    taskEle.appendChild(contentEle);
      //create input
      let taskInputEle = document.createElement("input");
      taskInputEle.setAttribute("type","text");
      taskInputEle.setAttribute("class","new_task");
      taskInputEle.setAttribute("value",task);
      taskInputEle.setAttribute("readonly","readonly");
      //append input into task content element
      contentEle.appendChild(taskInputEle);

    //4.create a task action element
    let taskActionEle = document.createElement("div");
    taskActionEle.classList.add("actions");
    //append task action into tasks element
    taskEle.appendChild(taskActionEle);
      //create a edit button
      let editBtn = document.createElement("button");
      editBtn.classList.add("edit");
      editBtn.innerText = "Edit";
      //append edit button into task action element
      taskActionEle.appendChild(editBtn);
      //create a delete button 
      let deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete");
      deleteBtn.innerText = "Delete";
      //append delete button into task action element 
      taskEle.appendChild(deleteBtn);

      //append tasks element into list element
      listEle.appendChild(taskEle);

// S2. Edit the task
      // checkbox click
      taskCheckBoxEle.addEventListener("click", function(){
        if(taskCheckBoxEle.checked){
            taskInputEle.style.textDecoration = "line-through";
        } else {
            taskInputEle.style.textDecoration = "none";
        }
      });

      //edit task
      editBtn.addEventListener("click", function(){
        taskInputEle.removeAttribute("readonly");
        editBtn.innerText = "Save";

// S3.Update the task
      editBtn.addEventListener("click",function(){
        taskInputEle.setAttribute("readonly", "readonly");
        editBtn.innerText = "Edit";
      })        
      });

// S4.Delete the Task
      deleteBtn.addEventListener("click", function(){
        listEle.removeChild(taskEle);
      })      
});