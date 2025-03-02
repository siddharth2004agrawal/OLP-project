import '../styles/CoursesDashboard.css';
import { RegisteredNavbar } from '../components/RegisteredNavbar';
import { Footer } from '../components/Footer';
export function Dashboard (){
    return (
        <div className="dashboard">
            <RegisteredNavbar/>
            <div >
                <h1>Welcome User</h1>             
            </div>
            <Footer/>
        </div>
    )
}