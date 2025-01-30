// game objects in arrays
const gamesArray = [
    { name: "Hunt: Showdown", numberOfPlayers: "1 to 3", rating: "1", shortDescription: "a first-person shooter video game where players compete to hunt down and kill monsters in exchange for bounties. The game is set in the Louisiana bayou in 1896 and features a dark, eerie atmosphere." },
    { name: "Magic: The Gathering", numberOfPlayers: "2 and up", rating: "2", shortDescription:"a collectible card game where players cast spells and summon creatures to defeat their opponents. It's considered the original trading card game and has been popular for over 30 years." },
    { name: "Deep Rock Galactic", numberOfPlayers: "1 to 4", rating: "3", shortDescription: "a cooperative first-person shooter. Gameplay primarily centers around missions that take place in fully destructible, procedurally generated cave systems; each has varying terrain generation, objectives, hazards, and enemies depending on the selected biome and mission type." }
];
// prompt
let user = prompt(" have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game");
// input
user = Number(user);

// message
window.alert("You selected " + gamesArray[user-1].name + ", which is a " + gamesArray[user-1].numberOfPlayers + " player game. " + gamesArray[user-1].shortDescription);
