const video = document.querySelector('.videoTrailer')
video.addEventListener('click', ()=>{
    video.muted = false
    video.volume = 1
})

const consoleInputBegin = document.querySelector('.console_begin_box')
const help = document.querySelector('.help')
let value = null
const password_box = document.querySelector('.console_password')


consoleInputBegin.addEventListener('keydown', function(_event)
{
    value = consoleInputBegin.value

    if(_event.key === 'Enter' && value === '/help')
    {
        help.style.display = 'block'
        
    }
    if(_event.key === 'Enter' &&  value ===  'pwd'){
        password_box.style.display = 'flex'
    }
})