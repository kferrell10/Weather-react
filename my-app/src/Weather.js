import React from "react";
import axios from 'axios';
import Loader from "react-loader-spinner";

export default function Weather(props) {
    function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}˚C`)
    }

    let apiKey = "f3711ec096b8e2b5d745c777afc03d71";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  
    axios.get(apiUrl).then(handleResponse);
    return <Loader
        type="Puff"
        color="#a0a0a0"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />;
}