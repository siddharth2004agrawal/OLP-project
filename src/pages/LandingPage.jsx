import '../styles/Registration.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
export function LandingPage () {
    return (
        <div className="landingpage">
            <Navbar/>
            <div >
                <h1>Hello!
                <br></br>This is a Online Learning Platform, 
                </h1>
            </div>
            <Footer/>
        </div>
    )
}