// // Warning Message

const header = document.querySelector('.headerGovernement')
const voice = new Audio ('../src/static/mp3/the-purge-countdown-and-announcement-hd-2015.mp3')
header.addEventListener('mouseover', ()=>{
    voice.play()
    voice.muted = false
    voice.volume = 1
})

header.addEventListener('click', ()=>{
  voice.pause()
})

// Timer

let currentD = 163
let currentH = 12
let currentM = 43
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

const buttonLiveTwitch1 = document.querySelector('#buttonLive1')
const buttonLiveTwitch2 = document.querySelector('#buttonLive2')
const buttonLiveTwitch3 = document.querySelector('#buttonLive3')

const buttonSecurityCamera1 = document.querySelector('#securityCamera1')
const buttonSecurityCamera2 = document.querySelector('#securityCamera2')
const buttonSecurityCamera3 = document.querySelector('#securityCamera3')


safeIco.addEventListener('click',function(){
  if(mapSafe.classList.contains('hide')){
    mapSafe.classList.remove('hide')
    mapBase.classList.add('hide')
    mapCar.classList.add('hide')
    mapWar.classList.add('hide')
    mapTwitch.classList.add('hide')
    buttonLiveTwitch1.classList.add('hide')
    buttonLiveTwitch2.classList.add('hide')
    buttonLiveTwitch3.classList.add('hide')
    buttonSecurityCamera1.classList.add('hide')
    buttonSecurityCamera2.classList.add('hide')
    buttonSecurityCamera3.classList.add('hide')
    videoTwitch1.classList.add('hide')
    videoTwitch2.classList.add('hide')
    videoTwitch3.classList.add('hide')
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
    buttonLiveTwitch1.classList.add('hide')
    buttonLiveTwitch2.classList.add('hide')
    buttonLiveTwitch3.classList.add('hide')
    buttonSecurityCamera1.classList.add('hide')
    buttonSecurityCamera2.classList.add('hide')
    buttonSecurityCamera3.classList.add('hide')
    videoTwitch1.classList.add('hide')
    videoTwitch2.classList.add('hide')
    videoTwitch3.classList.add('hide')
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
    buttonLiveTwitch1.classList.add('hide')
    buttonLiveTwitch2.classList.add('hide')
    buttonLiveTwitch3.classList.add('hide')
    buttonSecurityCamera1.classList.add('hide')
    buttonSecurityCamera2.classList.add('hide')
    buttonSecurityCamera3.classList.add('hide')
    videoTwitch1.classList.add('hide')
    videoTwitch2.classList.add('hide')
    videoTwitch3.classList.add('hide')
  }
  else{
    mapWar.classList.add('hide')
    mapBase.classList.remove('hide')
  }
})

twitchIco.addEventListener('click',function(){
  if(mapTwitch.classList.contains('hide')){
    mapTwitch.classList.remove('hide')
    buttonLiveTwitch1.classList.remove('hide')
    buttonLiveTwitch2.classList.remove('hide')
    buttonLiveTwitch3.classList.remove('hide')
    mapBase.classList.add('hide')
    mapSafe.classList.add('hide')
    mapCar.classList.add('hide')
    mapWar.classList.add('hide')
    buttonSecurityCamera1.classList.add('hide')
    buttonSecurityCamera2.classList.add('hide')
    buttonSecurityCamera3.classList.add('hide')
    videoTwitch1.classList.add('hide')
    videoTwitch2.classList.add('hide')
    videoTwitch3.classList.add('hide')
  }
  else{
    mapTwitch.classList.add('hide')
    buttonLiveTwitch1.classList.add('hide')
    buttonLiveTwitch2.classList.add('hide')
    buttonLiveTwitch3.classList.add('hide')
    mapBase.classList.remove('hide')
  }
})

fightIco.addEventListener('click',function(){
  if(mapBase.classList.contains('hide')){
    mapBase.classList.remove('hide')
    mapCar.classList.add('hide')
    mapWar.classList.add('hide')
    mapTwitch.classList.add('hide')
    mapSafe.classList.add('hide')
    buttonLiveTwitch1.classList.add('hide')
    buttonLiveTwitch2.classList.add('hide')
    buttonLiveTwitch3.classList.add('hide')
    buttonSecurityCamera1.classList.add('hide')
    buttonSecurityCamera2.classList.add('hide')
    buttonSecurityCamera3.classList.add('hide')
    videoTwitch1.classList.add('hide')
    videoTwitch2.classList.add('hide')
    videoTwitch3.classList.add('hide')
  }
  else{

  }
})

