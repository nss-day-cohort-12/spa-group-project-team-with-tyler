var Chatty = (function(originalChatty){
	var messagesArray = [];

	originalChatty.loadJSON = function() {
		var JSONRequest = new XMLHttpRequest();

		JSONRequest.addEventListener("load", function(){
			var messageObject = JSON.parse(this.responseText);
			var messagesFromJson = messageObject.messages;
			console.log(messagesFromJson);
			messagesFromJson.forEach(function(currentObject){
				messagesArray.push(currentObject.text);
			});
				console.log(messagesArray);

				//At this point the JSON is laoded and the messages are pushed into the messagesArray. If you run a forEach or a for loop on messagesArray here with newMessage it might do the thing.

		})

		JSONRequest.open("GET", "../json/messages.json");
		JSONRequest.send();
	}

	return originalChatty;
})(Chatty || {});

Chatty.loadJSON();