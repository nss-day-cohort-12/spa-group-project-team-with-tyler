var resetButton = document.getElementById("resetTheme");
var saveTheme = document.getElementById("saveTheme");
var newBackgroundColor = document.getElementById("bg-color");
var newFontColor = document.getElementById("font-color");

resetButton.addEventListener("click", function(e){
	document.body.style.backgroundColor = "white";
	document.body.style.color = "black";
});

saveTheme.addEventListener("click", function(){
	document.body.style.backgroundColor = `${newBackgroundColor.value}`;
	document.body.style.color = `${newFontColor.value}`;
})