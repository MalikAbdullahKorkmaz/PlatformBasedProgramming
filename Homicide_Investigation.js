function homicideInvestigation(cyanide_powder, cctv_clear, cctv_blurry, fingerprints, suspicious_moves, cyanide_in_perpocket) {
    let score = 0;

    if (cyanide_powder > 0) score += 50;
    if (cyanide_powder > 50) score += 500;
    if (cctv_clear) score += 250;
    if (cctv_blurry) score += 150;
    if (fingerprints >= 2) score += 100;
    if (suspicious_moves) score += 50;
    if (cyanide_in_perpocket) score += 750;

    if (score > 1300 && cctv_clear && fingerprints >= 2) {
        return "This is certainly a murder.";
    } else {
        return "This case is inconclusive or not a murder.";
    }
}

// Example usage
console.log(homicideInvestigation(55, true, false, 2, true, true)); // Murder
console.log(homicideInvestigation(30, false, true, 1, false, false)); // Inconclusive
