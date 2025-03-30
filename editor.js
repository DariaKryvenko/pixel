let container = document.querySelector('.container')
container.addEventListener('mousedown', function(){
    container.addEventListener('mousemove', paint)
    
})
 function paint(event){
   event.target.style.backgroundColor = firstcolor   
 }


container.addEventListener('mouseup', function(){
     container.removeEventListener('mousemove', paint)

    })

for (let i = 0; i < 100; i += 1) {
    container.innerHTML += '<div class="box"></div>'
}

let buttons = document.querySelectorAll('.box')

for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', function(){
        buttons[i].style.backgroundColor = firstcolor
    })
}

let firstcolor = 'black'
let palitra = document.querySelector('.palitra')
let colors = ['red', 'orange', 'green','white', 'black', 'grey']

for (let i = 0; i < 6; i += 1) {
    palitra.innerHTML += `<div class="colorite"; style="background-color: ${colors[i]}"> </div>`    
    }

let buttones = document.querySelectorAll('.colorite')

for (let i = 0; i < buttones.length; i += 1) {
    buttones[i].addEventListener('click', function(){
        firstcolor = buttones[i].style.backgroundColor
    })
}

