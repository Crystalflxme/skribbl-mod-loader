// Settings
var modsToLoad = ["mods/dark-mode/main.js", "mods/mod-example/main.js"]

// Watermark
var modLoaderWatermark = document.createElement("div")
modLoaderWatermark.id = "tos"
modLoaderWatermark.marginTop = "10px"
modLoaderWatermark.innerHTML = "<a href='https://github.com/Crystalflxme/skribbl-mod-loader'>Skribbl Mod Loader</a><small> - v1.1.0 - By Crystalflame</small>"
document.body.appendChild(modLoaderWatermark)

// Load Mods
setTimeout(function(){
    var changes = false
    function load(path) {
        (async () => {
            chrome.runtime.sendMessage({from: "loader", message: `<b style='color: #fff81f'>Loading mod path: ${path}</b>`})
            const modSource = chrome.runtime.getURL(path)
            const mod = await import(modSource)
            const modDetails = mod.getDetails()
            chrome.runtime.sendMessage({from: "loader", message: "<b style='color: #28fb0e'>Executed mod " + modDetails.ModName + " " + modDetails.ModVersion + " by " + modDetails.ModAuthor + "</b>"})
            mod.executeMod()
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
            document.write("<center><h1>Reloading...</h1></center>")
            document.title = "Reloading..."
            location.reload()
        }
    }
    reloadMods(true)
}, 500)