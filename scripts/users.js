var userGuest = document.getElementById("Anonymous");
var userPalmer = document.getElementById("Palmer");
var userJeremy = document.getElementById("Jeremy");
var userTyler = document.getElementById("Tyler");

var usersObject = {
  names: ["Anonymous", "Palmer", "Jeremy", "Tyler"]
};


var navEl = document.getElementById("navBarContainer");

var namesArray = usersObject.names;

navEl.innerHTML += `<div id="user-selection">`;
namesArray.forEach(function(currentName){
	navEl.innerHTML += `<label for="${currentName}"><input class="user-radio" type="radio" name="user" value="${currentName}" id="${currentName}">${currentName}</label>`;
		})
navEl.innerHTML += `</div>`;

navEl.addEventListener("click", function(e){
	if (e.target.id === "Anonymous") {
		selectedUser = e.target.id;
	} else if (e.target.id === "Palmer") {
		selectedUser = e.target.id;
	} else if (e.target.id === "Jeremy") {
		selectedUser = e.target.id;
	} else if (e.target.id === "Tyler") {
		selectedUser = e.target.id;
	}
});