function convert() {
    var input = document.getElementById("input").value;
    var unit = document.getElementById("unit").value;
    var result = document.getElementById("result");

    if (unit === "celsius") {
        var convertedTemp = (input * 9 / 5) + 32;
        result.textContent = input + "°C is equal to " + convertedTemp + "°F";
    } else if (unit === "fahrenheit") {
        var convertedTemp = (input - 32) * 5 / 9;
        result.textContent = input + "°F is equal to " + convertedTemp + "°C";
    }
}