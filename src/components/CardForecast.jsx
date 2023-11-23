
const CardForecast = ({ forecast, initialValue, finalValue }) => {
    // const {} = forecast;

    return (
        <>
            <div className='cardForecast'>
                {forecast.list.slice(initialValue, finalValue).map((item, index) => (
                    <div key={index} className='inner'>
                        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="system icon"></img>
                        <h3>{item.dt_txt}</h3>
                        <h4>{item.main.temp}°C</h4>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CardForecast