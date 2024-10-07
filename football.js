function playerPosition(jersey_number) {
    if (jersey_number % 2 === 0) {
        if (jersey_number >= 50 && jersey_number <= 100) {
            return "Player can be the team captain.";
        } else {
            return "Player is a target attacker.";
        }
    } else {
        if (jersey_number > 90) {
            return "Player is a playmaker.";
        } else if (jersey_number % 15 === 0) {
            return "Player is a keeper.";
        } else {
            return "Player is a defender.";
        }
    }
}

// Example usage
console.log(playerPosition(4));  // Target attacker
console.log(playerPosition(52)); // Captain
console.log(playerPosition(93)); // Playmaker
console.log(playerPosition(15)); // Keeper
