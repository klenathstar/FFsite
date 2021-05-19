var attack
var magic
var items
var run
var goblin = {
    hp = 100,
    mp = 20,
    str = 10,
    mag = 10,
    spd = 10,
    def = 10
}
var ifrit = {
    hp = 100,
    mp = 20,
    str = 10,
    mag = 10,
    spd = 10,
    def = 10
}
var bahamut = {
    hp = 100,
    mp = 20,
    str = 10,
    mag = 10,
    spd = 10,
    def = 10
}
var leviathan = {
    hp = 100,
    mp = 20,
    str = 10,
    mag = 10,
    spd = 10,
    def = 10
}
var shiva = {
    hp = 100,
    mp = 20,
    str = 10,
    mag = 10,
    spd = 10,
    def = 10
}
var items

//attack functions
function fight(char, action) {
    if (action > char[def]) {
        char[hp] - action[dam];
    }
}

function magicCast(char, magic) {
    if (magic > char[magD]) {
        char[hp] - magic[dam];
    }
}

function run(char, enemy) {}

function items(inventory) {}

//item functions
function potionConsume(char) {
    if (potion) {
        char[hp] + 40;
        potion--;
    }
}

function hiPotionConsume(char) {
    if (hiPotion) {
        char[hp] + 200;
        hiPotion--;
    }
}

function etherConsume(char) {
    if (ether) {
        char[mp] + 20;
        ether--;
    }
}

function hermesConsume(char) {
    if (hermes) {
        char[spd] + 10;
        hermes--;
    }
}

function atk1(id) {
    id.innerHTML = "BONK";
}