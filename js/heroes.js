const heroes = [
    {
        name: "ana",
        gender: {
            en: {
                en: "female",
                es: "femenino"
            },
            es: "femenino"
        },
        class: {
            en: "support",
            es: "soporte"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "egypt",
            es: "egipto"
        },
        height: 1.82,
        year: 2016
    },
    {
        name: "ashe",
        gender: {
            en: "female",
            es: "femenino"
        },
        class: {
            en: "damage",
            es: "daño"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "usa",
            es: "eeuu"
        },
        height: 1.67,
        year: 2018
    },
    {
        name: "baptiste",
        gender: {
            en: "male",
            es: "masculino"
        },
        class: {
            en: "support",
            es: "soporte"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "haiti",
            es: "haiti"
        },
        height: 1.89,
        year: 2019
    },
    {
        name: "bastion",
        gender: {
            en: "male",
            es: "masculino"
        },
        class: {
            en: "damage",
            es: "daño"
        },
        species: {
            en: "omnic",
            es: "ómnico"
        },
        origin: {
            en: "sweden",
            es: "suecia"
        },
        height: 2.2,
        year: 2016
    },
    {
        name: "brigitte",
        gender: {
            en: "female",
            es: "femenino"
        },
        class: {
            en: "support",
            es: "soporte"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "sweden",
            es: "suecia"
        },
        height: 1.91,
        year: 2018
    },
    {
        name: "cassidy",
        gender: {
            en: "male",
            es: "masculino"
        },
        class: {
            en: "damage",
            es: "daño"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "usa",
            es: "eeuu"
        },
        height: 1.85,
        year: 2016
    },
    {
        name: "doomfist",
        gender: {
            en: "male",
            es: "masculino"
        },
        class: {
            en: "tank",
            es: "tanque"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "nigeria",
            es: "nigeria"
        },
        height: 2.18,
        year: 2016
    },
    {
        name: "dva",
        gender: {
            en: "female",
            es: "femenino"
        },
        class: {
            en: "tank",
            es: "tanque"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "south korea",
            es: "corea del sur"
        },
        height: 1.66,
        year: 2016
    },
    {
        name: "echo",
        gender: {
            en: "female",
            es: "femenino"
        },
        class: {
            en: "damage",
            es: "daño"
        },
        species: {
            en: "robot",
            es: "robot"
        },
        origin: {
            en: "switzerland",
            es: "suiza"
        },
        height: 1.82,
        year: 2020
    },
    {
        name: "genji",
        gender: {
            en: "male",
            es: "masculino"
        },
        class: {
            en: "damage",
            es: "daño"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "japan",
            es: "japón"
        },
        height: 1.7,
        year: 2016
    },
    {
        name: "hanzo",
        gender: {
            en: "male",
            es: "masculino"
        },
        class: {
            en: "damage",
            es: "daño"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "japan",
            es: "japón"
        },
        height: 1.73,
        year: 2016
    },
    {
        name: "illari",
        gender: {
            en: "female",
            es: "femenino"
        },
        class: {
            en: "support",
            es: "soporte"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "peru",
            es: "perú"
        },
        height: 1.75,
        year: 2023
    },
    {
        name: "junkerqueen",
        gender: {
            en: "female",
            es: "femenino"
        },
        class: {
            en: "tank",
            es: "tanque"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "australia",
            es: "australia"
        },
        height: 2.13,
        year: 2022
    },
    {
        name: "junkrat",
        gender: {
            en: "male",
            es: "masculino"
        },
        class: {
            en: "damage",
            es: "daño"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "australia",
            es: "australia"
        },
        height: 1.96,
        year: 2016
    },
    {
        name: "juno",
        gender: {
            en: "female",
            es: "femenino"
        },
        class: {
            en: "support",
            es: "soporte"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "mars",
            es: "marte"
        },
        height: 1.7,
        year: 2024
    },
    {
        name: "kiriko",
        gender: {
            en: "female",
            es: "femenino"
        },
        class: {
            en: "support",
            es: "soporte"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "japan",
            es: "japón"
        },
        height: 1.7,
        year: 2022
    },
    {
        name: "lifeweaver",
        gender: {
            en: "male",
            es: "masculino"
        },
        class: {
            en: "support",
            es: "soporte"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "thailand",
            es: "tailandia"
        },
        height: 2.13,
        year: 2023
    },
    {
        name: "lucio",
        gender: {
            en: "male",
            es: "masculino"
        },
        class: {
            en: "support",
            es: "soporte"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "brasil",
            es: "brasil"
        },
        height: 1.6,
        year: 2016
    },
    {
        name: "mauga",
        gender: {
            en: "male",
            es: "masculino"
        },
        class: {
            en: "tank",
            es: "tanque"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "samoa",
            es: "samoa"
        },
        height: 2.2,
        year: 2024
    },
    {
        name: "mei",
        gender: {
            en: "female",
            es: "femenino"
        },
        class: {
            en: "damage",
            es: "daño"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "china",
            es: "china"
        },
        height: 1.6,
        year: 2016
    },
    {
        name: "mercy",
        gender: {
            en: "female",
            es: "femenino"
        },
        class: {
            en: "support",
            es: "soporte"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "switzerland",
            es: "suiza"
        },
        height: 1.7,
        year: 2016
    },
    {
        name: "moira",
        gender: {
            en: "female",
            es: "femenino"
        },
        class: {
            en: "support",
            es: "soporte"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "ireland",
            es: "irlanda"
        },
        height: 1.95,
        year: 2017
    },
    {
        name: "orisa",
        gender: {
            en: "female",
            es: "femenino"
        },
        class: {
            en: "tank",
            es: "tanque"
        },
        species: {
            en: "robot",
            es: "robot"
        },
        origin: {
            en: "numbani",
            es: "numbani"
        },
        height: 2.23,
        year: 2017
    },
    {
        name: "pharah",
        gender: {
            en: "female",
            es: "femenino"
        },
        class: {
            en: "damage",
            es: "daño"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "egypt",
            es: "egipto"
        },
        height: 1.8,
        year: 2016
    },
    {
        name: "ramattra",
        gender: {
            en: "male",
            es: "masculino"
        },
        class: {
            en: "tank",
            es: "tanque"
        },
        species: {
            en: "omnic",
            es: "ómnico"
        },
        origin: {
            en: "nepal",
            es: "nepal"
        },
        height: 1.93,
        year: 2022
    },
    {
        name: "reaper",
        gender: {
            en: "male",
            es: "masculino"
        },
        class: {
            en: "damage",
            es: "daño"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "usa",
            es: "eeuu"
        },
        height: 1.85,
        year: 2016
    },
    {
        name: "reinhardt",
        gender: {
            en: "male",
            es: "masculino"
        },
        class: {
            en: "tank",
            es: "tanque"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "germany",
            es: "alemania"
        },
        height: 2.23,
        year: 2016
    },
    {
        name: "roadhog",
        gender: {
            en: "male",
            es: "masculino"
        },
        class: {
            en: "tank",
            es: "tanque"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "australia",
            es: "australia"
        },
        height: 2.2,
        year: 2016
    },
    {
        name: "sigma",
        gender: {
            en: "male",
            es: "masculino"
        },
        class: {
            en: "tank",
            es: "tanque"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "netherlands",
            es: "holanda"
        },
        height: 2.43,
        year: 2019
    },
    {
        name: "sojourn",
        gender: {
            en: "female",
            es: "femenino"
        },
        class: {
            en: "damage",
            es: "daño"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "canada",
            es: "canadá"
        },
        height: 1.8,
        year: 2022
    },
    {
        name: "soldier76",
        gender: {
            en: "male",
            es: "masculino"
        },
        class: {
            en: "damage",
            es: "daño"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "usa",
            es: "eeuu"
        },
        height: 1.85,
        year: 2016
    },
    {
        name: "sombra",
        gender: {
            en: "female",
            es: "femenino"
        },
        class: {
            en: "damage",
            es: "daño"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "mexico",
            es: "méxico"
        },
        height: 1.62,
        year: 2016
    },
    {
        name: "symmetra",
        gender: {
            en: "female",
            es: "femenino"
        },
        class: {
            en: "damage",
            es: "daño"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "india",
            es: "india"
        },
        height: 1.7,
        year: 2016
    },
    {
        name: "torbjorn",
        gender: {
            en: "male",
            es: "masculino"
        },
        class: {
            en: "damage",
            es: "daño"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "sweden",
            es: "suecia"
        },
        height: 1.4,
        year: 2016
    },
    {
        name: "tracer",
        gender: {
            en: "female",
            es: "femenino"
        },
        class: {
            en: "damage",
            es: "daño"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "united kingdom",
            es: "reino unido"
        },
        height: 1.62,
        year: 2016
    },
    {
        name: "venture",
        gender: {
            en: "female",
            es: "femenino"
        },
        class: {
            en: "damage",
            es: "daño"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "canada",
            es: "canadá"
        },
        height: 1.73,
        year: 2024
    },
    {
        name: "widowmaker",
        gender: {
            en: "female",
            es: "femenino"
        },
        class: {
            en: "damage",
            es: "daño"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "french",
            es: "francia"
        },
        height: 1.75,
        year: 2016
    },
    {
        name: "winston",
        gender: {
            en: "male",
            es: "masculino"
        },
        class: {
            en: "tank",
            es: "tanque"
        },
        species: "mono",
        origin: {
            en: "moon",
            es: "luna"
        },
        height: 2.2,
        year: 2016
    },
    {
        name: "wreckingball",
        gender: {
            en: "male",
            es: "masculino"
        },
        class: {
            en: "tank",
            es: "tanque"
        },
        species: "hamster",
        origin: {
            en: "moon",
            es: "luna"
        },
        height: 0.4,
        year: 2018
    },
    {
        name: "zarya",
        gender: {
            en: "female",
            es: "femenino"
        },
        class: {
            en: "tank",
            es: "tanque"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "russia",
            es: "rusia"
        },
        height: 1.95,
        year: 2016
    },
    {
        name: "zenyatta",
        gender: {
            en: "male",
            es: "masculino"
        },
        class: {
            en: "support",
            es: "soporte"
        },
        species: {
            en: "omnic",
            es: "ómnico"
        },
        origin: {
            en: "nepal",
            es: "nepal"
        },
        height: 1.72,
        year: 2016
    }
]