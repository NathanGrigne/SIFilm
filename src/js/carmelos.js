// Video //

const video = document.querySelector('.videoTrailer')
video.addEventListener('click', ()=>{
    video.muted = false
    video.volume = 1
})

window.addEventListener('scroll',function(){
  video.muted = true
  video.volume = 0
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

// Block page //

window.addEventListener('scroll', function() {
	var element = document.querySelector('#blockPage');
  var position = element.getBoundingClientRect();
  var body = document.querySelector('body')

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight) {
    body.classList.add('overflowY')
	}

	// checking for partial visibility
	if(position.top < window.innerHeight && position.bottom >= 0) {   
    body.classList.add('overflowY')
  }
});