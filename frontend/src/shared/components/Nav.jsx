import { Link } from "react-router-dom";


export default function NavBar(){
    return (
        <div className = "Nav">
            <ul className = "NavLink">
                <li><Link to="/" id = "TestHome">TestHome</Link></li>
                <li><Link to="LeaseInput">LeaseInput</Link></li>
                <li><Link to="TestAbout">TestAbout</Link></li>

            </ul>
        </div>
    );
}
