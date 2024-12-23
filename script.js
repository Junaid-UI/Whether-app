const inputField = document.querySelector('input')
const btn = document.querySelector('button')
const weatherBody = document.querySelector('.weather-body')
const image = document.querySelector('.image img')
const temperature = document.querySelector('.tem-Num span')
const temperatureName = document.querySelector('.tem-name')
const humidity = document.querySelector('.per span')
const wSpeed = document.querySelector('.km span')
const errorField = document.querySelector('.error')


async function checkWeather(city) {

   try {
       
        const Api_key = "09f19718ca2b72f66d3bd7a4d8333bb1"
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}`)
        const result = await response.json() 
        temperature.innerHTML = Math.round(result.main.temp - 273.15)
        temperatureName.innerHTML = result.weather[0].description
        humidity.innerHTML = result.main.humidity
        wSpeed.innerHTML = result.wind.speed
        errorField.classList.remove('error-container')
        weatherBody.style.display = 'flex'
      //  console.log(result);
        if(result.weather[0].main == "Cloud") {
            image.src = 'images/cloud.png'
        }else if(result.weather[0].main == "Clear") {
            image.src = 'images/clear.png'
        }else if(result.weather[0].main == "Haze") {
            image.src = 'images/mist.png'
        }else if(result.weather[0].main == "Rain") {
            image.src = 'images/rain.png'
        }else if(result.weather[0].main == "Snow") {
            image.src = 'images/snow.png'
        }else if(result.weather[0].main == "Smoke") {
            image.src = 'images/smoke.png'
        }else {
           image.style.display = 'none'
        }

        
        
    } catch (error) {

        errorField.classList.add('error-container')
        weatherBody.style.display = 'none'
    }


    // if(result.cod == "404") {
        
    // }

    
    


    // console.log(result);
       
    
}

btn.addEventListener('click',() => {
    checkWeather(inputField.value)
})

