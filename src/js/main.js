/* const video = document.querySelector('.videoTrailer')
video.addEventListener('click', ()=>{
    video.muted = false
    video.volume = 1
})
*/

// Timer

let currentD = 0
let currentH = 12
let currentM = 00
let currentS = 00

window.onload = decompte ()
function decompte(){
  let intervalId =setInterval(function(){
  document.querySelector("#timer").innerHTML = currentD +" : "+ currentH +" : "+ currentM +" : "+  currentS
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

let voice = document.querySelector("voicePurge")
  voice.play()

// let voice = document.getElementById("voicePurge");
// let header = document.getElementById("headerGovernement")
// header.addEventListener("click", function(){
//   voice.play()
// })

//Random Image Animation

const img = document.querySelectorAll("#dossier img")
const folder = document.querySelector("#dossier")

for (let i = 0; i < img.length; i++) {
  setTimeout(function(){
     const angle = (Math.random() - 0.5) * 30
     img[i].classList.toggle('animate')
     img[i].style.transform = 'scale(1) rotate('+ angle +'deg)'
     img[i].style.zIndex = i + 1
     img[i].style.top = (Math.random() - 0.5) * 50 + 'vh'
     img[i].style.left = (Math.random() - 0.5) * 90 + 'vw'
  },(i+1)*750)
}
