// init weather class
const weather = new weatherHtpp();
const ui = new UI();

document.addEventListener("DOMContentLoaded",() =>{
    ui.showTime();
    showWeather();
})

document.querySelector(".modalSubmit").addEventListener('click', ()=>{
    const city = document.querySelector("#cityValue").value;
    console.log(2);
    localStorage.setItem('city', city);
    
})

function showWeather(){
   
weather.getWeather(city)
.then(data =>{
    console.log(data.weather);
    ui.showWeather(data.weather);
    
})
}