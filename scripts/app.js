var inputEl = document.getElementById("textInput");
var clearButton = document.getElementById("clearButton");
var messageContainer = document.getElementById("outputField");
var checkboxDark = document.getElementById("checkboxDark");
var checkboxLarge = document.getElementById("checkboxLarge");
var messageText = '';
var messageId;
var oldMessage;
var messageToBeEdited;
var paragraphEdit;

clearButton.addEventListener("click", function(){
	messageContainer.innerHTML = "";
	clearButton.disabled = true;
	console.log("cleared");
});

checkboxDark.addEventListener("click", function(){
	document.body.classList.toggle("dark");
});

checkboxLarge.addEventListener("click", function(){
	document.body.classList.toggle("large");
});

messageContainer.addEventListener("click", function(e){
	if (e.target.innerHTML === "Delete") {
		messageId = e.target.parentNode.id;
		console.log(messageId);
		Chatty.deleteIndex(messageId);
		Chatty.deleteMessage(messageId);
		if (document.getElementsByClassName("message").length === 0) {
			clearButton.disabled = true;
		}
	}
});

inputEl.addEventListener("keyup", function(e){
	if (e.keyCode == 13) {
		if (inputEl.classList.contains("editMode")) {
			messageToBeEdited.getElementsByTagName("P")[0].innerHTML = inputEl.value;
			inputEl.value = "";
			inputEl.classList.remove("editMode");
		} else {
			messageText = inputEl.value;
			console.log(messageText);
			Chatty.newMessage("outputField", messageText);
			inputEl.value = "";
			clearButton.disabled = false;
			if (document.getElementsByClassName("message").length > 20) {
				oldMessage = document.getElementsByClassName("message")[0];
				oldMessage.parentNode.removeChild(oldMessage);
			}
		}
	}
});

messageContainer.addEventListener("click", function(e){
	if (e.target.innerHTML === "Edit") {
		messageToBeEdited = e.target.parentNode;
		messageId = messageToBeEdited.id;
		paragraphEdit = messageToBeEdited.getElementsByTagName("P")[0].innerHTML;
		inputEl.value = paragraphEdit;
		inputEl.classList.add("editMode");
		inputEl.focus();
		console.log(inputEl.classList);
	}
});

Chatty.loadJSON();