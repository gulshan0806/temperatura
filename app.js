document.getElementById('convertBtn').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperature');
    const scaleSelect = document.getElementById('scale');
    const resultsDiv = document.getElementById('results');

    const temperature = parseFloat(temperatureInput.value);
    const scale = scaleSelect.value;

    if (isNaN(temperature)) {
        alert('Iltimos, to\'g\'ri harorat qiymatini kiriting!');
        return;
    }

    let celsius, fahrenheit, kelvin;

    // Tanlangan shkalaga qarab konvertatsiya qilish
    switch(scale) {
        case 'celsius':
            celsius = temperature;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = celsius + 273.15;
            break;
        case 'fahrenheit':
            fahrenheit = temperature;
            celsius = (fahrenheit - 32) * 5/9;
            kelvin = celsius + 273.15;
            break;
        case 'kelvin':
            kelvin = temperature;
            celsius = kelvin - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            break;
    }

    // Natijalarni ko'rsatish
    document.getElementById('celsiusResult').textContent = celsius.toFixed(2) + ' °C';
    document.getElementById('fahrenheitResult').textContent = fahrenheit.toFixed(2) + ' °F';
    document.getElementById('kelvinResult').textContent = kelvin.toFixed(2) + ' K';

    // Natijalar bo'limini ko'rsatish
    resultsDiv.style.display = 'block';
});