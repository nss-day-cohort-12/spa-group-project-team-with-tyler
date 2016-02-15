var inputEl = document.getElementById("textInput");
var clearButton = document.getElementById("clearButton");
var messageContainer = document.getElementById("outputField");
var checkboxDark = document.getElementById("checkboxDark");
var checkboxLarge = document.getElementById("checkboxLarge");
var messageText = '';
var messageId;
var oldMessage;

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
	document.body.classList.toggle("large");
	clearButton.classList.toggle("largeButton");
	clarButton.classList.toggle("normalSizeButton");
	inputEl.classList.toggle("largeInput");
	inputEl.classList.toggle("normalSizeInput");
});

messageContainer.addEventListener("click", function(e){
	if (e.target.innerHTML === "Delete") {
		messageId = e.target.parentNode.id;
		console.log(messageId);
		Chatty.deleteIndex(messageId);
		Chatty.deleteMessage(messageId);
	}
});

inputEl.addEventListener("keyup", function(e){
	if (e.keyCode == 13) {
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
})

Chatty.loadJSON();




