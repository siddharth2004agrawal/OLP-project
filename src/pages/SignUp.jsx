import '../styles/Registration.css';
import { Link } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
export function SignUp (){
    return (
        <div className="signup">
            <Navbar/>
            <div >
                <h1>Sign up with email</h1>
                <br></br>
                <Link to = "/dashboard" className='signup_link'>Continue</Link>
                <br></br>
                <p>Already have an account? <Link to = "/login" className='signup_link'>Log in</Link></p>
                
            </div>
            <Footer/>
        </div>
    )
}