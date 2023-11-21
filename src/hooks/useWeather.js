import { useState } from "react"

const apiKey = '80b626b94dc8c81bfd23911396d4e3dd'

//FUNCION PARA OBTENER EL CLIMA ACTUAL
const useWeather = (initialState) => {
    const [weather, setWeather] = useState(initialState)

    const getWeather = (city) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then( response => response.json())
            .then( data => setWeather(data) )
            .catch( error => console.log(error) )
    }


    return [weather, getWeather]
}

export default useWeather