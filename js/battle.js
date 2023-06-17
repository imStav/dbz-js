//Fighter model
class Fighter {
    constructor(name, strength, avatar) {
        this.name = name;
        this.strength = strength;
        this.avatar = avatar;
    }
}

//Fighters
let goku = new Fighter('Goku UI', 12000, "/img/gokuPremium.png");
let gogeta = new Fighter('Gogeta', 11500, "/img/gogetaPremium.png");
let vegetaBlue = new Fighter('Vegeta Blue', 10500, "/img/vegetaBluePremium.png");
let roshi = new Fighter('Master Roshi', 10000, "/img/roshiPremium.png");
let trunks = new Fighter('Trunks', 8770, "/img/trunksPremium.png");
let vegeta = new Fighter('Vegeta SSJ', 9000, "/img/vegetaNormal.png");
let gohan = new Fighter('Gohan', 8550, "/img/gohanNormal.png");
let bardock = new Fighter('Bardock', 8540, "/img/bardockNormal.png");
let piccolo = new Fighter('Piccolo', 8130, "/img/piccoloNormal.png");
let tenshinhan = new Fighter('Tenshinhan', 7630, "/img/tenshinhanNormal.png");

let brolyLegendary = new Fighter('Broly LR', 10700, "/img/brolyLegendaryPremium.png");
let broly = new Fighter('Broly', 9300, "/img/brolyPremium.png");
let zamasu = new Fighter('Zamasu', 9290, "/img/zamasuPremium.png");
let beerus = new Fighter('Beerus', 8900, "/img/beerusPremium.png");
let jiren = new Fighter('Jiren', 8850, "/img/jirenPremium.png");
let gokublack = new Fighter('Goku Black', 8800, "/img/gokublackNormal.png");
let kefla = new Fighter('Kefla', 8600, "/img/keflaNormal.png");
let perfectCell = new Fighter('Perfect Cell', 8520, "/img/perfectCellNormal.png");
let hit = new Fighter('Hit', 8400, "/img/hitNormal.png");
let majinboo = new Fighter('Majin Boo', 7730, "/img/majinbooNormal.png");

//Regrouping all fihters in one array
let characters = [
    goku,
    gogeta,
    vegetaBlue,
    roshi,
    trunks,
    vegeta,
    gohan,
    bardock,
    piccolo,
    tenshinhan,
    brolyLegendary,
    broly,
    zamasu,
    beerus,
    jiren,
    gokublack,
    kefla,
    perfectCell,
    hit,
    majinboo
]

const randomPlayer1 = Math.floor(Math.random() * characters.length)
const randomPlayer2 = Math.floor(Math.random() * characters.length)

function checkPlayers() {
    return randomPlayer1 !== randomPlayer2 ? stop : window.location.reload()
}

function getResult() {
        return characters[randomPlayer1].strength > characters[randomPlayer2].strength 
        ? alert(characters[randomPlayer1].name + " won the fight!") 
        : alert(characters[randomPlayer2].name + " won the fight!")
}

function launchBattle() {
    document.getElementById("image-player-1").src = characters[randomPlayer1].avatar;
    document.getElementById("introduce-player1").innerHTML = characters[randomPlayer1].name
    document.getElementById("introduce-player1-stats").innerHTML = characters[randomPlayer1].strength

    document.getElementById("image-player-2").src = characters[randomPlayer2].avatar;
    document.getElementById("introduce-player2").innerHTML = characters[randomPlayer2].name
    document.getElementById("introduce-player2-stats").innerHTML = characters[randomPlayer2].strength

    setTimeout(() => getResult(), 500)
}

checkPlayers()