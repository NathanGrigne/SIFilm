let currentD = 00
let currentH = 12
let currentM = 00
let currentS = 00

window.onload = decompte ()
function decompte(){
  let intervalId =setInterval(function(){
  document.querySelector("#timer").innerHTML = currentD +":"+ currentH +":"+ currentM +":"+  currentS
     currentS--
    if (currentS < 0){ 
      currentM--
      currentS = 59
    }
    if(currentM < 0){
      currentH--
      currentM = 59
    }
    if(currentH < 0){
      currentD--
      currentH = 24
    }
    if(currentD < 0){
      clearInterval(intervalId);
    }
  }, 1000);
}

// Timer