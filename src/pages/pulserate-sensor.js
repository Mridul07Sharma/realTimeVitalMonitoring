import "./pulserate-sensor.css";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import {format} from 'date-fns';

const PulserateSensor = () => {
    const [options, setOptions] = useState({});
    const [series, setSeries] = useState([]);
    const [presentValue, setPresentValue] = useState(0);

    function Callbackend() {
      fetch("https://api.thingspeak.com/channels/2548558/feeds.json").then((res) => res.json())
      .then((resJson) => {
        setOptions({
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: resJson.feeds.map((value) => { return ( format(new Date(value.created_at), 'p, dd/MM/yyyy') )})
          }
        });

        setSeries([{
          name: "BPM",
          data: resJson.feeds.map(value => value.field1) 
        }]);

        setPresentValue(resJson.feeds[resJson.feeds.length - 1].field1);
      }).catch((error) => {
        console.log(error);
      });
    }

    useEffect(() => {
      Callbackend();
      let loop = setInterval(() => Callbackend(), 2000);
      
      return () => {
        clearInterval(loop);
      }
    }, []);

    return (<>
    <div className="container">
        <div className="row">
            <h2 className="heading-pulserate-sensor text-center">Pulserate Sensor</h2>
            <p className="text-center pulserate-sensor-reading"> <b>Pulserate Sensor Reading: </b> {presentValue}.</p>
        </div>

        <div className="">
        <Chart className="" 
               options={options}
               series={series}
               type="line"
               width="100%" />
        </div>
    </div>
    </>)
}

export default PulserateSensor;