import '../styles/CoursesDashboard.css';
import { RegisteredNavbar } from '../components/RegisteredNavbar';
import { RegisteredFooter } from '../components/RegisteredFooter';
export function Dashboard (){
    return (
        <div className="dashboard">
            <RegisteredNavbar/>
            <div >
                <h1>Welcome User</h1>             
            </div>
            <RegisteredFooter/>
        </div>
    )
}