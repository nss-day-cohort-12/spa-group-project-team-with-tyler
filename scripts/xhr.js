var Chatty = (function(originalChatty){
	var messagesArray = [];

	originalChatty.loadJSON = function() {
		var JSONRequest = new HMLHttpRequest();

		JSONRequest.addEventListener("load", function(){
			var messageObject = JSON.parse(this.responseText);
			var messagesFromJson = messagesObject.messages;
		})

		JSONRequest.open("GET", "../json/messages.json");
		JSONRequest.send();
	}

	return originalChatty;
})(Chatty || {});