const API_KEY = `...`

const loadTemperature = (city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    console.log(url)
    fetch(url)
    .then(res =>res.json())
    .then(data => showTemperature(data))
}

const showTemperature = data =>{
    setInnerText('temperature', data.main.temp);
    setInnerText('condition', data.weather[0].main);
    // console.log(data.weather[0].main)
}



const tempSearch = () =>{
    const inputText = document.getElementById('input-text')
    const city = inputText.value
    document.getElementById('city').innerText = city
    loadTemperature(city)
}

const setInnerText = (id,text) =>{
    document.getElementById(id).innerText = text;
}

loadTemperature()