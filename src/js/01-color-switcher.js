const refs = {
body: document.querySelector('body'),
startButton: document.querySelector('[data-start]'),
stopButton: document.querySelector('[data-stop]')
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

refs.startButton.addEventListener('click', changeColor)
refs.stopButton.addEventListener('click', stopChangeColor)
let intervalColor = null;
    
function changeColor() { 
    refs.startButton.disabled = true;
    refs.stopButton.disabled = false; 
 intervalColor = setInterval(() => { 
refs.body.style.background = getRandomHexColor();
    }, 1000)

} 
refs.stopButton.setAttribute('disabled', true)
function stopChangeColor() { 
    refs.stopButton.disabled = true; 
    refs.startButton.disabled = false;
clearTimeout(intervalColor)
}





