class UI {
    showTime(){
            
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('time').innerHTML =
            h + ":" + m + ":" + s;
            var t = setTimeout(ui.showTime, 500);
          
          function checkTime(i) {
            if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
            return i;
          }



    }

    showWeather(weather){
        const city = document.querySelector("#city");
        const condition = document.querySelector("#weather");
        const temp = document.querySelector("#temp");
        const humidity = document.querySelector("#humidity");
        const pressure = document.querySelector("#pressure");
        const forcast = document.querySelector("#forcast");
        const wind = document.querySelector("#wind");
        const weatherIcon = document.querySelector("#weatherIcon");


        let tempApi = weather.main.temp;
        tempApi = Math.round(tempApi - 273.15);

        city.innerHTML = weather.name+ ', ' + weather.sys.country;
        condition.innerHTML = weather.weather[0].description;
        temp.innerHTML = tempApi + '&#8451;';
        humidity.innerHTML = weather.main.humidity + "%";
        pressure.innerHTML = weather.main.pressure + ' hpa';
        wind.innerHTML = weather.wind.speed + ' m/s';
        forcast.innerHTML = weather.weather[0].main;
        weatherIcon.setAttribute('src',`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` ) ;


    }
}