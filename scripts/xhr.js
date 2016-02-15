var Chatty = (function(originalChatty){
	

	originalChatty.loadJSON = function() {
		var JSONRequest1 = new XMLHttpRequest();
		var JSONRequest2 = new XMLHttpRequest();
		var JSONRequest3 = new XMLHttpRequest();
		var JSONRequest4 = new XMLHttpRequest();
		var JSONRequest5 = new XMLHttpRequest();

		JSONRequest1.addEventListener("load", function(){
			var messageObject = JSON.parse(this.responseText);
			var messagesFromJson = messageObject.messages;
			console.log(messagesFromJson);
			messagesFromJson.forEach(function(currentObject){
				Chatty.newMessage("outputField", currentObject.text, `${new Date(currentObject.timestamp)}`, currentObject.user);
			});
			JSONRequest2.send();
		})

		JSONRequest2.addEventListener("load", function(){
			var messageObject = JSON.parse(this.responseText);
			var messagesFromJson = messageObject.messages;
			console.log(messagesFromJson);
			messagesFromJson.forEach(function(currentObject){
				Chatty.newMessage("outputField", currentObject.text, `${new Date(currentObject.timestamp)}`, currentObject.user);
			});
			JSONRequest3.send();
		})

		JSONRequest3.addEventListener("load", function(){
			var messageObject = JSON.parse(this.responseText);
			var messagesFromJson = messageObject.messages;
			console.log(messagesFromJson);
			messagesFromJson.forEach(function(currentObject){
				Chatty.newMessage("outputField", currentObject.text, `${new Date(currentObject.timestamp)}`, currentObject.user);
			});
			JSONRequest4.send();
		})

		JSONRequest4.addEventListener("load", function(){
			var messageObject = JSON.parse(this.responseText);
			var messagesFromJson = messageObject.messages;
			console.log(messagesFromJson);
			messagesFromJson.forEach(function(currentObject){
				Chatty.newMessage("outputField", currentObject.text, `${new Date(currentObject.timestamp)}`, currentObject.user);
			});
			JSONRequest5.send();
		})

		JSONRequest5.addEventListener("load", function(){
			var messageObject = JSON.parse(this.responseText);
			var messagesFromJson = messageObject.messages;
			console.log(messagesFromJson);
			messagesFromJson.forEach(function(currentObject){
				Chatty.newMessage("outputField", currentObject.text, `${new Date(currentObject.timestamp)}`, currentObject.user);
			});
		})

		JSONRequest1.open("GET", "../json/message1.json");
		JSONRequest1.send();

		JSONRequest2.open("GET", "../json/message2.json");

		JSONRequest3.open("GET", "../json/message3.json");

		JSONRequest4.open("GET", "../json/message4.json");

		JSONRequest5.open("GET", "../json/message5.json");
	}

	return originalChatty;
})(Chatty || {});