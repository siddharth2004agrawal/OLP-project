import '../styles/CoursesDashboard.css';
import { RegisteredNavbar } from '../components/RegisteredNavbar';
import { Footer } from '../components/Footer';
export function Video (){
    return (
        <div className="video">
            <RegisteredNavbar/>
            <iframe 
            src={new URLSearchParams(window.location.search).get("url")} 
            title="Course Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
            <Footer/>
        </div>
    )
}