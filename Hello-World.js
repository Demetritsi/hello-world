function myFunction() {
   var wordValue=document.getElementById("wordInput").elements[0].value
   var orderedList=document.getElementById("demo1")
   var listTag=document.createElement("li")
   var takenWord=document.createTextNode(wordValue)
   listTag.appendChild(takenWord)
   orderedList.appendChild(listTag);
   
}
	var timer;
	var element1 = document.getElementById('OrangeNav')
	window.addEventListener("scroll", function scrollCss(event) {
	clearTimeout(timer);
	timer=setTimeout(refresh,150);
	//var animationBar = document.getElementById("demo")
	//console.info(event);
	console.info("working?",element1)
	if (window.pageYOffset >= 209){
		element1.className = "transparent";
	}
});
function refresh() {
	if (window.pageYOffset <= 209){
		element1.className = "";
	}
}