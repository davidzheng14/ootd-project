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
                    <i className="bx bx-user-circle" />
                    <Link to="/">Profile</Link>
                </li>
                <li className="link">
                    {/* <i className="bx bx-cupboard" /> */}
                    <i class="ph ph-dresser"></i>
                    <Link to="/closet">Closet</Link>
                </li>
                <li className="link">
                    <i class="ph ph-shirt-folded"></i>
                    <Link to="/outfit">Outfit</Link>
                </li>
                <li className="link">
                    <i class="ph ph-calendar-blank"></i>
                    <Link to="/calendar">Calendar</Link>
                </li>
                <li className="link">
                    <i class="ph ph-list-plus"></i>
                    <Link to="/add">Add</Link>
                </li>
            </ul>
        </nav>
    );
}