//THE FIRST NEW WINDOW FOR VERSION 1//

//Creating new elements for the new window//
var theForm = document.createElement ("form");
    theForm.className = "the-new-form";
var newInput = document.createElement ("input");
    newInput.className = "new-input";
    newInput.setAttribute ("type", "text");
    newInput.setAttribute ("value", "Add a list...")
var saveButton = document.createElement ("button");
    saveButton.className = "save-button";
    //saveButton.setAttribute ("onclick", "todoList()");//
var saveText = document.createTextNode ("Save");
var closeButton = document.createElement ("button");
    closeButton.className = "close-button";
    closeButton.innerHTML = "&times;";


//Organizing what is going to be inside the new form//
saveButton.appendChild(saveText);
theForm.appendChild(newInput);
theForm.appendChild(saveButton);
theForm.appendChild(closeButton);

//One variable is going to be replaced by the other one//
var oldList = document.getElementById ("add-list-placeholder");
var newList = theForm;

oldList.addEventListener("click", function(){
    oldList.replaceWith(newList);
})

newList.addEventListener ("click", function(){
    newInput.value = "";
});

//Function to close the window replacement//
closeButton.addEventListener("click", function(){
    var div = this.parentElement;
    div.style.display = "none";
})


//Function for the save button//
saveButton.addEventListener ("click", function(){
    //Input you are a text and I'll keep you in a new variable//
    var inputValue = document.getElementsByClassName ("new-input").value;
    var inputYouAreAText = document.createTextNode (inputValue);
    var unorderedList = document.createElement ("ul");
    var boardsList = document.createElement ("li");

    boardsList.appendChild(unorderedList);
    unorderedList.appendChild(inputYouAreAText);
})







/*
var createNewTaskElement = function (taskString){
    var unorderedList = document.createElement ("ul");
    var unorderedItem = document.createElement ("li");
    unorderedList.appendChild(unorderedItem);
    
}

var addTask = function () {
    var unorderedItem = createNewTaskElement (taskInput.value);
}

var clickSaveButton = function (){
    var listItem = createNewTaskElement (taskInput.value);
}

saveButton.onclick = addTask;
saveButton.addEventListener (click, addTask);
*/ 












