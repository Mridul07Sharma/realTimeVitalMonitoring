import { useState, useEffect } from "react";
import "./tempsensor.css";

const TempSensor = () => {
    const [tempReading, setTempReading] = useState(0);

    useEffect(() => {
        // Call to backend to update temp;
        setTempReading(101);
    }, []);

    return (<>
    <div className="container">
        <div className="row">
            <h2 className="heading-temp-sensor text-center">Temp Sensor</h2>
            <p className="text-center temp-reading"> <b>Temp Reading: </b> {tempReading} degree.</p>
        </div>
        
        { tempReading > 0 ? <>
            <div className="text-center row temp-detail-indicator">
                {tempReading > 0 && tempReading <= 98.6 ? <p className="temp-type-text normal">Normal Temperature</p> : <></>}
                {tempReading > 98.6 && tempReading <= 104 ? <p className="temp-type-text moderate">Moderate Fever</p>: <></>}
                {tempReading > 104 ? <p className="temp-type-text high">High Fever</p>: <></>}
            </div>
        </> : <></>}
    </div>
    </>)
}

export default TempSensor;