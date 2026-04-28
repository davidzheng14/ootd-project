import { Link } from "react-router";
import './Sidebar.css';
import ootd from '../assets/ootd.jpg';

export function Sidebar() {

    // <Link to="/">OOTD </Link>

    return (
        <nav className="nav">
            {/* <div className="tab">
                <Link to="/">Go to Home</Link>
            </div>

            <div className="tab">
                <Link to="/closet">Go to Closet</Link>
            </div>

            <div className="tab">
                <Link to="/outfit">Go to Outfit</Link>
            </div>

            <div className="tab">
                <Link to="/calendar">Go to Calendar</Link>
            </div>

            <div className="tab">
                <Link to="/add">Go to Add</Link>
            </div> */}
            <div className="logo">
                <img src={ootd} />
            </div>
            <ul>
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