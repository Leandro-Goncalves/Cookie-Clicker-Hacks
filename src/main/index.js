const { app } = require('electron')
const tray = require('./tray');
let win = null;

function HandleAudio(value){
  const audioValue = value.checked;
  win.webContents.setAudioMuted(audioValue)
}
  
function HandleBigCookie(value) {
  win.webContents.executeJavaScript(value.checked ? "bigCookie.start()" : "bigCookie.stop()")
}

function HandleGoldemCookie(value) {
  win.webContents.executeJavaScript(value.checked ? "goldemCookie.start()" : "goldemCookie.stop()")
}

const MenuItens = [
  {
    label: 'Mute',
    type: 'checkbox',
    checked: true,
    click: HandleAudio
  },
  {
    label: 'Infinit Click',
    type: 'checkbox',
    click: HandleBigCookie
  },
  {
    label: 'Goldem Click',
    type: 'checkbox',
    click:HandleGoldemCookie
  }
]

function Main () {
  win = require('./createWindow');
  tray(MenuItens)
  win.webContents.setAudioMuted(true)
}

app.whenReady().then(() => {
  Main()
})