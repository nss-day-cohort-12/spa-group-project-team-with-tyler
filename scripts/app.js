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

var themeLink = document.getElementById("themeLink");

clearButton.addEventListener("click", function(){
	messageContainer.innerHTML = "";
	clearButton.disabled = true;
	console.log("cleared");
});

checkboxDark.addEventListener("click", function(){
	if (checkboxDark.checked === true) {
		themeLink.href = "styles/darkStyles.css";
	} else {
		themeLink.href = "styles/styles.css";
	}
});

checkboxLarge.addEventListener("click", function(){
	document.getElementById("outputField").classList.toggle("large");
	// clearButton.classList.toggle("largeButton");
	// clearButton.classList.toggle("normalSizeButton");
	// inputEl.classList.toggle("largeInput");
	// inputEl.classList.toggle("normalSizeInput");
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
			messageToBeEdited.getElementsByClassName("timestamp")[0].innerHTML = `Edited: ${new Date()}`;
			inputEl.value = "";
			inputEl.classList.remove("editMode");
		} else {
			messageText = inputEl.value;
			console.log(messageText);
			Chatty.newMessage("outputField", messageText, `${new Date()}`);
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




