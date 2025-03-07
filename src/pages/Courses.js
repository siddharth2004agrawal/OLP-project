import '../styles/CoursesDashboard.css';
import { Link } from "react-router-dom";
import { RegisteredNavbar } from '../components/RegisteredNavbar';
import { Footer } from '../components/Footer';
export function Courses (){
    return (
        <div className="courses">
            <RegisteredNavbar/>
            <div className='courses_heading'>
                <h1>Courses</h1>           
            </div>
            <div className='courses_row'>

                <div className='courses_row_col1'>
                    <Link to={`/video?url=https://www.youtube.com/embed/HcOc7P5BMi4`}>
                        <strong>HTML</strong>
                        <p>HTML (HyperText Markup Language) is the standard language for creating and structuring web pages using elements like headings, paragraphs, links, and images.</p>
                        <span>Start Now</span>
                    </Link>
                </div>

                <div className='courses_row_col2'>
                    <Link to={`/video?url=https://www.youtube.com/embed/ESnrn1kAD4E`}>
                        <strong>CSS</strong>
                        <p>CSS (Cascading Style Sheets) is used to style HTML elements, controlling layout, colors, fonts, and responsiveness.</p>
                        <span>Start Now</span>
                    </Link>
                </div>

                <div className='courses_row_col3'>
                    <Link to={`/video?url=https://www.youtube.com/embed/VlPiVmYuoqw`}>
                        <strong>JavaScript</strong>
                        <p>JavaScript adds interactivity and dynamic behavior to web pages.</p>
                        <span>Start Now</span>
                    </Link>
                </div>

                <div className='courses_row_col4'>
                    <Link to={`/video?url=https://www.youtube.com/embed/BGTx91t8q50`}>
                        <strong>Java</strong>
                        <p>Java is a versatile, object-oriented programming language used for web applications.</p>
                        <span>Start Now</span>
                    </Link>
                </div>

                <div className='courses_row_col5'>
                    <Link to={`/video?url=https://www.youtube.com/embed/-Fe0zk-F4OA`}>
                        <strong>Spring</strong>
                        <p>Spring simplifies enterprise application development.</p>
                        <span>Start Now</span>
                    </Link>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}