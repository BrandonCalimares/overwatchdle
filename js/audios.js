const audios = [
    // Ana
    {
        hero: "ana",
        text: "Sanación fortificada",
        audio: "audios/ana-1.mp3"
    },
    {
        hero: "ana",
        text: "Por eso no puedo jubilarme",
        audio: "audios/ana-2.mp3"
    },
    {
        hero: "ana",
        text: "Quien haya robado mi tecnologia no sabe usarla",
        audio: "audios/ana-3.mp3"
    },
    {
        hero: "ana",
        text: "Nanopotenciamiento administrado",
        audio: "audios/ana-4.mp3"
    },
    // Ashe
    {
        hero: "ashe",
        text: "Dinamita fuera",
        audio: "audios/ashe-1.mp3"
    },
    {
        hero: "ashe",
        text: "Dile al diablo que le mando saludos",
        audio: "audios/ashe-2.mp3"
    },
    {
        hero: "ashe",
        text: "No es mi primer rodeo y no sera el último",
        audio: "audios/ashe-3.mp3"
    },
    {
        hero: "ashe",
        text: "¡Bob haz algo!",
        audio: "audios/ashe-4.mp3"
    },
    // Baptiste
    {
        hero: "baptiste",
        text: "Causa de la muerte: el medico",
        audio: "audios/baptiste-1.mp3"
    },
    {
        hero: "baptiste",
        text: "El dolor significa que vives... hasta que ya no",
        audio: "audios/baptiste-2.mp3"
    },
    {
        hero: "baptiste",
        text: "Yo solo soy culpable de robar corazones",
        audio: "audios/baptiste-3.mp3"
    },
    {
        hero: "baptiste",
        text: "Campo de inmortalidad desplegado",
        audio: "audios/baptiste-4.mp3"
    },
    // Bastion
    {
        hero: "bastion",
        text: "DAH DAH WEEEE!",
        audio: "audios/bastion-1.mp3"
    },
    {
        hero: "bastion",
        text: "DOO DO DOO DEE!",
        audio: "audios/bastion-2.mp3"
    },
    {
        hero: "bastion",
        text: "BEW-WOO BEW-WOO",
        audio: "audios/bastion-3.mp3"
    },
    {
        hero: "bastion",
        text: "DUN DUN BOOP BOOP",
        audio: "audios/bastion-4.mp3"
    },
    // Brigitte
    {
        hero: "brigitte",
        text: "¡Alla till mig!",
        audio: "audios/brigitte-1.mp3"
    },
    {
        hero: "brigitte",
        text: "Este escudo no es solo para defenza",
        audio: "audios/brigitte-2.mp3"
    },
    {
        hero: "brigitte",
        text: "A veces me sigo sorprendiendo a mi misma",
        audio: "audios/brigitte-3.mp3"
    },
    {
        hero: "brigitte",
        text: "Tienes mi protección si estas cerca de mi posición",
        audio: "audios/brigitte-4.mp3"
    },
    // Cassidy
    {
        hero: "cassidy",
        text: "Alguien debe salir al ruedo",
        audio: "audios/cassidy-1.mp3"
    },
    {
        hero: "cassidy",
        text: "No tiene sentido que me digan pistolero, yo no reparto pistolas",
        audio: "audios/cassidy-2.mp3"
    },
    {
        hero: "cassidy",
        text: "Ya me canse de salvarte el pellejo",
        audio: "audios/cassidy-3.mp3"
    },
    {
        hero: "cassidy",
        text: "Te invito a probar tu suerte",
        audio: "audios/cassidy-4.mp3"
    },
    // Doomfist
    {
        hero: "doomfist",
        text: "Nuestro futuro se forjara en el conflicto",
        audio: "audios/doomfist-1.mp3"
    },
    {
        hero: "doomfist",
        text: "Tus servicios ya no seran requeridos",
        audio: "audios/doomfist-2.mp3"
    },
    {
        hero: "doomfist",
        text: "¡Tiemblen ante mi!",
        audio: "audios/doomfist-3.mp3"
    },
    {
        hero: "doomfist",
        text: "Yo fortalecere este mundo",
        audio: "audios/doomfist-4.mp3"
    },
    // D.va
    {
        hero: "dva",
        text: "Es hora de salvar al mundo, ¡A pelear!",
        audio: "audios/dva-1.mp3"
    },
    {
        hero: "dva",
        text: "¡Mejora en tu proxima vida!",
        audio: "audios/dva-2.mp3"
    },
    {
        hero: "dva",
        text: "¡Mono mono mono mono!",
        audio: "audios/dva-3.mp3"
    },
    {
        hero: "dva",
        text: "¡Nerfea esto!",
        audio: "audios/dva-4.mp3"
    },
    // Echo
    {
        hero: "echo",
        text: "Siempre estoy lista para aprender",
        audio: "audios/echo-1.mp3"
    },
    {
        hero: "echo",
        text: "Ejecutar, repetir, mejorar",
        audio: "audios/echo-2.mp3"
    },
    {
        hero: "echo",
        text: "Oh ¿Tienen que nerfearme?",
        audio: "audios/echo-3.mp3"
    },
    {
        hero: "echo",
        text: "Lo siento papá... digo... Torbjorn",
        audio: "audios/echo-4.mp3"
    },
    // Genji
    {
        hero: "genji",
        text: "La paz vuelve a los que la desean",
        audio: "audios/genji-1.mp3"
    },
    {
        hero: "genji",
        text: "Hasta los monos se caen de los arboles",
        audio: "audios/genji-2.mp3"
    },
    {
        hero: "genji",
        text: "Mi espada esta afilada, y mi voluntad es pura",
        audio: "audios/genji-3.mp3"
    },
    {
        hero: "genji",
        text: "¡Ryujin no ken o kurae!",
        audio: "audios/genji-4.mp3"
    },
    // Hanzo
    {
        hero: "hanzo",
        text: "El ganar es todo lo que me queda",
        audio: "audios/hanzo-1.mp3"
    },
    {
        hero: "hanzo",
        text: "No es sensato poner a prueba mis reflejos",
        audio: "audios/hanzo-2.mp3"
    },
    {
        hero: "hanzo",
        text: "Tu destino era caer, inevitable como el invierno",
        audio: "audios/hanzo-3.mp3"
    },
    {
        hero: "hanzo",
        text: "¡Ryu ga waga teki o kurau!",
        audio: "audios/hanzo-4.mp3"
    },
    // Illari
    {
        hero: "illari",
        text: "Ojos que no ven corazón que no siente",
        audio: "audios/illari-1.mp3"
    },
    {
        hero: "illari",
        text: "He hecho cosas peores y hare cosas aun peores",
        audio: "audios/illari-2.mp3"
    },
    {
        hero: "illari",
        text: "La mona aunque se vista de seda, mona se queda",
        audio: "audios/illari-3.mp3"
    },
    {
        hero: "illari",
        text: "¡Inti lluqsimun!",
        audio: "audios/illari-4.mp3"
    },
    // Junkerqueen
    {
        hero: "junkerqueen",
        text: "Mi trono esta donde yo lo decida",
        audio: "audios/junkerqueen-1.mp3"
    },
    {
        hero: "junkerqueen",
        text: "Juntate con ratas y moriras como rata",
        audio: "audios/junkerqueen-2.mp3"
    },
    {
        hero: "junkerqueen",
        text: "¡Es como azotar sandias atadas a una cuerda!",
        audio: "audios/junkerqueen-3.mp3"
    },
    {
        hero: "junkerqueen",
        text: "¡Es hora del juicio!",
        audio: "audios/junkerqueen-4.mp3"
    },
    // Junkrat
    {
        hero: "junkrat",
        text: "Tengo muchas bombas para todos",
        audio: "audios/junkrat-1.mp3"
    },
    {
        hero: "junkrat",
        text: "Mi zapato voy a atar, porque el caos voy a provocar",
        audio: "audios/junkrat-2.mp3"
    },
    {
        hero: "junkrat",
        text: "Nunca fallo, excepto cuando fallo... pero eso no cuenta",
        audio: "audios/junkrat-3.mp3"
    },
    {
        hero: "junkrat",
        text: "Nah, la punteria esta sobrevalorada",
        audio: "audios/junkrat-4.mp3"
    },
    // Juno
    {
        hero: "juno",
        text: "Un pasito a la vez",
        audio: "audios/juno-1.mp3"
    },
    {
        hero: "juno",
        text: "Un despegue perfecto no significa un aterrizaje perfecto",
        audio: "audios/juno-2.mp3"
    },
    {
        hero: "juno",
        text: "Oh, los colores de la tierra son tan hermosos",
        audio: "audios/juno-3.mp3"
    },
    {
        hero: "juno",
        text: "¡Fijando vector satelital!",
        audio: "audios/juno-4.mp3"
    },
    // Kiriko
    {
        hero: "kiriko",
        text: "Encontrare mi propio camino",
        audio: "audios/kiriko-1.mp3"
    },
    {
        hero: "kiriko",
        text: "¡Que Kitsune te muestre el camino!",
        audio: "audios/kiriko-2.mp3"
    },
    {
        hero: "kiriko",
        text: "Mi madre entreno a la mitad de nuestro equipo, inscribire al resto para que tomen clases",
        audio: "audios/kiriko-3.mp3"
    },
    {
        hero: "kiriko",
        text: "Puede que a veces aparezca de la nada junto a alguno de ustedes... no me disparen",
        audio: "audios/kiriko-4.mp3"
    },
    // Lifeweaver
    {
        hero: "lifeweaver",
        text: "Dedica cada momento a convertirte en quien eres realmente",
        audio: "audios/lifeweaver-1.mp3"
    },
    {
        hero: "lifeweaver",
        text: "Una rosa solitaria suele ser arrancada",
        audio: "audios/lifeweaver-2.mp3"
    },
    {
        hero: "lifeweaver",
        text: "El dolor es un poderoso maestro",
        audio: "audios/lifeweaver-3.mp3"
    },
    {
        hero: "lifeweaver",
        text: "¡La vida protege la vida!",
        audio: "audios/lifeweaver-4.mp3"
    },
    // Lucio
    {
        hero: "lucio",
        text: "Estamos aqui para que nos escuchen",
        audio: "audios/lucio-1.mp3"
    },
    {
        hero: "lucio",
        text: "El poder de la tecnologia en las manos correctas",
        audio: "audios/lucio-2.mp3"
    },
    {
        hero: "lucio",
        text: "Dejen que el sonido de la sanacion los envuelva",
        audio: "audios/lucio-3.mp3"
    },
    {
        hero: "lucio",
        text: "Otro dia, otra mision, ¡Que emocion!",
        audio: "audios/lucio-4.mp3"
    },
    // Mauga
    {
        hero: "mauga",
        text: "Un arma en cada mano y una sonrisa en mis labios",
        audio: "audios/mauga-1.mp3"
    },
    {
        hero: "mauga",
        text: "Relajate, esto tiene que ser divertido",
        audio: "audios/mauga-2.mp3"
    },
    {
        hero: "mauga",
        text: "Nada de huir, solo luchar",
        audio: "audios/mauga-3.mp3"
    },
    {
        hero: "mauga",
        text: "¡Se se'i koikiiki!",
        audio: "audios/mauga-4.mp3"
    },
    // Mei
    {
        hero: "mei",
        text: "Considerando las posibilidades, eso fue un milagro",
        audio: "audios/mei-1.mp3"
    },
    {
        hero: "mei",
        text: "Fracasar es parte de la ciencia",
        audio: "audios/mei-2.mp3"
    },
    {
        hero: "mei",
        text: "La ciencia tiene la llave del conocimiento",
        audio: "audios/mei-3.mp3"
    },
    {
        hero: "mei",
        text: "¿Que mide tres metros y esta hecho de hielo?",
        audio: "audios/mei-4.mp3"
    },
    // Mercy
    {
        hero: "mercy",
        text: "Descuiden, estare justo detras de ustedes",
        audio: "audios/mercy-1.mp3"
    },
    {
        hero: "mercy",
        text: "Estoy en el apogeo de mi rendimiento",
        audio: "audios/mercy-2.mp3"
    },
    {
        hero: "mercy",
        text: "La tecnologia medica es realmente extraordinaria",
        audio: "audios/mercy-3.mp3"
    },
    {
        hero: "mercy",
        text: "¡Helden sterben nicht!",
        audio: "audios/mercy-4.mp3"
    },
    // Moira
    {
        hero: "moira",
        text: "La humanidad esta encadenada, y yo encontrare la llave",
        audio: "audios/moira-1.mp3"
    },
    {
        hero: "moira",
        text: "Un momento para sanar, y un momento para matar",
        audio: "audios/moira-2.mp3"
    },
    {
        hero: "moira",
        text: "Hasta los heroes son maldecidos por la mortalidad",
        audio: "audios/moira-3.mp3"
    },
    {
        hero: "moira",
        text: "¡Rindanse ante mi voluntad!",
        audio: "audios/moira-4.mp3"
    },
    // Orisa
    {
        hero: "orisa",
        text: "Solo unidos encontraremos la fuerza",
        audio: "audios/orisa-1.mp3"
    },
    {
        hero: "orisa",
        text: "Fui creada para proteger, y eso hare",
        audio: "audios/orisa-2.mp3"
    },
    {
        hero: "orisa",
        text: "¡Enfrenta tu destino!",
        audio: "audios/orisa-3.mp3"
    },
    {
        hero: "orisa",
        text: "El deber de una protectora nunca termina",
        audio: "audios/orisa-4.mp3"
    },
    // Pharah
    {
        hero: "pharah",
        text: "En este cielo solo cabe un ave de presa",
        audio: "audios/pharah-1.mp3"
    },
    {
        hero: "pharah",
        text: "Podras robar un traje pero jamas robaras el talento",
        audio: "audios/pharah-2.mp3"
    },
    {
        hero: "pharah",
        text: "Todos tienen un plan, hasta que les explota un cohete en la cara",
        audio: "audios/pharah-3.mp3"
    },
    {
        hero: "pharah",
        text: "¡Llueve justicia desde el cielo!",
        audio: "audios/pharah-4.mp3"
    },
    // Ramattra
    {
        hero: "ramattra",
        text: "Conseguiremos la paz cueste lo que cueste",
        audio: "audios/ramattra-1.mp3"
    },
    {
        hero: "ramattra",
        text: "Sientan mi sufrimiento",
        audio: "audios/ramattra-2.mp3"
    },
    {
        hero: "ramattra",
        text: "El camino por delante es dificil, pero hay que recorrerlo",
        audio: "audios/ramattra-3.mp3"
    },
    {
        hero: "ramattra",
        text: "Lo unico que importa es luchar, hasta el ultimo segundo",
        audio: "audios/ramattra-4.mp3"
    },
    // Reaper
    {
        hero: "reaper",
        text: "No podras escapar de la muerte",
        audio: "audios/reaper-1.mp3"
    },
    {
        hero: "reaper",
        text: "Me gusta tu forma de morir",
        audio: "audios/reaper-2.mp3"
    },
    {
        hero: "reaper",
        text: "Que suene un canto funebre",
        audio: "audios/reaper-3.mp3"
    },
    {
        hero: "reaper",
        text: "¡Muere, muere, muere!",
        audio: "audios/reaper-4.mp3"
    },
    // Reinhardt
    {
        hero: "reinhardt",
        text: "¡Juntos acabaremos con todos!",
        audio: "audios/reinhardt-1.mp3"
    },
    {
        hero: "reinhardt",
        text: "¿Aun piensas que soy demasiado viejo para esto?",
        audio: "audios/reinhardt-2.mp3"
    },
    {
        hero: "reinhardt",
        text: "Yo honro mi juramento ¿Tu por que no?",
        audio: "audios/reinhardt-3.mp3"
    },
    {
        hero: "reinhardt",
        text: "¡Cae el martillo!",
        audio: "audios/reinhardt-4.mp3"
    },
    // Roadhog
    {
        hero: "roadhog",
        text: "El apocalipsis todavia no termina",
        audio: "audios/roadhog-1.mp3"
    },
    {
        hero: "roadhog",
        text: "Ganaria mucho si te vendo como chatarra",
        audio: "audios/roadhog-2.mp3"
    },
    {
        hero: "roadhog",
        text: "Soy un apocalipsis de un solo jinete",
        audio: "audios/roadhog-3.mp3"
    },
    {
        hero: "roadhog",
        text: "¡Ya se desato el puerco!",
        audio: "audios/roadhog-4.mp3"
    },
    // Sigma
    {
        hero: "sigma",
        text: "¿Por que buscar respuestas cuando no sabemos la respuesta?",
        audio: "audios/sigma-1.mp3"
    },
    {
        hero: "sigma",
        text: "El horizonte de sucesos es inedudible",
        audio: "audios/sigma-2.mp3"
    },
    {
        hero: "sigma",
        text: "El universo no llora cuando el sol se pone",
        audio: "audios/sigma-3.mp3"
    },
    {
        hero: "sigma",
        text: "¿¡Que es esa melodia!?",
        audio: "audios/sigma-4.mp3"
    },
    // Sojourn
    {
        hero: "sojourn",
        text: "Estamos juntos en esto, todos",
        audio: "audios/sojourn-1.mp3"
    },
    {
        hero: "sojourn",
        text: "Si ellos no se rinden, yo menos",
        audio: "audios/sojourn-2.mp3"
    },
    {
        hero: "sojourn",
        text: "Necesitare otra capa de pintura despues de esto",
        audio: "audios/sojourn-3.mp3"
    },
    {
        hero: "sojourn",
        text: "¡Esto termina ahora!",
        audio: "audios/sojourn-4.mp3"
    },
    // Soldier76
    {
        hero: "soldier76",
        text: "Cada soldado necesita una causa",
        audio: "audios/soldier76-1.mp3"
    },
    {
        hero: "soldier76",
        text: "Volveras a casa en una caja",
        audio: "audios/soldier76-2.mp3"
    },
    {
        hero: "soldier76",
        text: "Nada arruina un gran momento como una culata de rifle en los dientes",
        audio: "audios/soldier76-3.mp3"
    },
    {
        hero: "soldier76",
        text: "Te tengo en la mira",
        audio: "audios/soldier76-4.mp3"
    },
    // Sombra
    {
        hero: "sombra",
        text: "En mi mundo, no existen los secretos",
        audio: "audios/sombra-1.mp3"
    },
    {
        hero: "sombra",
        text: "Siempre estoy en el lugar y momento adecuados",
        audio: "audios/sombra-2.mp3"
    },
    {
        hero: "sombra",
        text: "Ay, ¿Te asuste?",
        audio: "audios/sombra-3.mp3"
    },
    {
        hero: "sombra",
        text: "¡Apagando las luces!",
        audio: "audios/sombra-4.mp3"
    },
    // Symmetra
    {
        hero: "symmetra",
        text: "Construimos un mundo nuevo a partir de la imperfeccion",
        audio: "audios/symmetra-1.mp3"
    },
    {
        hero: "symmetra",
        text: "El mundo es un sueño que no se ha materializado",
        audio: "audios/symmetra-2.mp3"
    },
    {
        hero: "symmetra",
        text: "El verdadero enemigo de la humanidad es el desorden",
        audio: "audios/symmetra-3.mp3"
    },
    {
        hero: "symmetra",
        text: "¡Yahi param vaastavikta hai!",
        audio: "audios/symmetra-4.mp3"
    },
    // Torbjorn
    {
        hero: "torbjorn",
        text: "Herramientas a mano, cerebro en funcionamiento",
        audio: "audios/torbjorn-1.mp3"
    },
    {
        hero: "torbjorn",
        text: "Jaja, y eso fue con un solo ojo",
        audio: "audios/torbjorn-2.mp3"
    },
    {
        hero: "torbjorn",
        text: "Es un honor ser desmantelado por mi",
        audio: "audios/torbjorn-3.mp3"
    },
    {
        hero: "torbjorn",
        text: "¡Suelo de lava!",
        audio: "audios/torbjorn-4.mp3"
    },
    // Tracer
    {
        hero: "tracer",
        text: "En el fondo aun soy una piloto de combate",
        audio: "audios/tracer-1.mp3"
    },
    {
        hero: "tracer",
        text: "Hola cariño, ya llego la caballeria",
        audio: "audios/tracer-2.mp3"
    },
    {
        hero: "tracer",
        text: "Demasiado rapido para ti",
        audio: "audios/tracer-3.mp3"
    },
    {
        hero: "tracer",
        text: "El ultimo en llegar es un huevo podrido",
        audio: "audios/tracer-4.mp3"
    },
    // Venture
    {
        hero: "venture",
        text: "Juana de arco no se rindio, ¡Y yo tampoco!",
        audio: "audios/venture-1.mp3"
    },
    {
        hero: "venture",
        text: "¡Iniciando excavacion!",
        audio: "audios/venture-2.mp3"
    },
    {
        hero: "venture",
        text: "Si seguimos esperando voy a resetar a todos los emperadores romanos para matar el tiempo",
        audio: "audios/venture-3.mp3"
    },
    {
        hero: "venture",
        text: "¡Hagamos historia!",
        audio: "audios/venture-4.mp3"
    },
    // Widowmaker
    {
        hero: "widowmaker",
        text: "Mi objetivo es la debastacion",
        audio: "audios/widowmaker-1.mp3"
    },
    {
        hero: "widowmaker",
        text: "Mi mordedura es letal",
        audio: "audios/widowmaker-2.mp3"
    },
    {
        hero: "widowmaker",
        text: "La distancia no es un obstaculo para mi precision",
        audio: "audios/widowmaker-3.mp3"
    },
    {
        hero: "widowmaker",
        text: "Nadie puede esconderse de mi",
        audio: "audios/widowmaker-4.mp3"
    },
    // Winston
    {
        hero: "winston",
        text: "Es posible crear un mundo mejor",
        audio: "audios/winston-1.mp3"
    },
    {
        hero: "winston",
        text: "Siempre nos quedara la colonia lunar",
        audio: "audios/winston-2.mp3"
    },
    {
        hero: "winston",
        text: "No importa que tan rapido vayas, los rayos son mas rapidos",
        audio: "audios/winston-3.mp3"
    },
    {
        hero: "winston",
        text: "Apuesto a que no esperabas eso de un cientifico",
        audio: "audios/winston-4.mp3"
    },
    // Wreckingball
    {
        hero: "wreckingball",
        text: "Armas en funcionamiento, gancho listo, hamster emocionado",
        audio: "audios/wreckingball-1.mp3"
    },
    {
        hero: "wreckingball",
        text: "La gravedad no detiene a este mamifero",
        audio: "audios/wreckingball-2.mp3"
    },
    {
        hero: "wreckingball",
        text: "Chillidos intraducibles de alegría",
        audio: "audios/wreckingball-3.mp3"
    },
    {
        hero: "wreckingball",
        text: "¡Area restringida!",
        audio: "audios/wreckingball-4.mp3"
    },
    // Zarya
    {
        hero: "zarya",
        text: "¡La mujer mas fuerte con vida!",
        audio: "audios/zarya-1.mp3"
    },
    {
        hero: "zarya",
        text: "Nadie se escapa de la gravedad",
        audio: "audios/zarya-2.mp3"
    },
    {
        hero: "zarya",
        text: "Si desafias a la campeona, espera la derrota",
        audio: "audios/zarya-3.mp3"
    },
    {
        hero: "zarya",
        text: "¡Ogon' po gotovnosti!",
        audio: "audios/zarya-4.mp3"
    },
    // Zenyatta
    {
        hero: "zenyatta",
        text: "En medio de la discordia, hallaremos tranquilidad",
        audio: "audios/zenyatta-1.mp3"
    },
    {
        hero: "zenyatta",
        text: "Uno a menudo encuentra su destino en el camino que toma para evitarlo",
        audio: "audios/zenyatta-2.mp3"
    },
    {
        hero: "zenyatta",
        text: "Ningun puño le ha ganado a una mano abierta",
        audio: "audios/zenyatta-3.mp3"
    },
    {
        hero: "zenyatta",
        text: "Siempre la tranquilidad",
        audio: "audios/zenyatta-4.mp3"
    }
]