camIco.addEventListener('click',function(){
  if(mapBase.classList.contains('hide')){
    mapBase.classList.remove('hide')
    buttonSecurityCamera1.classList.remove('hide')
    buttonSecurityCamera2.classList.remove('hide')
    buttonSecurityCamera3.classList.remove('hide')
    mapTwitch.classList.add('hide')
    mapSafe.classList.add('hide')
    mapCar.classList.add('hide')
    mapWar.classList.add('hide')
    buttonLiveTwitch1.classList.add('hide')
    buttonLiveTwitch2.classList.add('hide')
    buttonLiveTwitch3.classList.add('hide')
    videoTwitch1.classList.add('hide')
    videoTwitch2.classList.add('hide')
    videoTwitch3.classList.add('hide')
  }
  else if(buttonSecurityCamera1.classList.contains('hide')){
    buttonSecurityCamera1.classList.remove('hide')
    buttonSecurityCamera2.classList.remove('hide')
    buttonSecurityCamera3.classList.remove('hide')
  }
  else{
    buttonSecurityCamera1.classList.add('hide')
    buttonSecurityCamera2.classList.add('hide')
    buttonSecurityCamera3.classList.add('hide')
  }
})

/* Video Twitch/Camera */

const closeVideo1 = document.querySelector('#closeVideo1')
const closeVideo2 = document.querySelector('#closeVideo2')
const closeVideo3 = document.querySelector('#closeVideo3')
const videoTwitch1 = document.querySelector('#videoTwitch1')
const videoTwitch2 = document.querySelector('#videoTwitch2')
const videoTwitch3 = document.querySelector('#videoTwitch3')

closeVideo1.addEventListener('click',function(){
  videoTwitch1.classList.add('hide')
})

closeVideo2.addEventListener('click',function(){
  videoTwitch2.classList.add('hide')
})

closeVideo3.addEventListener('click',function(){
  videoTwitch3.classList.add('hide')
})

buttonLiveTwitch1.addEventListener('click',function(){
  videoTwitch1.classList.remove('hide')
})

buttonLiveTwitch2.addEventListener('click',function(){
  videoTwitch2.classList.remove('hide')
})

buttonLiveTwitch3.addEventListener('click',function(){
  videoTwitch3.classList.remove('hide')
})

const closeVideo4 = document.querySelector('#closeVideo4')
const closeVideo5 = document.querySelector('#closeVideo5')
const closeVideo6 = document.querySelector('#closeVideo6')
const videoSecurity1 = document.querySelector('#videoSecurity1')
const videoSecurity2 = document.querySelector('#videoSecurity2')
const videoSecurity3 = document.querySelector('#videoSecurity3')

closeVideo4.addEventListener('click',function(){
  videoSecurity1.classList.add('hide')
})

closeVideo5.addEventListener('click',function(){
  videoSecurity2.classList.add('hide')
})

closeVideo6.addEventListener('click',function(){
  videoSecurity3.classList.add('hide')
})

buttonSecurityCamera1.addEventListener('click',function(){
  videoSecurity1.classList.remove('hide')
})

buttonSecurityCamera2.addEventListener('click',function(){
  videoSecurity2.classList.remove('hide')
})

buttonSecurityCamera3.addEventListener('click',function(){
  videoSecurity3.classList.remove('hide')
})

const videoHacker = document.querySelector('.videoHackerAction')
const body = document.querySelector('body')
let timer

window.addEventListener('scroll', function() {
	var element = document.querySelector('.gunsCard2');
  var position = element.getBoundingClientRect();
  window.clearTimeout(timer)
  var url = '../pages/carmelosVideo.html'

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight) {
    videoHacker.classList.remove('hide') 
    body.classList.add('background')
    body.classList.add('overflowY')
    timer = window.setTimeout(function() {
    window.location.href = 'src/pages/carmelosVideo.html';
    window.reload('true')
  }, 17000)
	}

	// checking for partial visibility
	if(position.top < window.innerHeight && position.bottom >= 0) {   
    videoHacker.classList.remove('hide') 
    body.classList.add('background')
    body.classList.add('overflowY')
    timer = window.setTimeout(function() {
    window.location.href = 'src/pages/carmelosVideo.html';
    window.reload('true')
  }, 17000)
  }
});