// Settings
var modsToLoad = ["mods/dark-mode/main.js"]

// Watermark
var modLoaderWatermark = document.createElement("div")
modLoaderWatermark.id = "tos"
modLoaderWatermark.marginTop = "10px"
modLoaderWatermark.innerHTML = "<a href='https://github.com/Crystalflxme/skribbl-mod-loader'>Skribbl Mod Loader</a><small> - v1.0 - By Crystalflame</small>"
document.body.appendChild(modLoaderWatermark)

// Console
var consoleParentFrame = document.createElement("div")
consoleParentFrame.style.marginTop = "20px"
consoleParentFrame.style.height = "400px"
consoleParentFrame.style.width = "100%"
consoleParentFrame.style.display = "flex"
consoleParentFrame.style.alignItems = "center"
consoleParentFrame.style.justifyContent = "center"
document.body.appendChild(consoleParentFrame)
var rowFrame = document.createElement("div")
rowFrame.className = "row"
rowFrame.style.height = "100%"
rowFrame.style.width = "30%"
consoleParentFrame.appendChild(rowFrame)
var titleFrame = document.createElement("div")
titleFrame.style.height = "12.5%"
titleFrame.style.backgroundColor = "#1f1f1f"
titleFrame.style.padding = "4px 8px"
titleFrame.style.borderRadius = "2px 2px 0 0"
titleFrame.style.borderBottom = "1px solid #d3d3d3"
titleFrame.style.fontSize = "24px"
titleFrame.style.color = "#ccc"
titleFrame.style.alignItems = "center"
titleFrame.style.display = "flex"
titleFrame.innerText = "Skribbl Mod Loader Console"
rowFrame.appendChild(titleFrame)
var contentFrame = document.createElement("div")
contentFrame.style.height = "87.5%"
contentFrame.style.textAlign = "center"
contentFrame.style.backgroundColor = "#2f2f2f"
contentFrame.style.padding = "4px"
contentFrame.style.color = "#ccc"
rowFrame.appendChild(contentFrame)
var outputFrame = document.createElement("div")
outputFrame.style.overflowX = "auto"
outputFrame.style.height = "75%"
outputFrame.style.width = "98%"
outputFrame.style.margin = "auto"
outputFrame.style.marginTop = "1.5%"
outputFrame.style.backgroundColor = "#1f1f1f"
outputFrame.style.border = "1px solid"
outputFrame.style.borderRadius = "2px"
outputFrame.style.padding = "4px"
outputFrame.style.color = "#ccc"
outputFrame.style.textAlign = "left"
contentFrame.appendChild(outputFrame)
var commandLineRow = document.createElement("div")
commandLineRow.className = "row"
commandLineRow.style.height = "10%"
commandLineRow.style.width = "98%"
commandLineRow.style.margin = "auto"
commandLineRow.style.marginTop = "3%"
contentFrame.appendChild(commandLineRow)
var commandLine = document.createElement("input")
commandLine.placeholder = "Enter your command here!"
commandLine.style.height = "100%"
commandLine.style.width = "90%"
commandLine.style.marginRight = "0"
commandLine.style.backgroundColor = "#1f1f1f"
commandLine.style.border = "1px solid"
commandLine.style.borderRadius = "2px"
commandLine.style.padding = "4px"
commandLine.style.color = "#ccc"
commandLineRow.appendChild(commandLine)
var commandSubmit = document.createElement("button")
commandSubmit.innerText = "Submit"
commandSubmit.style.height = "100%"
commandSubmit.style.width = "9%"
commandSubmit.style.marginLeft = "1%"
commandSubmit.style.backgroundColor = "#1f1f1f"
commandSubmit.style.border = "1px solid"
commandSubmit.style.borderRadius = "2px"
commandSubmit.style.padding = "4px"
commandSubmit.style.color = "#ccc"
commandLineRow.appendChild(commandSubmit)

function output(string) {
    console.log("[SKRIBBL MOD LOADER] " + string)
    outputFrame.innerHTML = string + "<br/>" + outputFrame.innerHTML
}

commandSubmit.onclick = function() {
    var input = commandLine.value
    var args = input.split(" ")
    var success = true
    if (args[0] == "echo") {
        args.shift()
        output(args.join(" "))
    } else if (args[0] == "reloadmods") {
        reloadMods(false)
    } else {
        success = false
    }
    if (success) {commandLine.value = ""}
}
commandLine.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        commandSubmit.click()
    }
})

// Load Mods
var changes = false
function load(path) {
    (async () => {
        output("<b style='color: #fff81f'>Loading mod path: " + path)
        const modSource = chrome.runtime.getURL(path)
        const mod = await import(modSource)
        const modDetails = mod.getDetails()
        mod.executeMod()
        output("<b style='color: #28fb0e'>Executed mod " + modDetails.ModName + " " + modDetails.ModVersion + " by " + modDetails.ModAuthor)
    })()
}
function reloadMods(init) {
    if (init) {
        changes = false
        modsToLoad.forEach(function(path) {
            changes = true
            load(path)
        })
        if (changes) {document.title = "skribbl.io (Modded)"} else {document.title = "skribbl.io"}
    } else {
        document.write("<center><h1>Reloading mods...</h1></center>")
        document.title = "Reloading mods..."
        location.reload()
    }
}
reloadMods(true)