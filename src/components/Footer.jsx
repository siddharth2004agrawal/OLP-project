import '../styles/NotRNavbarFooter.css';
import { Link } from "react-router-dom";
export function Footer () {
    return (
        <div className="footer">
            <div className="logo">
            <Link to = "/" className='logo_link'>Learner's</Link></div>
            <h3>Copyright@Learner's 2025</h3>
        </div>
    )
}