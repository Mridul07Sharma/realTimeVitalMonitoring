import "./sensor3.css";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";

const Sensor3 = () => {
    const [options, setOptions] = useState({});

    const [series, setSeries] = useState([]);


    useEffect(() => {
        setOptions({
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000]
            }
        });
        
        setSeries([
            {
              name: "series 1",
              data: [30, 40, 45, 50, 49, 60, 70, 91, 100]
            },
            {
                name: "series 2",
                data: [50, 60, 95, 20, 19, 40, 20, 11]
              }
          ]);
    }, []);

    return (<>
    <div className="container">
        <div className="row">
            <h2 className="heading-sensor3-sensor text-center">Sensor 3</h2>
            <p className="text-center sensor3-reading"> <b>Sensor 3 Reading: </b> xyz degree.</p>
        </div>

        <Chart className="row d-flex justify-content-center" 
               options={options}
               series={series}
               type="line"
               width="800" />
    </div>
    </>)
}

export default Sensor3;