function generateRandomNumber() {
  return Math.floor(Math.random() * 100) / 1;
}

function celciustoFarenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

export { generateRandomNumber, celciustoFarenheit };
