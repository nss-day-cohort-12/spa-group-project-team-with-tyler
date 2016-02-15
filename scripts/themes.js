var saveTheme = document.getElementById("saveTheme");
var newBackgroundColor = document.getElementById("bg-color");
var newFontColor = document.getElementById("font-color");


saveTheme.addEventListener("click", function(){
	document.body.style.backgroundColor = `${newBackgroundColor.value}`;
	document.body.style.color = `${newFontColor.value}`;
})