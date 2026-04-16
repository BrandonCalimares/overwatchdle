const emojis = [
    {
        hero: "ana",
        text: ["🧓", "💉", "🔫", "💤"]
    },
    {
        hero: "ashe",
        text: ["🎯", "🧨", "🤖", "🤠"]
    },
    {
        hero: "baptiste",
        text: ["💉", "👨🏿‍🦱", "🩺", "🚑"]
    },
    {
        hero: "bastion",
        text: ["🤖", "🐦", "🌲", "🚨"]
    },
    {
        hero: "brigitte",
        text: ["👩", "🦁", "🛡️", "🚩"]
    },
    {
        hero: "cassidy",
        text: ["🦅", "🚬", "🏜️", "🐎"]
    },
    {
        hero: "dva",
        text: ["💣", "🎮", "🐰", "🤖"]
    },
    {
        hero: "doomfist",
        text: ["🦾", "👊🏿", "🏋🏾", "🛡️"]
    },
    {
        hero: "echo",
        text: ["🤖", "🦋", "🔄", "🚀"]
    },
    {
        hero: "genji",
        text: ["🗡️", "🤖", "🐉", "🦾"]
    },
    {
        hero: "hanzo",
        text: ["🐉", "🏹", "🎯", "🌸"]
    },
    {
        hero: "illari",
        text: ["☀️", "👩🏽‍⚕️", "💫", "💥"]
    },
    {
        hero: "junkerqueen",
        text: ["🔪", "👑", "🪓", "💪"]
    },
    {
        hero: "junkrat",
        text: ["💣", "🐀", "🤪", "🔧"]
    },
    {
        hero: "juno",
        text: ["💫", "🚀", "👩🏻‍🚀", "🌌"]
    },
    {
        hero: "kiriko",
        text: ["🌸", "🦊", "👘", "⚔️"]
    },
    {
        hero: "lifeweaver",
        text: ["🌳", "👨🏼‍⚕️", "✨", "🌺"]
    },
    {
        hero: "lucio",
        text: ["🎧", "🎵", "🏃🏾‍♂️", "💚"]
    },
    {
        hero: "mauga",
        text: ["💪🏽", "🛡️", "🔥", "🏝️"]
    },
    {
        hero: "mei",
        text: ["🔫", "❄️", "🧊", "🧱"]
    },
    {
        hero: "mercy",
        text: ["🪽", "💉", "👩🏼‍⚕️", "🩺"]
    },
    {
        hero: "moira",
        text: ["💜", "🧬", "🫴🏼", "☠️"]
    },
    {
        hero: "orisa",
        text: ["🤖", "🐎", "🛡️", "⚙️"]
    },
    {
        hero: "pharah",
        text: ["🦅", "🚀", "💥", "⚖️"]
    },
    {
        hero: "ramattra",
        text: ["🦾", "🛡️", "🤖", "💥"]
    },
    {
        hero: "reaper",
        text: ["🖤", "💀", "⚰️", "🦅"]
    },
    {
        hero: "reinhardt",
        text: ["🛡️", "🔨", "🦁", "👴"]
    },
    {
        hero: "roadhog",
        text: ["🔗", "💉", "🐷", "👿"]
    },
    {
        hero: "sigma",
        text: ["🧠", "🌑", "🔮", "👨🏼‍🦲"]
    },
    {
        hero: "sojourn",
        text: ["⚡", "🔋", "🦾", "👩🏿‍🦱"]
    },
    {
        hero: "soldier76",
        text: ["🕶️", "🏃‍♂️", "🦅", "🎯"]
    },
    {
        hero: "sombra",
        text: ["💀", "👾", "👩🏽‍💻", "🔒"]
    },
    {
        hero: "symmetra",
        text: ["💎", "🚪", "💠", "✨"]
    },
    {
        hero: "torbjorn",
        text: ["🔧", "🌋", "🛠️", "👨‍🔧"]
    },
    {
        hero: "tracer",
        text: ["🕰️", "⚡", "🏃‍♀️", "⏪"]
    },
    {
        hero: "venture",
        text: ["👷🏽‍♀️", "🍁", "⛏️", "🌱"]
    },
    {
        hero: "widowmaker",
        text: ["🍑", "🕷️", "🕸️", "🖤"]
    },
    {
        hero: "winston",
        text: ["🔬", "⚡", "🦍", "🍌"]
    },
    {
        hero: "wreckingball",
        text: ["⚙️", "💣", "🐹", "🔧"]
    },
    {
        hero: "zarya",
        text: ["👩🏻", "💪", "🏋️‍♀️", "🛡️"]
    },
    {
        hero: "zenyatta",
        text: ["✋", "🔮", "🧘", "🩺"]
    },
    {
        hero: "hazard",
        text: ["🦔", "🟪", "🧱", "🛡️"]
    },
    {
        hero: "freja",
        text: ["❄️", "🏹", "🐺", "🎯"]
    },
    {
        hero: "wuyang",
        text: ["🌊", "🍜", "🌀", "🩺"]
    },
    {
        hero: "vendetta",
        text: ["🗡️", "🌪️", "🏟️", "🤌🏽"]
    },
    {
        hero: "anran",
        text: ["🪭", "🔥", "🗡️", "🍜"]
    },
    {
        hero: "domina",
        text: ["🥂", "🦾", "🛡️", "🕌"]
    },
    {
        hero: "emre",
        text: ["👁️", "🟥", "🇹🇷", "💣"]
    },
    {
        hero: "jetpack cat",
        text: ["🐾", "🚀", "🐱", "🚁"]
    },
    {
        hero: "mizuki",
        text: ["👒", "🥷", "👘", "🟢"]
    },
    {
        hero: "sierra",
        text: ["🦅", "🩷", "🎯", "💚"]
    }
];
