
 console.log(localStorage.date!= null &&  parseInt(localStorage.date) +10000 > Date.now());
 if(localStorage.date!= null &&  parseInt(localStorage.date) +10000 > Date.now())
 {
  document.querySelector(".date").innerText =new Date(parseInt(localStorage.date)).toLocaleDateString("en-uk", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
   document.querySelector(".city").innerText = localStorage.cityName;
   document.querySelector(".temp").innerText = localStorage.Temperature;
   document.querySelector(".pressure").innerText = "Pressure: " + localStorage.pressure + " hPa";
   document.querySelector(".wind").innerText = "Wind Speed: " + localStorage.windSpeed + " m/s " +localStorage.windDirection+" deg";
   document.querySelector(".humidity").innerText = "Humidity: " + localStorage.humidity + " %";
   document.querySelector(".desc").innerText = localStorage.description;
   document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + localStorage.icon + ".png";
 }

else{

const weather = fetch("http://localhost/api.php");
console.log(weather);
weather
  .then((response) => {
    return response.json();
  })
  .then((obj) => {
      console.log(obj);
      localStorage.clear();
      localStorage.setItem("cityName",obj.cityName);
      localStorage.setItem("Temperature",parseInt(obj.temperature));
      localStorage.setItem("humidity",obj.humidity);
      localStorage.setItem("pressure",obj.pressure);
      localStorage.setItem("windSpeed",obj.windSpeed);
      localStorage.setItem("description",obj.weather);
      localStorage.setItem("windDirection",obj.windDirection);
      localStorage.setItem("icon",obj.icon);
      localStorage.setItem("date", Date.now());
      document.querySelector(".date").innerText =new Date(parseInt(localStorage.date)).toLocaleDateString("en-uk", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    document.querySelector(".city").innerText = localStorage.cityName;
    document.querySelector(".temp").innerText = localStorage.Temperature;
    document.querySelector(".pressure").innerText = "Pressure: " + localStorage.pressure + " hPa";
    document.querySelector(".wind").innerText = "Wind Speed: " + localStorage.windSpeed + " m/s " +localStorage.windDirection+" deg";
    document.querySelector(".humidity").innerText = "Humidity: " + localStorage.humidity + " %";
    document.querySelector(".desc").innerText = localStorage.description;
    document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + localStorage.icon + ".png";
  })};
  let celcius = document.querySelector(".celcius");
  let farenheit = document.querySelector(".farenheit");

  celcius.addEventListener("click", () => {
    document.querySelector(".temp").innerText = localStorage.Temperature;
    document.querySelector(".celcius").style.color = "black";
    document.querySelector(".farenheit").style.color = "#70757a";
  });
  farenheit.addEventListener("click", () => {
    let farenheit = (localStorage.Temperature * 9) / 5 + 32;
    let intfarenheit = parseInt(farenheit);
    document.querySelector(".temp").innerText = intfarenheit;
    document.querySelector(".farenheit").style.color = "black";
    document.querySelector(".celcius").style.color = "#70757a";
  });

