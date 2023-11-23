import { useState } from 'react'
import { Map, Marker } from "pigeon-maps";


const GeolocationMap = ({ weather }) => {
    const [hue, setHue] = useState(0)
    const color = `hsl(${hue % 360}deg 39% 70%)`

    const { coord: { lon, lat } } = weather;
    // console.log(weather);

    return (
        <Map width={500} height={300} defaultCenter={[lat, lon]} defaultZoom={11}>
            <Marker 
                width={50}
                anchor={[lat, lon]} 
                color={color} 
                onClick={() => setHue(hue + 20)} 
            />
            <Marker 
                width={50}
                anchor={[lat, lon]} 
                color={color} 
                onClick={() => setHue(hue + 20)} 
            >
                {/* <CustomIcon /> */}
            </Marker>
        </Map>
    );
}

export default GeolocationMap