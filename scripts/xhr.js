var Chatty = (function(originalChatty){
	

	originalChatty.loadJSON = function() {
		var JSONRequest = new XMLHttpRequest();

		JSONRequest.addEventListener("load", function(){
			var messageObject = JSON.parse(this.responseText);
			var messagesFromJson = messageObject.messages;
			// console.log(messagesFromJson);
			messagesFromJson.forEach(function(currentObject){
				Chatty.newMessage("outputField", currentObject.text, currentObject.timestamp, currentObject.user);
				//Had to move the private array to the populate page, turns out variables aren't shared as easily as I thought.
			});
		})

		JSONRequest.open("GET", "../json/messages.json");
		JSONRequest.send();
	}

	return originalChatty;
})(Chatty || {});