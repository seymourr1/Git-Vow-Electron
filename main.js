const electron = require('electron')
const {app, BrowserWindow} = electron
const remote = require('electron').remote;

app.on('ready', () => {
	let win = new BrowserWindow({width: 800, height: 600})
	win.loadURL('file://' + __dirname + '/bear.html')
	//win.webContents.openDevTools()
})

exports.openWindow = () => {
	let win = new BrowserWindow({width: 1024, height: 576, frame: false})
	win.loadURL('file://' + __dirname + '/bear.html')
	//win.webContents.openDevTools()
}
