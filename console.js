// Create UI
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

// UI Code
commandSubmit.onclick = function() {
    var input = commandLine.value
    var args = input.split(" ")
    var success = true
    if (args[0] == "echo") {
        args.shift()
        consoleOutput(`<span style='color: #ccc'>${args.join(" ")}</span>`)
    } else if (args[0] == "help") {
        consoleOutput(`<span style='color: #ccc'>Commands: echo {text} - Print the given text into the console | reload - Reloads the page and mods | help - Gives command instructions</span>`)
    } else if (args[0] == "reload") {
        reloadMods(false)
    } else {
        consoleOutput(`<span style='color: #f5302a'>Error reconizing command "${args[0]}"</span>`)
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

// Console Functions
function consoleOutput(string) {
    console.log("[SKRIBBL MOD LOADER CONSOLE] " + string)
    outputFrame.innerHTML = string + "<br/>" + outputFrame.innerHTML
}

// Receive Console Requests
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.from != "loader") {
        consoleOutput("<b>[" + request.from + "]</b> " + request.message)
    } else {
        consoleOutput(request.message)
    }
})
chrome.runtime.sendMessage({from: "console"})