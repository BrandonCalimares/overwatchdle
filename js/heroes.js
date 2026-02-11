const heroes = [
    {
        name: "ana",
        gender: {
            en: "female",
            es: "femenino"
        },
        role: {
            en: "support",
            es: "soporte"
        },
        subRole: {
            en: "tactician",
            es: "estratega"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "egypt",
            es: "egipto"
        },
        age: 62,
        year: 2016
    },
    {
        name: "ashe",
        gender: {
            en: "female",
            es: "femenino"
        },
        role: {
            en: "damage",
            es: "daño"
        },
        subRole: {
            en: "sharp shooter",
            es: "ojo de águila"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "usa",
            es: "eeuu"
        },
        age: 41,
        year: 2018
    },
    {
        name: "baptiste",
        gender: {
            en: "male",
            es: "masculino"
        },
        role: {
            en: "support",
            es: "soporte"
        },
        subRole: {
            en: "tactician",
            es: "estratega"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "haiti",
            es: "haiti"
        },
        age: 38,
        year: 2019
    },
    {
        name: "bastion",
        gender: {
            en: "male",
            es: "masculino"
        },
        role: {
            en: "damage",
            es: "daño"
        },
        subRole: {
            en: "specialist",
            es: "especialista"
        },
        species: {
            en: "omnic",
            es: "ómnico"
        },
        origin: {
            en: "sweden",
            es: "suecia"
        },
        age: 32,
        year: 2016
    },
    {
        name: "brigitte",
        gender: {
            en: "female",
            es: "femenino"
        },
        role: {
            en: "support",
            es: "soporte"
        },
        subRole: {
            en: "survivor",
            es: "sobreviviente"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "sweden",
            es: "suecia"
        },
        age: 25,
        year: 2018
    },
    {
        name: "cassidy",
        gender: {
            en: "male",
            es: "masculino"
        },
        role: {
            en: "damage",
            es: "daño"
        },
        subRole: {
            en: "sharp shooter",
            es: "ojo de águila"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "usa",
            es: "eeuu"
        },
        age: 39,
        year: 2016
    },
    {
        name: "doomfist",
        gender: {
            en: "male",
            es: "masculino"
        },
        role: {
            en: "tank",
            es: "tanque"
        },
        subRole: {
            en: "initiator",
            es: "iniciador"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "nigeria",
            es: "nigeria"
        },
        age: 47,
        year: 2017
    },
    {
        name: "dva",
        gender: {
            en: "female",
            es: "femenino"
        },
        role: {
            en: "tank",
            es: "tanque"
        },
        subRole: {
            en: "initiator",
            es: "iniciador"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "south korea",
            es: "corea del sur"
        },
        age: 21,
        year: 2016
    },
    {
        name: "echo",
        gender: {
            en: "female",
            es: "femenino"
        },
        role: {
            en: "damage",
            es: "daño"
        },
        subRole: {
            en: "recon",
            es: "reconocimiento"
        },
        species: {
            en: "robot",
            es: "robot"
        },
        origin: {
            en: "switzerland",
            es: "suiza"
        },
        age: 14,
        year: 2020
    },
    {
        name: "genji",
        gender: {
            en: "male",
            es: "masculino"
        },
        role: {
            en: "damage",
            es: "daño"
        },
        subRole: {
            en: "flanker",
            es: "flanqueador"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "japan",
            es: "japón"
        },
        age: 37,
        year: 2016
    },
    {
        name: "hanzo",
        gender: {
            en: "male",
            es: "masculino"
        },
        role: {
            en: "damage",
            es: "daño"
        },
        subRole: {
            en: "sharp shooter",
            es: "ojo de águila"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "japan",
            es: "japón"
        },
        age: 40,
        year: 2016
    },
    {
        name: "illari",
        gender: {
            en: "female",
            es: "femenino"
        },
        role: {
            en: "support",
            es: "soporte"
        },
        subRole: {
            en: "survivor",
            es: "sobreviviente"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "peru",
            es: "perú"
        },
        age: 18,
        year: 2023
    },
    {
        name: "junkerqueen",
        gender: {
            en: "female",
            es: "femenino"
        },
        role: {
            en: "tank",
            es: "tanque"
        },
        subRole: {
            en: "stalwart",
            es: "inquebrantable"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "australia",
            es: "australia"
        },
        age: 31,
        year: 2022
    },
    {
        name: "junkrat",
        gender: {
            en: "male",
            es: "masculino"
        },
        role: {
            en: "damage",
            es: "daño"
        },
        subRole: {
            en: "specialist",
            es: "especialista"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "australia",
            es: "australia"
        },
        age: 27,
        year: 2016
    },
    {
        name: "juno",
        gender: {
            en: "female",
            es: "femenino"
        },
        role: {
            en: "support",
            es: "soporte"
        },
        subRole: {
            en: "survivor",
            es: "sobreviviente"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "mars",
            es: "marte"
        },
        age: 19,
        year: 2024
    },
    {
        name: "kiriko",
        gender: {
            en: "female",
            es: "femenino"
        },
        role: {
            en: "support",
            es: "soporte"
        },
        subRole: {
            en: "medic",
            es: "médico"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "japan",
            es: "japón"
        },
        age: 21,
        year: 2022
    },
    {
        name: "lifeweaver",
        gender: {
            en: "male",
            es: "masculino"
        },
        role: {
            en: "support",
            es: "soporte"
        },
        subRole: {
            en: "medic",
            es: "médico"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "thailand",
            es: "tailandia"
        },
        age: 31,
        year: 2023
    },
    {
        name: "lucio",
        gender: {
            en: "male",
            es: "masculino"
        },
        role: {
            en: "support",
            es: "soporte"
        },
        subRole: {
            en: "tactician",
            es: "estratega"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "brasil",
            es: "brasil"
        },
        age: 28,
        year: 2016
    },
    {
        name: "mauga",
        gender: {
            en: "male",
            es: "masculino"
        },
        role: {
            en: "tank",
            es: "tanque"
        },
        subRole: {
            en: "bruiser",
            es: "matón"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "samoa",
            es: "samoa"
        },
        age: 37,
        year: 2023
    },
    {
        name: "mei",
        gender: {
            en: "female",
            es: "femenino"
        },
        role: {
            en: "damage",
            es: "daño"
        },
        subRole: {
            en: "specialist",
            es: "especialista"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "china",
            es: "china"
        },
        age: 33,
        year: 2016
    },
    {
        name: "mercy",
        gender: {
            en: "female",
            es: "femenino"
        },
        role: {
            en: "support",
            es: "soporte"
        },
        subRole: {
            en: "medic",
            es: "médico"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "switzerland",
            es: "suiza"
        },
        age: 39,
        year: 2016
    },
    {
        name: "moira",
        gender: {
            en: "female",
            es: "femenino"
        },
        role: {
            en: "support",
            es: "soporte"
        },
        subRole: {
            en: "medic",
            es: "médico"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "ireland",
            es: "irlanda"
        },
        age: 50,
        year: 2017
    },
    {
        name: "orisa",
        gender: {
            en: "female",
            es: "femenino"
        },
        role: {
            en: "tank",
            es: "tanque"
        },
        subRole: {
            en: "bruiser",
            es: "matón"
        },
        species: {
            en: "robot",
            es: "robot"
        },
        origin: {
            en: "numbani",
            es: "numbani"
        },
        age: 1,
        year: 2017
    },
    {
        name: "pharah",
        gender: {
            en: "female",
            es: "femenino"
        },
        role: {
            en: "damage",
            es: "daño"
        },
        subRole: {
            en: "recon",
            es: "reconocimiento"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "egypt",
            es: "egipto"
        },
        age: 34,
        year: 2016
    },
    {
        name: "ramattra",
        gender: {
            en: "male",
            es: "masculino"
        },
        role: {
            en: "tank",
            es: "tanque"
        },
        subRole: {
            en: "stalwart",
            es: "inquebrantable"
        },
        species: {
            en: "omnic",
            es: "ómnico"
        },
        origin: {
            en: "nepal",
            es: "nepal"
        },
        age: 28,
        year: 2022
    },
    {
        name: "reaper",
        gender: {
            en: "male",
            es: "masculino"
        },
        role: {
            en: "damage",
            es: "daño"
        },
        subRole: {
            en: "flanker",
            es: "flanqueador"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "usa",
            es: "eeuu"
        },
        age: 60,
        year: 2016
    },
    {
        name: "reinhardt",
        gender: {
            en: "male",
            es: "masculino"
        },
        role: {
            en: "tank",
            es: "tanque"
        },
        subRole: {
            en: "stalwart",
            es: "inquebrantable"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "germany",
            es: "alemania"
        },
        age: 63,
        year: 2016
    },
    {
        name: "roadhog",
        gender: {
            en: "male",
            es: "masculino"
        },
        role: {
            en: "tank",
            es: "tanque"
        },
        subRole: {
            en: "bruiser",
            es: "matón"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "australia",
            es: "australia"
        },
        age: 50,
        year: 2016
    },
    {
        name: "sigma",
        gender: {
            en: "male",
            es: "masculino"
        },
        role: {
            en: "tank",
            es: "tanque"
        },
        subRole: {
            en: "stalwart",
            es: "inquebrantable"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "netherlands",
            es: "holanda"
        },
        age: 64,
        year: 2019
    },
    {
        name: "sojourn",
        gender: {
            en: "female",
            es: "femenino"
        },
        role: {
            en: "damage",
            es: "daño"
        },
        subRole: {
            en: "sharp shooter",
            es: "ojo de águila"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "canada",
            es: "canadá"
        },
        age: 51,
        year: 2022
    },
    {
        name: "soldier76",
        gender: {
            en: "male",
            es: "masculino"
        },
        role: {
            en: "damage",
            es: "daño"
        },
        subRole: {
            en: "specialist",
            es: "especialista"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "usa",
            es: "eeuu"
        },
        age: 58,
        year: 2016
    },
    {
        name: "sombra",
        gender: {
            en: "female",
            es: "femenino"
        },
        role: {
            en: "damage",
            es: "daño"
        },
        subRole: {
            en: "recon",
            es: "reconocimiento"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "mexico",
            es: "méxico"
        },
        age: 32,
        year: 2016
    },
    {
        name: "symmetra",
        gender: {
            en: "female",
            es: "femenino"
        },
        role: {
            en: "damage",
            es: "daño"
        },
        subRole: {
            en: "specialist",
            es: "especialista"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "india",
            es: "india"
        },
        age: 30,
        year: 2016
    },
    {
        name: "torbjorn",
        gender: {
            en: "male",
            es: "masculino"
        },
        role: {
            en: "damage",
            es: "daño"
        },
        subRole: {
            en: "specialist",
            es: "especialista"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "sweden",
            es: "suecia"
        },
        age: 59,
        year: 2016
    },
    {
        name: "tracer",
        gender: {
            en: "female",
            es: "femenino"
        },
        role: {
            en: "damage",
            es: "daño"
        },
        subRole: {
            en: "flanker",
            es: "flanqueador"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "united kingdom",
            es: "reino unido"
        },
        age: 28,
        year: 2016
    },
    {
        name: "venture",
        gender: {
            en: "nonbinary",
            es: "no binario"
        },
        role: {
            en: "damage",
            es: "daño"
        },
        subRole: {
            en: "flanker",
            es: "flanqueador"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "canada",
            es: "canadá"
        },
        age: 26,
        year: 2024
    },
    {
        name: "widowmaker",
        gender: {
            en: "female",
            es: "femenino"
        },
        role: {
            en: "damage",
            es: "daño"
        },
        subRole: {
            en: "sharp shooter",
            es: "ojo de águila"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "french",
            es: "francia"
        },
        age: 35,
        year: 2016
    },
    {
        name: "winston",
        gender: {
            en: "male",
            es: "masculino"
        },
        role: {
            en: "tank",
            es: "tanque"
        },
        subRole: {
            en: "initiator",
            es: "iniciador"
        },
        species: {
            en: "gorilla",
            es: "gorila"
        },
        origin: {
            en: "moon",
            es: "luna"
        },
        age: 31,
        year: 2016
    },
    {
        name: "wreckingball",
        gender: {
            en: "male",
            es: "masculino"
        },
        role: {
            en: "tank",
            es: "tanque"
        },
        subRole: {
            en: "initiator",
            es: "iniciador"
        },
        species: {
            en: "hamster",
            es: "hamster"
        },
        origin: {
            en: "moon",
            es: "luna"
        },
        age: 16,
        year: 2018
    },
    {
        name: "zarya",
        gender: {
            en: "female",
            es: "femenino"
        },
        role: {
            en: "tank",
            es: "tanque"
        },
        subRole: {
            en: "bruiser",
            es: "matón"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "russia",
            es: "rusia"
        },
        age: 30,
        year: 2016
    },
    {
        name: "zenyatta",
        gender: {
            en: "male",
            es: "masculino"
        },
        role: {
            en: "support",
            es: "soporte"
        },
        subRole: {
            en: "tactician",
            es: "estratega"
        },
        species: {
            en: "omnic",
            es: "ómnico"
        },
        origin: {
            en: "nepal",
            es: "nepal"
        },
        age: 33,
        year: 2016
    },
    {
        name: "hazard",
        gender: {
            en: "male",
            es: "masculino"
        },
        role: {
            en: "tank",
            es: "tanque"
        },
        subRole: {
            en: "stalwart",
            es: "inquebrantable"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "scotland",
            es: "escocia"
        },
        age: 24,
        year: 2024
    },
    {
        name: "freja",
        gender: {
            en: "female",
            es: "femenino"
        },
        role: {
            en: "damage",
            es: "daño"
        },
        subRole: {
            en: "recon",
            es: "reconocimiento"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "denmark",
            es: "dinamarca"
        },
        age: 34,
        year: 2025
    },
    {
        name: "wuyang",
        gender: {
            en: "male",
            es: "masculino"
        },
        role: {
            en: "support",
            es: "soporte"
        },
        subRole: {
            en: "survivor",
            es: "sobreviviente"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "china",
            es: "china"
        },
        age: 19,
        year: 2025
    },
    {
        name: "vendetta",
        gender: {
            en: "female",
            es: "femenino"
        },
        role: {
            en: "damage",
            es: "daño"
        },
        subRole: {
            en: "flanker",
            es: "flanqueador"
        },
        species: {
            en: "human",
            es: "humano"
        },
        origin: {
            en: "italy",
            es: "italia"
        },
        age: 29,
        year: 2025
    }
]