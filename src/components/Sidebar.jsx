import { Link } from "react-router";
import './Sidebar.css';
import ootd from '../assets/ootd.jpg';

export function Sidebar() {

    return (
        <nav className="nav">
            
            <div className="logo">
                <img src={ootd} />
            </div>
            <ul className="links">
                <li className="link">
                    <Link to="/">Profile</Link>
                </li>
                <li className="link">
                    <Link to="/closet">Closet</Link>
                </li>
                <li className="link">
                    <Link to="/outfit">Outfit</Link>
                </li>
                <li className="link">
                    <Link to="/calendar">Calendar</Link>
                </li>
                <li className="link">
                    <Link to="/add">Add</Link>
                </li>
            </ul>
        </nav>
    );
}