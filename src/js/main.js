const video = document.querySelector('.videoTrailer')
video.addEventListener('click', ()=>{
    video.play()
    console.log(video.volume)
})
