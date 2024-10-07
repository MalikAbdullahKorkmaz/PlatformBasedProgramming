function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function sumOfPrimes(start, end) {
    let primeSum = 0;
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            primeSum += num;
        }
    }
    return primeSum;
}

// Example usage
console.log(sumOfPrimes(1, 12));  // 28 (2 + 3 + 5 + 7 + 11)
