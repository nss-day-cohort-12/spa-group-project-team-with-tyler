var Chatty = (function(originalChatty){
	var containerDiv;
	var outputString = "";
	var messagesArray = [];

	

	originalChatty.deleteIndex = function(msgId) {
		delete messagesArray[msgId];
	}

	return originalChatty;
})(Chatty || {});