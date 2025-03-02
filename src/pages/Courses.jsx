import '../styles/CoursesDashboard.css';
import { RegisteredNavbar } from '../components/RegisteredNavbar';
import { RegisteredFooter } from '../components/RegisteredFooter';
export function Courses (){
    return (
        <div className="courses">
            <RegisteredNavbar/>
            <div >
                <h1>Courses</h1>           
            </div>
            <RegisteredFooter/>
        </div>
    )
}