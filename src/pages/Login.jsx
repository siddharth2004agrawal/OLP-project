import '../styles/Registration.css';
import { Link } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
export function Login (){
    return (
        <div className="login">
            <Navbar/>
            <div >
                <h1>Login with email</h1>
                <br></br>
                <Link to = "/dashboard" className='signup_link'>Continue</Link>
                <br></br>
                <p>Don't have an account? <Link to = "/signup" className='login_link'>Sign up</Link></p>
            </div>
            <Footer/>
        </div>
    )
}