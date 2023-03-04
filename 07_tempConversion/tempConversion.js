const convertToCelsius = function(fahrenheit) {
    let celsiusResult = ((fahrenheit - 32) * 5 / 9);
    let roundedC = Math.round(celsiusResult * 10) / 10;
    return roundedC;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheitResult = (celsius * 9 / 5 + 32);
  let roundedF = Math.round(fahrenheitResult * 10) / 10;
  return roundedF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
