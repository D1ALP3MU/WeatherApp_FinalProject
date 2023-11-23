import { WiHumidity } from "react-icons/wi"

const CardForecast = ({ forecast, initialValue, finalValue }) => {
    // const {} = forecast;

    return (
        <>
            <div className='cardForecast'>
                {forecast.list.slice(initialValue, finalValue).map((item, index) => (
                    <div key={index} className='inner'>
                        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="system icon"></img>
                        <h3>{item.dt_txt}</h3>
                        {/* <br /> */}
                        <div className="forecast-details">
                            <h4>{item.main.temp}°C</h4> 
                            <p>Feels like: {item.main.feels_like}°C</p>
                            <h3>{item.weather[0].description}</h3>
                        </div>
                        {/* <br /> */}
                        <div className="box-humidity-wind">
                            <p>Humidity: {item.main.humidity}<span><WiHumidity /></span></p>
                            <p>Wind speed: {item.wind.speed}Km/h</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CardForecast