function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function nextPrime(n) {
    let candidate = n + 1;
    while (!isPrime(candidate)) {
        candidate++;
    }
    return candidate;
}

// Example usage
console.log(nextPrime(13)); // 17
console.log(nextPrime(8));  // 11
