import '../styles/Registration.css';
import { Link } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import bann1 from '../images/img1..jpeg';

export function Login() {
    return (
        <div className="login">
            <Navbar />
            <div className="wrap2">
                <div className="wrap1">
                    <h1>Log in to continue<br />your learning journey</h1>
                    <form className="form">
                        <input type="email" placeholder='Email' required />
                        <input type="password" placeholder='Password' required />
                    </form>
                    <Link to = "/dashboard" className='signup_link'>Continue with email</Link>
                    <div className="link">
                    <Link to="/signup" className='login_link'>Login with your organization</Link>
                    <p>Don't have an account? <Link to="/signup" className='login_link'>Sign up</Link></p>
                    </div>
                </div>
                <img src={bann1} alt="study" />
            </div>
            <Footer />
        </div>
    )
}