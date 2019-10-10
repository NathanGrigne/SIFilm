// Video //

const video = document.querySelector('.videoTrailer')
video.addEventListener('click', ()=>{
    video.muted = false
    video.volume = 1
})

// Password //

$('#policeform').on('keyup keypress', function(e) {
  var keyCode = e.keyCode || e.which;
  if (keyCode === 13) {
    e.preventDefault();
    var password = document.getElementById('police').value;
    if(password === "police"){
      window.open("classified.html", "_self");
    }
    return false;
  }
});
