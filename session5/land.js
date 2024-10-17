let {checkConditions}=require('./checkWeather')
const weatherData = {
    temperature : 26,
    humidity : 60,
    winSpeed : 20
}

let result = checkConditions(weatherData)
console.log(result);