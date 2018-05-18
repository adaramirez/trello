// All the elements I'm going to use
var text = document.getElementById('text');
var containerList = document.getElementById('container-list');
//ar icon = document.getElementById('icon');
var containerCard = document.getElementById('container-card');
var form = document.getElementById('form');
var title = document.getElementById('title');
var btnSave = document.createElement('button');//This is a global variable


// Creating event click for the list
text.addEventListener('click',creatingList); 
	
function creatingList(){
	
	 //containerList.classList.add('form-click');
	var icon = document.createElement('i');
	icon.classList= "fa fa-times";
	btnSave.textContent = 'Save';
	containerList.appendChild(btnSave);
	containerList.appendChild(icon);
	btnSave.classList.add('button');
	//icon.classList.add('icon');
	//containerList.appendChild(icon);
	text.removeEventListener("click", creatingList) // this helps to the save button to not duplicate
};
  
// creating event click for the cards
btnSave.addEventListener('click', function() {
	var containerNewText = document.createElement("div"); //this div helps to save the title and the new cards
	var title = document.createElement("h2")
	title.textContent = text.value;
	containerCard.appendChild(containerNewText)
	containerNewText.appendChild(title);
	containerNewText.classList.add('form-click');

	var newText = document.createElement('p');
	newText.textContent = 'Add a card';
	containerNewText.appendChild(newText);
	containerList.classList.remove('form-click');

  
// Creating the container of the cards
	newText.addEventListener('click', function() {
		newText.hidden = true;
		var textArea = document.createElement('textarea');
		var btnAdd = document.createElement('button');
		textArea.classList.add('textarea');
		containerNewText.appendChild(textArea);
		containerNewText.appendChild(btnAdd);
		btnAdd.classList.add('button');
		btnAdd.textContent = 'Add';

//Creating the cards list
  btnAdd.addEventListener('click', function() {
			var tasks = document.createElement('p');
			tasks.textContent = textArea.value;
			containerNewText.insertBefore(tasks, textArea);
			textArea.value = '';
		  });
		});
	  });





/*var firstForm = document.getElementById ("first-input");
var secondForm = document.getElementById ("second-form");
    secondForm.style.display = none;
//Function to replace the first window with the second window whenever the user click on it//
firstForm.addEventListener("click", function(){
    firstForm.replaceWith(secondForm);
});*/




/* MISSING ARGUMENT
var cardInput = document.getElementById("first-input").value;
var cardInputText = document.createTextNode ("cardInput");
var saveButton = document.getElementById("save-button");
var placeToSave = document.getElementsByClassName("inside-this-list")[0];
var itemCard = document.createElement ("li");
saveButton.addEventListener("click",function(){
    placeToSave.appendChild(itemCard);
    itemCard.appendChild(cardInputText);
}
*/

