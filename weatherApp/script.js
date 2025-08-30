const apiKey = "c1a535ce3375fe95974fb12a65c3d597";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputBar = document.querySelector('.inp-sect input');
const search_btn = document.querySelector('.searchbtn');
const content = document.querySelector('.content');
const error = document.querySelector('.error');
const bottom = document.querySelector('.bottom');
const container = document.querySelector('.container');
const weatherImg = document.querySelector('.weatherIcon');


const cloudImg = document.querySelector('.clouds');
const clearImg = document.querySelector('.clear');
const drizzleImg = document.querySelector('.drizzle');
const mistImg = document.querySelector('.mist');
const rainImg = document.querySelector('.rain');
const snowImg = document.querySelector('.snow');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    if(response.status == 404)
    {
      alert("Enter Correct city name!")
    }
    else{
      content.classList.remove("hidden")      
      bottom.classList.remove("hidden")      
    }
    var data = await response.json();
    
    console.log(data);
    document.querySelector('.tempr').innerHTML = Math.floor(data.main.temp)+ "℃";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.windHead').innerHTML = `${data.wind.speed}km/h`;
    document.querySelector('.humidHead').innerHTML =
     `${data.main.humidity}%`;


     if(data.weather[0].main === 'Clouds'){
        
      weatherImg.src = "img/images/clouds.png"
     }

     else if(data.weather[0].main === 'Clear'){
        weatherImg.src = "img/images/clear.png"
     }

     else if(data.weather[0].main === 'Rain'){
        
        weatherImg.src = "img/images/rain.png"
     }
     else if(data.weather[0].main === 'Drizzle'){
        
        weatherImg.src = "img/images/drizzle.png"
     }
     else if(data.weather[0].main === 'Mist'){
        
        weatherImg.src = "img/images/mist.png"
     }
     else if(data.weather[0].main === 'Snow'){
        
        weatherImg.src = "img/images/snow.png"
     }
}
search_btn.addEventListener('click',()=>{
   if(inputBar.value !== "")
   {
      checkWeather(inputBar.value)

   }
        inputBar.value = "";
      if(container.classList.contains("md:h-[30vh]"))
      {
         container.classList.remove("md:h-[30vh]")
         container.classList.add("md:h-[72vh]")

      }
        
      
      

})





