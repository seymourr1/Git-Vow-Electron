const remote = require('electron').remote
const main = remote.require('./main.js')



var button = document.createElement('button')
button.textContent = 'Open Window'
button.addEventListener('click', () => {
	main.openWindow()
})
document.body.appendChild(button)

var button2 = document.createElement('button')
button2.textContent = 'Say Some Shit'
button2.addEventListener('click', () => {
	alert("Hello")
})
document.body.appendChild(button2)