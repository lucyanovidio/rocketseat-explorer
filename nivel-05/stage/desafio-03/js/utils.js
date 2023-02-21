function isInvalidEntry(entry) {
    return isNaN(entry) || entry == "";
}

function calculateIMC(weight, height) {
    return (weight / (height / 100)**2).toFixed(2);
}

export { calculateIMC, isInvalidEntry };