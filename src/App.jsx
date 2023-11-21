import { useState, useEffect } from 'react'
import './App.css'

// Componentizar la aplicación (por ejemplo un componente para las tarjetas del pronóstico)
// Agregar estilos con cualquier método (css, styled components, o frameworks tailwind, chakra, etc)
// Sacar la lógica de las consultas a las api a un archivo aparte como helpers o customHooks
// La idea es hacer la aplicación mas escalable y mantenible, que sea fácil de agregar nuevas funcionalidades, que se fácil de leer y entender y más bonita

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const apiKey = '80b626b94dc8c81bfd23911396d4e3dd'

  //FUNCION PARA OBTENER EL CLIMA ACTUAL
  const getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((error) => console.log(error))
  }

  //FUNCIÓN PARA OBTENER EL PRONÓSTICO DEL CLIMA A 5 DÍAS CADA 3 HORAS
  const getForecast = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
      .then((response) => response.json())
      .then((data) => setForecast(data))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    if (city) {
      getForecast()
    }
  }, [city])

  return (
    <div>
      <h1>My Weather App</h1>
      <div>
        <input 
          type="text" 
          placeholder='Enter city name'
          onBlur={(event) => setCity(event.target.value)} //onBlur es un evento que se ejecuta cuando el usuario sale del input
        />
        <button
          onClick={getWeather}
        >
          Search
        </button>
        {weather && (
          <div>
            <h2>Weather in: {weather.name}</h2>
            <h3>{weather.main.temp}°C</h3>
            <h4>{weather.weather[0].description}</h4>
          </div>
        )}
        <hr />
        <div>
          {forecast && (
            <>
              <h2>Forecast</h2>
              <div className='container'>
                <div className='card'>
                  {forecast.list.slice(0, 8).map((item, index) => (
                    <div key={index} className='inner'> 
                      <h3>{item.dt_txt}</h3>
                      <h4>{item.main.temp}°C</h4>
                    </div>
                  ))}
                </div>
                <div className='card'>
                  {forecast.list.slice(8, 16).map((item, index) => (
                    <div key={index} className='inner'> 
                      <h3>{item.dt_txt}</h3>
                      <h4>{item.main.temp}°C</h4>
                    </div>
                  ))}
                </div>
                <div className='card'>
                  {forecast.list.slice(16, 24).map((item, index) => (
                    <div key={index} className='inner'> 
                      <h3>{item.dt_txt}</h3>
                      <h4>{item.main.temp}°C</h4>
                    </div>
                  ))}
                </div>
                <div className='card'>
                  {forecast.list.slice(24, 32).map((item, index) => (
                    <div key={index} className='inner'> 
                      <h3>{item.dt_txt}</h3>
                      <h4>{item.main.temp}°C</h4>
                    </div>
                  ))}
                </div>
                <div className='card'>
                  {forecast.list.slice(32, 40).map((item, index) => (
                    <div key={index} className='inner'> 
                      <h3>{item.dt_txt}</h3>
                      <h4>{item.main.temp}°C</h4>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
