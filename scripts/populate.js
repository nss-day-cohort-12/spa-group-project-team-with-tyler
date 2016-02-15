var Chatty = (function(originalChatty){
	var containerDiv;
	var outputString = "";
	var messagesArray = [];

	Chatty.getMessage = function () {
		return messagesArray;
	}

	originalChatty.newMessage = function(elId, msgString, time, user) {
		containerDiv = document.getElementById(elId);
		messagesArray.push(msgString);
		outputString = `<div id="${messagesArray.length - 1}" class="message newMessages"><p class="author-name">${user}:   </p><p>${msgString}</p><article></article><section class="timestamp">Posted: ${time}</section><button class="deleteButton">Delete</button><button class="deleteButton">Edit</button></div>`;
		containerDiv.innerHTML += outputString;
	}

	originalChatty.deleteIndex = function(msgId) {
		delete messagesArray[msgId];
	}

	return originalChatty;
})(Chatty || {});