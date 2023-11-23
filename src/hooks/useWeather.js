import { useState } from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const useWeather = (initialState) => {
    const [weather, setWeather] = useState(initialState)
    
    const apiKey = '80b626b94dc8c81bfd23911396d4e3dd'
    
    const getWeather = async (city) => {
        if (city === '') {
            // console.log('Please write a city to fetch');
            MySwal.fire({
                title: "Please write a city to fetch",
                width: 500,
            });
            return;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

        try {
            const response = await fetch(url)
            const data = await response.json()
            
            if (data.cod === '404') {
                MySwal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "There was an error in the search, you must enter a correct city.",
                    width: 400,
                });
                return
            }
            console.log(weather);
            if (city === data.name) {
                return  
            } else {
                setWeather(data)
            }

        } catch (error) {
            alert(error)    
        }
    }
    return [weather, getWeather]
}

export default useWeather

// const apiKey = '80b626b94dc8c81bfd23911396d4e3dd'

// //FUNCION PARA OBTENER EL CLIMA ACTUAL
// const useWeather = (initialState) => {
//     const [weather, setWeather] = useState(initialState)

//     const getWeather = (city) => {
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
//             .then( response => response.json())
//             .then( data => setWeather(data) )
//             .catch( error => console.log(error) )
//     }
//     return [weather, getWeather]
// }