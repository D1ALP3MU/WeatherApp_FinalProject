import { useState } from "react";

const apiKey = '80b626b94dc8c81bfd23911396d4e3dd'

//FUNCIÓN PARA OBTENER EL PRONÓSTICO DEL CLIMA A 5 DÍAS CADA 3 HORAS
const useForecast = (initialState) => {
    const [forecast, setForecast] = useState(initialState)

    const getForecast = (city) => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
            .then( response => response.json() )
            .then( data => setForecast(data) )
            .catch( error => console.log(error) )
    }


    return [forecast, getForecast]
}

export default useForecast