// Use this template as a starting project for a mod!

const ModName = "Mod Example"
const ModAuthor = "Your Name"
const ModVersion = "1.0"

export function getDetails() { return {ModName, ModAuthor, ModVersion}} // Don't change this because any script wanting the info 
                                                                        // of this mod will use this function.

export function executeMod() {
    // This function is fired when your mod will be executed on the page, so don't change the name.
    // You have access to the "document" object.
    chrome.runtime.sendMessage({from: ModName, message: "<span style='color: #ccc'>Yay! The template mod is working!</span>"}) // Use this to print something in the mod loader console!
}