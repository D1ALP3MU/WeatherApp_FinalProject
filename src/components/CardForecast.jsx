
const CardForecast = ({forecast, initialValue, finalValue}) => {

    return (
        <>
            <div className='card'>
                {forecast.list.slice(initialValue, finalValue).map((item, index) => (
                    <div key={index} className='inner'> 
                        <h3>{item.dt_txt}</h3>
                        <h4>{item.main.temp}°C</h4>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CardForecast