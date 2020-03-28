// ==UserScript==
// @name     WikiFeet Display
// @version  1
// @grant    none
// ==/UserScript==

(function(){
  console.log("HEY!");
  setInterval(ChangeDisplayName, 1000*15);
  
  
}());

function ChangeDisplayName(){
  console.log("HEY!");
  var Elements = document.getElementsByClassName('r-1qd0xha');
  var i = 0;
  var displayNames = Array.prototype.slice.call(Elements, 0).filter(e => e.innerHTML == "CUSS BROTHER"); //replace with display name of choice
  for(i = 0; i < displayNames.length; i++){
      console.log("FOUND IT");
   displayNames[i].style = `background-image: url("https://pbs.twimg.com/media/EUIxwZIXYAAh-ui?format=png&name=small");
height: 206px;
display: block;
width: 588px;`;
    //displayNames[i].style += "display:inline-block;";
    }
}
