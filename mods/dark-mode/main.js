// Dark Mode for skribbl
// By Crystalflame

const ModName = "Dark Mode"
const ModAuthor = "Crystalflame"
const ModVersion = "1.0"

export function getDetails() { return {ModName, ModAuthor, ModVersion}}

export function executeMod() {
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
            ["background", "none"],
            ["background-color", "#171717"]
        ],
        [".btn:hover",
            ["background", "#3c3c3c"],
            ["border-color", "#d3d3d3"]
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
        [".informationTabs a:active",
            ["color", "#adadad"]
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
            ["border", "0px"],
            ["border-bottom", "1px solid #d3d3d3"],
            ["color", "#ccc"]
        ],
        [".lobbySettings .lobbyContent",
            ["background-color", "#2f2f2f"],
            ["border", "0px"],
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
            ["color", "#add8e6"]
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
        ["#containerGamePlayers .player .rank",
            ["color", "#ccc"]
        ],
        ["#timer",
            ["color", "#1f1f1f"]
        ],
        ["#containerGamePlayers .player .message .content",
            ["background-color", "#2f2f2f"]
        ],
        ["#containerGamePlayers .player .message .content .text",
            ["color", "#ccc"]
        ],
        ["#containerGamePlayers .player .message .arrow",
            ["border-right", "10px solid #2f2f2f"]
        ],
        ["#overlay .content .wordContainer .word",
            ["background", "#2f2f2f"]
        ],
        ["#overlay .content .wordContainer .word:hover",
            ["background", "#3c3c3c"]
        ],
        // These must be important or else the code overrides them
        ["#boxMessages p",
            ["color", "#ccc !important"]
        ],
        ["#containerGamePlayers .player .info .name",
            ["color", "#ccc !important"]
        ]
    ])
}