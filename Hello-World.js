function myFunction() {
   var wordValue=document.getElementById("wordInput").elements[0].value
   var orderedList=document.getElementById("demo1")
   var listTag=document.createElement("li")
   var takenWord=document.createTextNode(wordValue)
   listTag.appendChild(takenWord)
   orderedList.appendChild(listTag);
   
   }