class weatherHtpp{
    constructor(){
        this.id = '3aba323acfad0c1198ba4acc191a8e04';
        this.city = localStorage.getItem('city');
        
    }

    async getWeather(city){
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.id}`)
        const weather = await weatherResponse.json();

        return{
            weather
        }

    }
}