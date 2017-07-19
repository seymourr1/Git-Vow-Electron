const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
	let win = new BrowserWindow({width: 800, height: 600})
	win.loadURL('file://' + __dirname + '/bear.html')
	//win.webContents.openDevTools()
}) 
exports.openWindow = () => {
	let win = new BrowserWindow({width: 1920, height: 1080})
	win.loadURL('file://' + __dirname + '/bear.html')
	//win.webContents.openDevTools()
}