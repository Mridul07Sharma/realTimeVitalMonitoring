import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
    return(<>
        <ul className="header">
            <li><Link className="header-link" to="/">Home</Link></li>
            <li><Link className="header-link" to="/tempsensor">Temp sensor</Link></li>
            <li><Link className="header-link" to="/pulserate-sensor">Pulse Rate Sensor</Link></li>
            <li><Link className="header-link" to="/Spo2-sensor">Spo2 Sensor</Link></li>
        </ul>
    </>)
}

export default Header;