const fs = require('fs')
const path = require('path')

function injectScript(scriptPath) {
    const scriptContent = fs.readFileSync(scriptPath)
    const scriptEl = document.createElement('script')
    scriptEl.innerHTML = scriptContent
    document.body.append(scriptEl)
  }

window.addEventListener("DOMContentLoaded", () => {
    injectScript(path.join(__dirname, "script.js"))
});