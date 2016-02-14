var Chatty = (function(originalChatty){
	var containerDiv;
	var outputString = "";
	var messagesArray = [];

	Chatty.getMessage = function () {
		return messagesArray;
	}

	Chatty.newMessage = function () {
		messagesArray.push(inputEl.value);
		for (var i = 0; i < messagesArray.length; i++) {
			outputString = messagesArray[i];
		};
			messageContainer.innerHTML += "<div id='message" + [i] + "' class='newMessages'>" + "User: " + outputString + "<button class='deleteButton'>Delete</button>" + "</div>";
	}

	originalChatty.deleteIndex = function(msgId) {
		delete messagesArray[msgId];
	}

	return originalChatty;
})(Chatty || {});