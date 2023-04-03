
function ChangeColor(){
    const found = document.getElementsByTagName('div')
    found[2].style.background = 'red'
    found[3].style.background = 'blue'
    found[4].style.background = 'yellow'
    found[5].style.background = 'green'
}
function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', ChangeColor)

}


addingEventListener()