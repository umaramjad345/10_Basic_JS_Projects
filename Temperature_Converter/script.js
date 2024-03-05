const celciusEl = document.getElementById("celcius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemp(event) {
  const currentVal = +event.target.value; // + to convert string data type into number

  switch (event.target.name) {
    case "celcius":
      fahrenheitEl.value = (currentVal * 1.8 + 32).toFixed(2);
      kelvinEl.value = (currentVal + 273.15).toFixed(2);
      break;

    case "fahrenheit":
      celciusEl.value = ((currentVal - 32) / 1.8).toFixed(2);
      kelvinEl.value = ((currentVal - 32) / 1.8 + 273.15).toFixed(2);
      break;

    case "kelvin":
      celciusEl.value = (currentVal - 273.15).toFixed(2);
      fahrenheitEl.value = ((currentVal - 273.15) * 1.8 + 32).toFixed(2);
      break;

    default:
      break;
  }
}
