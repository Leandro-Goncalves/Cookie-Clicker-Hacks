const { BrowserWindow } = require('electron');
const path = require("path");

function createWindow(){
    const cookieIcon = path.join(__dirname, "../", "../", "assets", "cookie.ico")
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        title: "Cookie Clicker",
        icon: cookieIcon,
        webPreferences: {
          nodeIntegration: true,
          preload: path.join(__dirname, "../", "render", "preload.js"),
        }
    })

    window.loadURL("https://orteil.dashnet.org/cookieclicker/")

    return window
}

module.exports = createWindow()