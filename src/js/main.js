/*const video = document.querySelector('.videoTrailer')
video.addEventListener('click', ()=>{
    video.play()
    console.log(video.volume)
})

/* See The Truth */

const img = document.querySelectorAll("#dossier img")
const folder = document.querySelector("#dossier")

for (let i = 0; i < img.length; i++) {
  setTimeout(function(){
     const angle = (Math.random() - 0.5) * 30

     img[i].classList.toggle('animate')
     img[i].style.transform = 'scale(0.35) rotate('+ angle +'deg)'
     img[i].style.zIndex = i + 1
     img[i].style.top = (Math.random() - 0.5) * 20 + 'vh'
     img[i].style.left = (Math.random() - 0.5) * 50 + 'vw'
  },(i+1)*200)
}
