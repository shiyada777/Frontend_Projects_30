//calling all the elements here.

let inputBox=document.getElementById("inputBox");
let addButton=document.getElementById("addButton");
let lowerPart=document.getElementById("lowerPart");

//using event listner to run the function of adding task as soon as the button is clicked.
addButton.addEventListener("click",function(){

//using inputbox value trim to delete all the extra space so that while addin the task no space should be there.

 let task=inputBox.value.trim();

//checking the task box is empty or not if it is empty then we are not adding the empty task.
     if(task===""){
  return;
    };


//creating a container where there will be a check box and a task text and lastly the delete button.

  let container= document.createElement("div");
container.classList.add("taskElement");
container.innerHTML=`
 <input type="checkbox" name="checkBox" id="checkBox">
<span id="taskText">${task}</span>
<button id="delete"> Delete</button>
`;
let clearAllButton=document.createElement("button")
clearAllButton.classList.add("clearAllButton")
clearAllButton.addEventListener("click",function(){
    
})
lowerPart.append(container);



//to clear the input box after the task is added to the list
inputBox.value="";

//delete button function
let deleteBtn=document.getElementById("delete");
deleteBtn.addEventListener("click",function(){
    container.remove();
})

//checkbox
let taskText= document.getElementById("taskText");
let checkbox= document.getElementById("checkBox");
checkbox.addEventListener("change",function(){
    if(checkbox.checked){
taskText.classList.add("line");
    }
    else{
        taskText.classList.remove("line")
    };
});

});

//dark mode in the app
let darkMode= document.getElementById("darkMode");
darkMode.addEventListener("click",function(){
    document.body.classList.toggle("darkmode");
});
