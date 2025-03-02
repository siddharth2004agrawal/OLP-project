import '../styles/NotRNavbarFooter.css';
import { Link } from 'react-router-dom';
export function Navbar () {
    return (
        <div className="navbar">
            <div className="navbar_logo">
                <Link to = "/" className='navbar_logo_link'>Learner's</Link>
            </div>
            <div className="navbar_menu">
                <Link to = "/signup" className='navbar_menu_signup_link'>Sign-Up</Link>
                <Link to = "/login" className='navbar_menu_login_link'>Login</Link>
            </div>
        </div>
    )

}