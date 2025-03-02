import '../styles/CoursesDashboard.css';
import { RegisteredNavbar } from '../components/RegisteredNavbar';
import { RegisteredFooter } from '../components/RegisteredFooter';
export function Courses (){
    return (
        <div className="courses">
            <RegisteredNavbar/>
            <div className='courses_heading'>
                <h1>Courses</h1>           
            </div>
            <div className='courses_row'>

                <div className='courses_row_col1'>
                    <a href='https://www.youtube.com/watch?v=HcOc7P5BMi4' target='_blank' rel="noopener noreferrer">
                    <strong>HTML</strong>
                    <p>HTML (HyperText Markup Language) is the standard language for creating and structuring web pages using elements like headings, paragraphs, links, and images.</p>
                    <span>Start Now</span>
                    </a>
                </div>

                <div className='courses_row_col2'>
                    <a href='https://www.youtube.com/watch?v=ESnrn1kAD4E' target='_blank' rel="noopener noreferrer">
                    <strong>CSS</strong>
                    <p>CSS (Cascading Style Sheets) is used to style HTML elements, controlling layout, colors, fonts, and responsiveness.</p>
                    <span>Start Now</span>
                    </a>
                </div>

                <div className='courses_row_col3'>
                    <a href='https://www.youtube.com/watch?v=VlPiVmYuoqw' target='_blank' rel="noopener noreferrer">
                    <strong>JavaScript</strong>
                    <p>JavaScript is a scripting language that adds interactivity and dynamic behavior to web pages.</p>
                    <span>Start Now</span>
                    </a>
                </div>

                <div className='courses_row_col4'>
                    <a href='https://www.youtube.com/watch?v=BGTx91t8q50&t=10733s' target='_blank'rel="noopener noreferrer">
                    <strong>Java</strong>
                    <p>Java is a versatile, object-oriented programming language used for web, mobile, and enterprise applications.</p>
                    <span>Start Now</span>
                    </a>
                </div>

                <div className='courses_row_col5'>
                    <a href='https://www.youtube.com/watch?v=-Fe0zk-F4OA' target='_blank' rel="noopener noreferrer">
                    <strong>Spring</strong>
                    <p>Spring is a Java framework that simplifies enterprise application development with features like dependency injection and MVC.</p>
                    <span>Start Now</span>
                    </a>
                </div>
                
            </div>
            <RegisteredFooter/>
        </div>
    )
}