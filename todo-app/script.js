let inputBox=document.getElementById("inputBox");
let addButton=document.getElementById("addButton");
let lowerPart=document.getElementById("lowerPart");


addButton.addEventListener("click",function(){
    let task=inputBox.value;

  let container= document.createElement("div");
container.classList.add("taskElement");
container.innerHTML=`
 <input type="checkbox" name="checkBox" id="checkBox">
<p id="taskText">${task}</p>
<button id="delete"> Delete</button>
`;
lowerPart.append(container);

});