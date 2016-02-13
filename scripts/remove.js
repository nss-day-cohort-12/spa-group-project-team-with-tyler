var Chatty = (function(chat){

	chat.deleteMessage = function(messageId) {
		var messageToDelete = document.getElementById(messageId);
		messageToDelete.parentNode.removeChild(messageToDelete);
	}

	return chat;
})(Chatty || {});
