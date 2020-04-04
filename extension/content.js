// Init
var modLoaderWatermark = document.createElement("div")
modLoaderWatermark.id = "tos"
modLoaderWatermark.innerHTML = "<a href='https://github.com/Crystalflxme/skribbl-mod-loader'>Skribbl Mod Loader</a><small> - v0.0.1 - By Crystalflame & xhex88</small>"
document.body.appendChild(modLoaderWatermark)

// Dark Mode
function addStylesheetRules(rules) {
    var styleEl = document.createElement("style")
    document.head.appendChild(styleEl)
    var styleSheet = styleEl.sheet
    for (var i = 0; i < rules.length; i++) {
        var j = 1, 
        rule = rules[i], 
        selector = rule[0], 
        propStr = ""
        if (Array.isArray(rule[1][0])) {
            rule = rule[1]
            j = 0
        }
        for (var pl = rule.length; j < pl; j++) {
            var prop = rule[j]
            propStr += prop[0] + ": " + prop[1] + (prop[2] ? " !important" : "") + ";\n"
        }
        styleSheet.insertRule(selector + "{" + propStr + "}", styleSheet.cssRules.length)
    }
}

addStylesheetRules([
    ["body",
        ["color", "#ccc"],
        ["background-color", "#2f2f2f"]
    ],
    [".loginPanelContent",
        ["background-color", "#2f2f2f"]
    ],
    [".loginPanelTitle",
        ["background-color", "#1f1f1f"]
    ],
    [".informationTabs a",
        ["color", "#ccc"]
    ],
    [".form-control",
        ["background-color", "#1f1f1f"],
        ["color", "#ccc"]
    ],
    ["#loginAvatarCustomizeContainer",
        ["background-color", "#1f1f1f"]
    ],
    [".btn-success",
        ["background-color", "#1f1f1f"],
        ["border-color", "#d3d3d3"]
    ],
    [".btn-info",
        ["background-color", "#1f1f1f"],
        ["border-color", "#d3d3d3"]
    ],
    [".updateInfo",
        ["background-color", "#1f1f1f"],
        ["border-color", "#d3d3d3"],
        ["color", "#ccc"]
    ],
    ["#screenLobby .title",
        ["color", "#ccc"]
    ],
    [".lobbySettings .lobbyName",
        ["background-color", "#1f1f1f"],
        ["color", "#ccc"]
    ],
    [".lobbySettings .lobbyContent",
        ["background-color", "#2f2f2f"],
        ["color", "#ccc"]
    ],
    ["#invite, .invite-overlay",
        ["background-color", "#1f1f1f"]
    ],
    [".btn-warning",
        ["background-color", "#1f1f1f"],
        ["border-color", "#d3d3d3"],
        ["color", "#ccc"]
    ],
    [".invite-overlay",
        ["color", "#ccc"]
    ], 
    ["#boxChat, #containerChat",
        ["background", "#2f2f2f"]
    ],
    ["#boxMessages p:nth-child(even)",
        ["background", "#404040"]
    ],
    ["#screenGame .gameHeader",
        ["background", "#1f1f1f"]
    ],
    ["#containerGamePlayers .player:nth-child(odd)",
        ["background", "#2f2f2f"]
    ],
    ["#containerGamePlayers .player:nth-child(even)",
        ["background", "#404040"]
    ],
    ["#containerGamePlayers .player .info",
        ["color", "#ccc"]
    ],
    ["#timer",
        ["color", "#1f1f1f"]
    ],
])