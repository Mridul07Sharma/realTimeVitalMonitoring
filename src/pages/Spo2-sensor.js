import "./Spo2-sensor.css";
import Chart from "react-apexcharts";
import {format} from 'date-fns';
import { useEffect, useState } from "react";

const Spo2Sensor = () => {
    const [options, setOptions] = useState({});
    const [series, setSeries] = useState([]);
    const [presentValue, setPresentValue] = useState(0);

    useEffect(() => {
      fetch("https://api.thingspeak.com/channels/2365352/feeds.json").then((res) => res.json())
      .then((resJson) => {
        setOptions({
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: resJson.feeds.map((value) => { return ( format(new Date(value.created_at), 'p, dd/mm/yyyy') )})
          }
        });

        setSeries([{
          name: "Spo2",
          data: resJson.feeds.map(value => value.field1) 
        }]);

        setPresentValue(resJson.feeds[resJson.feeds.length - 1].field1);
      }).catch((error) => {
        console.log(error);
      });
    }, []);

    return (<>
    <div className="container">
        <div className="row">
            <h2 className="heading-Spo2-sensor text-center">Spo2 Sensor</h2>
            <p className="text-center Spo2-sensor-reading"> <b>Spo2 Sensor Reading: </b> {presentValue}.</p>
        </div>

        <div className="container">
        <Chart className="row d-flex justify-content-center" 
               options={options}
               series={series}
               type="line"
               width="90%" />
        </div>
    </div>
    </>)
}

export default Spo2Sensor;