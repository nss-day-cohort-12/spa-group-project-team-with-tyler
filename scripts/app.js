var inputEl = document.getElementById("textInput");
var clearButton = document.getElementById("clearButton");
var messageContainer = document.getElementById("outputField");
var checkboxDark = document.getElementById("checkboxDark");
var checkboxLarge = document.getElementById("checkboxLarge");
var messageText = '';
var messageId;

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
		// Chatty.deleteIndex(messageId);
		// Chatty.deleteMessage(messageId);
	}
});

inputEl.addEventListener("keyup", function(e){
	if (e.keyCode == 13) {
		messageText = inputEl.value;
		console.log(messageText);
		// Chatty.newMessage("outputField", messageText);
		inputEl.value = "";

	}
})