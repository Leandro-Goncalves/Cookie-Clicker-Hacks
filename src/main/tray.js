const { Tray, Menu } = require('electron');
const path = require("path");

function tray(MenuItens) {
    const cookieIcon = path.join(__dirname, "../", "../", "assets", "icon.png")
    tray = new Tray(path.join(cookieIcon))

    const contextMenu = Menu.buildFromTemplate(MenuItens)
    tray.setToolTip('Cookie Clicker Hacks')
    tray.setContextMenu(contextMenu)
}

module.exports =  tray