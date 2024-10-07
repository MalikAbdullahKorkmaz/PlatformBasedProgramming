function analyzePerson(name, age, place_to_live, savings) {
    if (age > 40 && ['Nevada', 'New York', 'Havana'].includes(place_to_live) && savings > 10000000) {
        return `${name} is likely a mafia member with Don rank.`;
    } else if (age >= 25 && age <= 40 && ['New Jersey', 'Manhattan', 'Nevada'].includes(place_to_live) && savings >= 1000000 && savings <= 2000000) {
        return `${name} is likely a mafia member with Underboss rank.`;
    } else if (age >= 18 && age <= 24 && ['California', 'Detroit', 'Boston'].includes(place_to_live) && savings < 1000000) {
        return `${name} is likely a mafia member with Capo rank.`;
    } else {
        return `${name} is not suspicious.`;
    }
}

// Example usage
console.log(analyzePerson("John", 45, "Nevada", 12000000)); // Don
console.log(analyzePerson("Mike", 30, "New Jersey", 1500000)); // Underboss
console.log(analyzePerson("Tom", 22, "California", 500000)); // Capo

