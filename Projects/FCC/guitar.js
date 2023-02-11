// TO-DO
// troubleshoot checkbox
// add reset button
// show list of completed tasks

var myItemsList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myItemsList.length; i++) {
     var span = document.createElement("span");
     var txt = document.createTextNode("\u00D7");
     span.className = "close";
     span.appendChild(txt);
     myItemsList[i].appendChild(span);
} // creates CLOSE and appends to each li

var close = document.getElementsByClassName("close");
var i; 
for (i = 0; i < close.length; i++) {
     close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = none;
     }
} // click CLOSE to hide current li

var list = document.querySelector("ul");
list.addEventListener('click', function(ev) {
     if (ev.target.tagName === "li") {
          ev.target.classList.toggle("checked");
     }
}, false); // adds a check symbol when clicking on li

function newElement() {
     var li = document.createElement('li');
     var inputValue = document.getElementById('listInput').value;
     var t = document.createTextNode(inputValue);
     li.appendChild(t);
     if (inputValue === '') {alert('Ya gotta write something!');}
          else {document.getElementById("todoList").appendChild(li)};
     document.getElementById('listInput').value = "";

     var span = document.createElement('span');
     var txt = document.createTextNode('\u00D7');
     span.className = "close";
     span.appendChild(txt);
     li.appendChild(span);

     for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
               var div = this.parentElement;
               div.style.display = 'none';
          }
     }
} // create a new li when clicking ADD