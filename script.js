        const getWeather = () => {
    const city = document.getElementById('city').value;
    alert(city);

    axios.get(`https://api.weatherapi.com/v1/current.json?key=bad2376a81d5489a88982043261204&q=${city}&aqi=no`)
  .then(function (response) {
    console.log(response);
    document.getElementById("mm").innerHTML = `today temp is ${response.data.current.temp_c}`;
  })
  .catch(function (error) {
    console.error(error);
})
}