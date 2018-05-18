// All the elements I'm going to use
var text = document.getElementById('text');
var containerList = document.getElementById('container-list');
//ar icon = document.getElementById('icon');
var containerCard = document.getElementById('container-card');
var form = document.getElementById('form');
//var title = document.getElementById('title');
var btnSave = document.createElement('button');//Saque esta variable paraconvertirla en una variable global


// Creating event click for the list
text.addEventListener('click',creatingList); 
	
function creatingList(){/*Dejo de ser una funcion anonima ya que se necesita
	 que solo tenga un solo evento y si la dejaba anonima se iba a estar 
	 replicando los botones y se necesita aplicar el removeEventListener para que dejara de suceder*/
	
	 //containerList.classList.add('form-click');
	var icon = document.createElement('i');
	icon.classList= "fa fa-times";
	btnSave.textContent = 'Save';
	containerList.appendChild(btnSave);
	containerList.appendChild(icon);
	btnSave.classList.add('button');
	//icon.classList.add('icon');
	//containerList.appendChild(icon);
	text.removeEventListener("click", creatingList) // para que el boton guardar no se duplique
};
// creating event click for the cards
btnSave.addEventListener('click', function() {
	var containerNewText = document.createElement("div"); //Se crea un div para que puedas almacenar el titulo y las tarjetas nuevas de tarea
	var title = document.createElement("h2")
	//btnSave.hidden = true;
	//text.hidden = true;
	//text.classList.add('display');
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

/*
window.addEventListener("load", function() {
	var counter = 1;
	var container = document.getElementById("container");
	var btn = document.getElementById("btn");
	var card = document.getElementById("first-input");
	var form = document.getElementById("form-container");
	var cards = document.getElementById("cards");
	var form = document.getElementById("form");
	form.style.display="none";
	btn.addEventListener("click",addCard);
	function addCard(e) {
		e.preventDefault();
		btn.style.display="none";
		form.style.display="inline-block";
		card.value= "";
		card.focus();
	}
	var saveAction = document.getElementById("saveButton");
	saveAction.addEventListener("click",createCard);
	function createCard(e){
		e.preventDefault();
		form.style.display="none";
		var  card = document.getElementById("first-input").value;
		var cards = document.createElement("div");
		cards.classList.add("gray-box");
		var mainTitle = document.createElement("div");
		mainTitle.innerHTML = card;
		mainTitle.classList.add("mainTitle");
		container.insertBefore(cards, container.lastElementChild);
		cards.appendChild(mainTitle);
		var addNewCard= document.createElement("div");
		addNewCard.innerHTML = "Add a card";
		addNewCard.classList.add("addNewCard");
		cards.appendChild(addNewAction);
		var array = document.querySelectorAll(".addNewCard");
		btn.style.display="inline-block";
		var newForm = createForm(cards,addNewCard);
		array[array.length-1].addEventListener("click", function() {
			this.style.display="none";
			this.nextElementSibling.style.display=null;
			this.nextElementSibling.firstElementChild.focus();
		});
		cards.addEventListener("drop",ondropList);
		cards.addEventListener("dragover",ondragoverList);
		cards.addEventListener("dragleave",ondragleaveList);
	}
	function createForm(cards,a){
		var form = document.createElement("form");
		cards.appendChild(form);
		var textArea= document.createElement("textarea");
		textArea.classList.add("textarea");
		form.appendChild(textArea);
		var saveCardButton = document.createElement("button");
		saveCardButton.classList.add("addButton");
		saveCardButton.innerHTML= "Save";
		form.appendChild(saveCardButton);
		form.style.display="none";
		form.lastElementChild.addEventListener("click", function(e){
			e.preventDefault();
			form.previousElementSibling.style.display=null;
			var textContent = document.createElement("div");
			textContent.classList.add("newCard");
			textContent.setAttribute("draggable","true");
			textContent.id= "card"+counter;
			textContent.innerHTML= textArea.value;
			cards.insertBefore(textContent, a);
			textArea.value="";
			form.style.display="none";
			contador++;

			textContent.addEventListener("dragstart",ondragstart);
			textContent.addEventListener("dragend",ondragend);
			textContent.addEventListener("dragover",ondragover);
			textContent.addEventListener("drop",ondrop);
			function ondragstart(e){
				this.classList.add("gray-box");
				e.dataTransfer.setData("content", e.target.id);
			}
			function ondragover(e){
				e.preventDefault();
			}
			function ondrop(e){
				this.parentElement.classList.remove("gray-box")
				var id = e.dataTransfer.getData("content");
				this.parentElement.insertBefore(document.getElementById(id), this.nextElementSibling);
				e.stopPropagation();
			}
			function ondragend(e){
				this.classList.remove("gray-box");
				this.classList.add("animated","swing");
			}
		});
	}
	function ondropLista(e){
		var id = e.dataTransfer.getData("content");
		this.insertBefore(document.getElementById(id), this.firstElementChild.nextElementSibling);
		this.classList.remove("gray-box");
	}
	function ondragoverList(e){
		e.preventDefault();
		this.classList.add("gray-box");
	}
	function ondragleaveList(e){
		this.classList.remove("gray-box");
	}
});
*/