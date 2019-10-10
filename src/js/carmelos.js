// Video //

const video = document.querySelector('.videoTrailer')
video.addEventListener('click', ()=>{
    video.muted = false
    video.volume = 1
})

// Password //

const password = document.querySelector('.classified')
let value = null
password.addEventListener('keydown', function(_event){
    value =  password.value

    if(_event.key === 'Enter' && value === 'police' ){
        document.createElement("div")
        document.createElement("button")
        document.createElement('a')
        button.setAttribut('type','button')
        button.innerText = 'Click Me'
        div.appendChild('button')
        button.appendChild('a')
        a.setAttribut('href','../pages/seeTheTruth.html')

    }
    else if(_event.key === 'Enter' && value === 'POLICE'){
      document.createElement("div")
      document.createElement("button")
      document.createElement('a')
      button.setAttribut('type','button')
      button.innerText = 'Click Me'
      div.appendChild('button')
      button.appendChild('a')
      a.setAttribut('href','../pages/seeTheTruth.html')
    }
    else(_event.key === 'Enter' && value === 'Police')
      document.createElement("div")
      document.createElement("button")
      document.createElement('a')
      button.setAttribut('type','button')
      button.innerText = 'Click Me'
      div.appendChild('button')
      button.appendChild('a')
      a.setAttribut('href','../pages/seeTheTruth.html')

})
