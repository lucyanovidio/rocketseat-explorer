function isInvalidEntry(entry) {
  return isNaN(entry) || entry == "";
}

function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

function rankIMC(result) {
  let ranking;

  if (result < 18.5) ranking = "Magreza";
  if (result >= 18.5 && result <= 24.9) ranking = "Normal";
  if (result >= 25 && result <= 29.9) ranking = "Sobrepeso";
  if (result >= 30 && result <= 39.9) ranking = "Obesidade";
  if (result > 40) ranking = "Obesidade grave";

  return ranking;
}

export { calculateIMC, rankIMC, isInvalidEntry };