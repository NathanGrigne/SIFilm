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
/* Filter Map */

const fightIco = document.querySelector('#fight')
const safeIco = document.querySelector('#safe')
const warIco = document.querySelector('#war')
const carIco = document.querySelector('#car')
const camIco = document.querySelector('#cam')
const twitchIco = document.querySelector('#twitch')

const mapBase = document.querySelector('#mapBase')
const mapCar = document.querySelector('#mapCar')
const mapSafe = document.querySelector('#mapSafe')
const mapWar = document.querySelector('#mapWar')
const mapTwitch = document.querySelector('#mapTwitch')

safeIco.addEventListener('click',function(){
  if(mapSafe.classList.contains('hide')){
    mapSafe.classList.remove('hide')
    mapBase.classList.add('hide')
    mapCar.classList.add('hide')
    mapWar.classList.add('hide')
    mapTwitch.classList.add('hide')
  }
  else{
    mapSafe.classList.add('hide')
    mapBase.classList.remove('hide')
  }
})

carIco.addEventListener('click',function(){
  if(mapCar.classList.contains('hide')){
    mapCar.classList.remove('hide')
    mapBase.classList.add('hide')
    mapSafe.classList.add('hide')
    mapWar.classList.add('hide')
    mapTwitch.classList.add('hide')
  }
  else{
    mapCar.classList.add('hide')
    mapBase.classList.remove('hide')
  }
})

warIco.addEventListener('click',function(){
  if(mapWar.classList.contains('hide')){
    mapWar.classList.remove('hide')
    mapBase.classList.add('hide')
    mapSafe.classList.add('hide')
    mapCar.classList.add('hide')
    mapTwitch.classList.add('hide')
  }
  else{
    mapWar.classList.add('hide')
    mapBase.classList.remove('hide')
  }
})

twitchIco.addEventListener('click',function(){
  if(mapTwitch.classList.contains('hide')){
    mapTwitch.classList.remove('hide')
    mapBase.classList.add('hide')
    mapSafe.classList.add('hide')
    mapCar.classList.add('hide')
    mapWar.classList.add('hide')
  }
  else{
    mapTwitch.classList.add('hide')
    mapBase.classList.remove('hide')
  }
})

fightIco.addEventListener('click',function(){
  if(mapBase.classList.contains('hide')){
    mapBase.classList.remove('hide')
    mapCar.classList.add('hide')
    mapCar.classList.add('hide')
    mapTwitch.classList.add('hide')
    mapSafe.classList.add('hide')
  }
  else{
    
  }
})