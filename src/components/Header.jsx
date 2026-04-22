import { Link } from "react-router";

export function Header() {

    // <Link to="/">OOTD </Link>

    return (
        <>
            <div>
                <Link to="/">Go to HomePage</Link>
            </div>

            <div>
                <Link to="/closet">Go to Closet</Link>
            </div>

            <div>
                <Link to="/outfit">Go to Outfit</Link>
            </div>

            <div>
                <Link to="/calendar">Go to Calendar</Link>
            </div>
            
            <div>
                <Link to="/add">Go to Add</Link>
            </div>


        </>
    );
}