const { app, BrowserWindow } = require('electron')

let win = null
function createWindow() {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 320,
    height: 320,
    frame: false,
    resizable: false,
    transparent: true,
    minimizable: false,
    maximizable: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
  win.once('ready-to-show', () => {
    win.show()
  })
}
app.setAppUserModelId(process.execPath)
app.on('ready', createWindow)
app.on('closed', () => {
  win = null
})
