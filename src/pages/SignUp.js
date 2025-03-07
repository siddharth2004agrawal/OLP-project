import '../styles/Registration.css';
import { Link } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import bann1 from '../images/img1..jpeg';

export function SignUp() {
    return (
        <div className="signup">
            <Navbar />
            <div className="signup_body">
                <div className="signup_body_leftside">
                    <h1>Sign up to continue<br/>your learning journey</h1>
                        <form className="signup_form1">
                            <input type="text" placeholder='Full Name' required />
                            <input type="email" placeholder='Email' required />
                        </form>
                        <form className="signup_form2">
                            <input type="password" placeholder='Password' required />
                            <input type="password" placeholder='Confirmed Password' required />
                        </form>
                        <Link to = "/dashboard" className='signup_link'>Create Account</Link>
                    <p>By signing up, you agree to our <Link to="">Terms of Use</Link> and <Link to="">Privacy Policy.</Link></p>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
                <img src={bann1} alt="study" />
            </div>
            <Footer />
        </div>
    )
}