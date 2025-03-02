import '../styles/RNavbarFooter.css';
import { Link } from "react-router-dom";
export function RegisteredFooter() {
    return (
        <div className="registeredfooter">
            <div className="registeredfooter_logo">
                <Link to = "/dashboard" className='registeredfooter_logo_link'>Learner's</Link>
            </div>
            <h3>Copyright@Learner's 2025</h3>
        </div>
    )
}