import { FaWind } from 'react-icons/fa'
import { WiHumidity } from "react-icons/wi"

const CardWeather = ({ weather }) => {
    const { name, main: { feels_like, humidity, temp }, weather: [ { description, icon } ], wind: { speed } } = weather;

    return (
        <div className="cardWeather">
            <div className="weather-box">
                <div className="box">
                    <div className="info-weather">
                        <h2>Weather in: <br />{name}</h2>
                        <div className="weather">
                            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="system icon"></img>
                            <p className="temperature">{temp}<span>°C</span></p>
                            <p className="feels_like">Feels like: {feels_like}<span>°C</span></p>
                            <p className="description">{description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="weather-details">
                <div className="humidity">
                    <i className='bx bx-water'></i>
                    <WiHumidity className='icon '/>
                    <div className="text">
                        <div className="info-humidity">
                            <span>{humidity}%</span>
                        </div>
                        <p>Humidity</p>
                    </div>
                </div>

                <div className="wind">
                    <i className='bx bx-wind'></i>
                    <FaWind className='icon' />
                    <div className="text">
                        <div className="info-wind">
                            <span>{speed}Km/h</span>
                        </div>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardWeather