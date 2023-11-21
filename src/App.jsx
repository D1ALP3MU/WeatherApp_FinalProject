import { useState, useEffect } from 'react'
import useWeather from './hooks/useWeather'
import useForecast from './hooks/useForecast'
import CardForecast from './components/CardForecast'
import CardWeather from './components/CardWeather'
import './App.css'

// Componentizar la aplicación (por ejemplo un componente para las tarjetas del pronóstico)
// Agregar estilos con cualquier método (css, styled components, o frameworks tailwind, chakra, etc)
// Sacar la lógica de las consultas a las api a un archivo aparte como helpers o customHooks
// La idea es hacer la aplicación mas escalable y mantenible, que sea fácil de agregar nuevas funcionalidades, que se fácil de leer y entender y más bonita

function App() {
  const [city, setCity] = useState('')
  const [weather, getWeather] = useWeather(null)
  const [forecast, getForecast] = useForecast(null)

  useEffect(() => {
    if (city) {
      getForecast(city)
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
          onClick={() => getWeather(city)}
        >
          Search
        </button>
        {weather && (
          <CardWeather weather={weather} />
        )}
        <hr />
        <div>
          {forecast && (
            <>
              <h2>Forecast</h2>
              <div className='container'>
                <CardForecast forecast={forecast} initialValue={0} finalValue={8} />
                <CardForecast forecast={forecast} initialValue={8} finalValue={16} />
                <CardForecast forecast={forecast} initialValue={16} finalValue={24} />
                <CardForecast forecast={forecast} initialValue={24} finalValue={32} />
                <CardForecast forecast={forecast} initialValue={32} finalValue={40} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default App