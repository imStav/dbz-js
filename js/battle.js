//Fighter model
class User {
    constructor(age, userType, username, strength, userImg) {
        this.age = age;
        this.userType = userType;
        this.username = username;
        this.strength = strength;
        this.userImg = userImg;
    }
}

//Fighters
let goku = new User(38, 'PREMIUM', 'Goku UI', 12000, "/img/gokuPremium.png");
let gogeta = new User(38, 'PREMIUM', 'Gogeta', 11500, "/img/gogetaPremium.png");
let vegetaBlue = new User(38, 'PREMIUM', 'Vegeta Blue', 10500, "/img/vegetaBluePremium.png");
let roshi = new User(73, 'PREMIUM', 'Master Roshi', 10000, "/img/roshiPremium.png");
let trunks = new User(20, 'PREMIUM', 'Trunks', 8770, "/img/trunksPremium.png");
let vegeta = new User(38, 'NORMAL', 'Vegeta SSJ', 9000, "/img/vegetaNormal.png");
let gohan = new User(20, 'NORMAL', 'Gohan', 8550, "/img/gohanNormal.png");
let bardock = new User(54, 'NORMAL', 'Bardock', 8540, "/img/bardockNormal.png");
let piccolo = new User(58, 'NORMAL', 'Piccolo', 8130, "/img/piccoloNormal.png");
let tenshinhan = new User(44, 'NORMAL', 'Tenshinhan', 7630, "/img/tenshinhanNormal.png");

let brolyLegendary = new User(35, 'PREMIUM', 'Broly LR', 10700, "/img/brolyLegendaryPremium.png");
let broly = new User(35, 'PREMIUM', 'Broly', 9300, "/img/brolyPremium.png");
let zamasu = new User(39, 'PREMIUM', 'Zamasu', 9290, "/img/zamasuPremium.png");
let beerus = new User(233, 'PREMIUM', 'Beerus', 8900, "/img/beerusPremium.png");
let jiren = new User(100, 'PREMIUM', 'Jiren', 8850, "/img/jirenPremium.png");
let gokublack = new User(34, 'NORMAL', 'Goku Black', 8800, "/img/gokublackNormal.png");
let kefla = new User(26, 'NORMAL', 'Kefla', 8600, "/img/keflaNormal.png");
let perfectCell = new User(106, 'NORMAL', 'Perfect Cell', 8520, "/img/perfectCellNormal.png");
let hit = new User(46, 'NORMAL', 'Hit', 8400, "/img/hitNormal.png");
let majinboo = new User(66, 'NORMAL', 'Majin Boo', 7730, "/img/majinbooNormal.png");

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
];

const randomPlayer1 = Math.floor(Math.random() * characters.length);
const randomPlayer2 = Math.floor(Math.random() * characters.length);

// console.log(randomPlayer1, characters[randomPlayer1]);
// console.log(randomPlayer2, characters[randomPlayer2]);

function checkPlayers() {
    return randomPlayer1 != randomPlayer2 ? stop : window.location.reload();
}

function getResult() {
    if (characters[randomPlayer1].userType === 'PREMIUM' && characters[randomPlayer2].userType === 'NORMAL') {
        alert(characters[randomPlayer1].username + " won the fight!");
    }

    else if (characters[randomPlayer2].userType === 'PREMIUM' && characters[randomPlayer1].userType === 'NORMAL') {
        alert(characters[randomPlayer2].username + " won the fight!");
    }

    else if (characters[randomPlayer1].userType === characters[randomPlayer2].userType) {
        return characters[randomPlayer1].strength > characters[randomPlayer2].strength ? 
        alert(characters[randomPlayer1].username + " won the fight!") : 
        alert(characters[randomPlayer2].username + " won the fight!");
    }
}

function launchBattle() {
    document.getElementById("image-player-1").src = characters[randomPlayer1].userImg;
    document.getElementById("introduce-player1").innerHTML = characters[randomPlayer1].username;
    document.getElementById("introduce-player1-stats").innerHTML = characters[randomPlayer1].strength;

    document.getElementById("image-player-2").src = characters[randomPlayer2].userImg;
    document.getElementById("introduce-player2").innerHTML = characters[randomPlayer2].username;
    document.getElementById("introduce-player2-stats").innerHTML = characters[randomPlayer2].strength;

    setTimeout(() => getResult(), 500);
}

checkPlayers();