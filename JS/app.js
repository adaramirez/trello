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

oldList.addEventListener("click", function (){
    oldList.replaceWith(newList);
})

newList.addEventListener ("click", function (){
    newInput.value = "";
})


