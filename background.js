var consoleId
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.from == "console") {
        consoleId = sender.tab.id
    } else if (consoleId) {
        chrome.tabs.sendMessage(consoleId, message)
    }
})