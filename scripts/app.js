var inputEl = document.getElementById("textInput");
var clearButton = document.getElementById("clearButton");
var messageContainer = document.getElementById("outputField");
var checkboxDark = document.getElementById("checkboxDark");
var checkboxLarge = document.getElementById("checkboxLarge");
var messageText = '';
var messageId;
var oldMessage;
var messageToBeEdited;
var paragraphEdit;
var selectedUser = "Anonymous";;

var themeLink = document.getElementById("themeLink");

// CLEAR BUTTON FUNCTIONALITY
clearButton.addEventListener("click", function(){
	messageContainer.innerHTML = "";
	clearButton.disabled = true;
	console.log("cleared");
});

// ADD DARK THEME ON CHECKBOX CLICK
checkboxDark.addEventListener("click", function(){
	if (checkboxDark.checked === true) {
		themeLink.href = "styles/darkStyles.css";
	} else {
		themeLink.href = "styles/styles.css";
	}
});

// TOGGLE LARGE TEXT ON CHECKBOX CLICK
checkboxLarge.addEventListener("click", function(){
	document.getElementById("outputField").classList.toggle("large");
});

// DELETE CURRENT MESSAGE
messageContainer.addEventListener("click", function(e){
	if (e.target.innerHTML === "Delete") {
		messageId = e.target.parentNode.id;
		console.log(messageId);
		Chatty.deleteIndex(messageId);
		Chatty.deleteMessage(messageId);
		if (document.getElementsByClassName("message").length === 0) {
			clearButton.disabled = true;
		}
	}
});

// ADDS NEW MESSAGES AND ADDS TIMESTAMP TO NEW MESSAGES-ENABLES EDIT
inputEl.addEventListener("keyup", function(e){
	if (e.keyCode == 13) {
		if (inputEl.classList.contains("editMode")) {
			messageToBeEdited.getElementsByTagName("P")[0].innerHTML = `${selectedUser}:   `;
			messageToBeEdited.getElementsByTagName("P")[1].innerHTML = `${inputEl.value}`;
			messageToBeEdited.getElementsByClassName("timestamp")[0].innerHTML = `Edited: ${new Date()}`;
			inputEl.value = "";
			inputEl.classList.remove("editMode");
		} else {
			messageText = inputEl.value;
			console.log(messageText);
			Chatty.newMessage("outputField", messageText, `${new Date()}`, selectedUser);
			inputEl.value = "";
			clearButton.disabled = false;
			if (document.getElementsByClassName("message").length > 20) {
				oldMessage = document.getElementsByClassName("message")[0];
				oldMessage.parentNode.removeChild(oldMessage);
			}
		} 
	}
});

// EDIT MESSAGES
messageContainer.addEventListener("click", function(e){
	if (e.target.innerHTML === "Edit") {
		messageToBeEdited = e.target.parentNode;
		messageId = messageToBeEdited.id;
		paragraphEdit = messageToBeEdited.getElementsByTagName("P")[1].innerHTML;
		inputEl.value = paragraphEdit;
		inputEl.classList.add("editMode");
		inputEl.focus();
		console.log(inputEl.classList);
	}
});

// LETTER DROP JQUERY FEATURE
;(function($) {
	$.fn.letterDrop = function() {
	  // Chainability
	  return this.each( function() { 
	  var obj = $( this );  
	  var drop = {
	    arr : obj.text().split( '' ), 
	    range : {
	      min : 1,
	      max : 9
	    }, 
	    styles : function() {
	      var dropDelays = '\n', addCSS;     
	       for ( i = this.range.min; i <= this.range.max; i++ ) {
	         dropDelays += '.ld' + i + ' { animation-delay: 1.' + i + 's; }\n';  
	       }
	        addCSS = $( '<style>' + dropDelays + '</style>' );
	        $( 'head' ).append( addCSS );
	    },
	    main : function() {
	      var dp = 0;
	      obj.text( '' ); 
	      $.each( this.arr, function( index, value ) {
	        dp = dp.randomInt( drop.range.min, drop.range.max ); 
	        if ( value === ' ' )
	          value = '&nbsp';
	          obj.append( '<span class="letterDrop ld' + dp + '">' + value + '</span>' );
	      });      
	    }
	  };
	   
	  Number.prototype.randomInt = function ( min, max ) {
	    return Math.floor( Math.random() * ( max - min + 1 ) + min );
	  };
	  
	  // Create styles
	  drop.styles();

	  // Initialise
	  drop.main();
	  });
	};
}(jQuery));

// USAGE
$( 'h1' ).letterDrop();
// END OF LETTER DROP JQUERY FEATURE

Chatty.loadJSON();




