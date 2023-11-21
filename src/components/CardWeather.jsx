
const CardWeather = ({weather}) => {
    const { name, main: { temp }, weather: [ { description } ] } = weather;
    
    return (
        <div>
            <h2>Weather in: {name}</h2>
            <h3>{temp}°C</h3>
            <h4>{description}</h4>
        </div>
    )
}

export default CardWeather