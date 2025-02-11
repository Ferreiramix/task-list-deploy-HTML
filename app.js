

'use strict';const switcher=document.querySelector(".btn");switcher.addEventListener("click",function(){document.body.classList.toggle("dark-theme");var a=document.body.className;this.textContent="light-theme"==a?"Dark":"Light",console.log("current class name: "+a)});