
const CardWeather = ({weather}) => {
    const { name, main: { temp }, weather: [ { description, icon } ] } = weather;

    return (
        <div>
            <h2>Weather in: {name}</h2>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="system icon"></img>
            <h3>{temp}°C</h3>
            <h4>{description}</h4>
        </div>
    )
}

export default CardWeather