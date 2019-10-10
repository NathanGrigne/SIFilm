//Random Image Animation

const img = document.querySelectorAll("#dossier img")
const folder = document.querySelector("#dossier")

for (let i = 0; i < img.length; i++) {
  setTimeout(function(){
     const angle = (Math.random() - 0.5) * 30

     img[i].classList.toggle('animate')
     img[i].style.transform = 'scale(1.4) rotate('+ angle +'deg)'
     img[i].style.zIndex = i + 1
     img[i].style.top = Math.ceil(Math.random()*4 )*10+'vh'
     img[i].style.left = Math.ceil(Math.random()*5)*10+'vw'
  },(i+1)*750)
}