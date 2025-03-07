import '../styles/RNavbarFooter.css';
import { Link } from 'react-router-dom';
export function RegisteredNavbar () {
    return (
        <div className="registerednavbar">
            <div className="registerednavbar_logo">
                <Link to = "/dashboard" className='registerednavbar_logo_link'>Learner's</Link>
            </div>
            <div className="registerednavbar_menu">
                <Link to = "/" className='registeredfooter_logout_link'>Log out</Link>
                <Link to = "/courses" className='registerednavbar_menu_courses_link'>Courses</Link>
            </div>
        </div>
    )

}