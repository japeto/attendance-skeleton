import './styles.css';

import {  Link } from "react-router-dom";

const Navbar= () =>{
    return(
        <header className="header">
            <div className="logo">
                <Link to="/">Attendance</Link>
            </div>
        <div className="navbar">
            <div>
                <li>
                <Link to="/students">students</Link>
                </li>
                <li>
                <Link to="/admin">admin</Link>
                </li>
                <li>
                <Link to="/staff">staff</Link>
                </li>
                <li>
                <Link to="/course">course</Link>
                </li>
                <li>
                <Link to="/question">question</Link>
                </li>
            </div>
        </div>
        <div className="account">
            <Link to="/account">Attendance</Link>
        </div>
        </header>
    );
}
export default Navbar;