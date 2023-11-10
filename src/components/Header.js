import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
    return(<>
        <ul className="header">
            <li><Link className="header-link" to="/tempsensor">Temp sensor</Link></li>
            <li><Link className="header-link" to="/sensor2">Sensor 2</Link></li>
            <li><Link className="header-link" to="/sensor3">Sensor 3</Link></li>
        </ul>
    </>)
}

export default Header;