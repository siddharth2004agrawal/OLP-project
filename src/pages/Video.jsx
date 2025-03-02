import '../styles/CoursesDashboard.css';
//import { Link } from "react-router-dom";
import { RegisteredNavbar } from '../components/RegisteredNavbar';
import { RegisteredFooter } from '../components/RegisteredFooter';
export function Video (){
    return (
        <div className="video">
            <RegisteredNavbar/>
            <RegisteredFooter/>
        </div>
    )
}