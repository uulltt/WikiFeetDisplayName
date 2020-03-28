// ==UserScript==
// @name     WikiFeet Display
// @version  1
// @grant    none
// ==/UserScript==

(function(){
  setInterval(ChangeDisplayName, 1000*15); //runs every 15 seconds ( 15000 milliseconds)  
}());

function ChangeDisplayName(){
  var Elements = document.getElementsByClassName('r-1qd0xha');
  var i = 0;
  var displayNames = Array.prototype.slice.call(Elements, 0).filter(e => e.innerHTML == "CUSS BROTHER"); //replace with display name of choice. for multiple display names, separate with || (or) brackets (e.innerHTML == "Alice" || e.innterHTML == "Bob")
  for(i = 0; i < displayNames.length; i++){
   displayNames[i].style = `background-image: url("https://pbs.twimg.com/media/EUIxwZIXYAAh-ui?format=png&name=small");
height: 206px;
display: block;
width: 588px;`;
    }
}
