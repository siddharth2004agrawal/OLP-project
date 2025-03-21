import '../styles/Registration.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import bann2 from '../images/poster.png';
import bann3 from '../images/Ai.jpg';
import bann4 from '../images/power.jpg';
import bann5 from '../images/marketing.jpg';
import bann6 from '../images/cy.jpeg';
import bann7 from '../images/love.jpg';
import bann8 from '../images/harry.jpg';
import bann9 from '../images/aws.jpg';
import bann10 from '../images/ui.jpg';
export function LandingPage () {
    return (
        <div className="landingpage">
            <Navbar/>
            
               <div className="BannerContainer">
                <img src={bann2} alt="Banner image" />

                    <div className="BannerText">
                       <h1>A world of learning from ₹499</h1> 
                       <p>Expand your horizons with learning that’s worldwide. 
                        <br></br>Save now through March 20.</p>
                    </div>
                 </div>
        <div className="mid">
                <h2>All the skills you need in one place</h2>
                <p>From critical skills to technical topics, Team Learner's supports your professional development.</p>
        </div>

        <div className="content">

            <div className="subcontent">
            <img src={bann3} alt="Ai image" />
            <a href="https://youtu.be/NNG5zJTR6T0?si=K74dUSmgZdVY23oD" target="_blank" rel="noopener noreferrer">
                <h3>The Complete Al Guide: Learn ChatGPT, Generative Al & More </h3>
                <p> By: AI Foundation</p>
                </a>
            </div>

            <div className="subcontent">
            <img src={bann4} alt="powered image" />
            <a href="https://youtu.be/5BD0m-bWdBQ?si=UXTrfE3BbCNePh91" target="_blank" rel="noopener noreferrer">
            <h3>The Complete Al-Powered Copywriting Course & ChatGPT... </h3>
            <p> By: Tomas Moravek</p>
            </a>
            </div>

            <div className="subcontent">
            <img src={bann5} alt="marketing image" />
            <a href="https://youtu.be/Fhdm0eNpE4Q?si=GWZjKgLVi5H76_XQ " target="_blank" rel="noopener noreferrer">
                <h3>ChatGPT, DeepSeek, Grok and
                30+ More Al Marketing Assistants</h3>
                <p>By: Julian Goldie SEO </p>
                </a>
            </div>

            <div className="subcontent">
            <img src={bann6} alt="master image" />
            <a href="https://youtu.be/cKEf8H9cQGM?si=lGMzvcR2x7UqFjvO" target="_blank" rel="noopener noreferrer">
            <h3>Ethical Hacking Full Course for Beginners in 5 Hours - 2024 Edition</h3>
            <p>By: WsCube Cyber Security</p>
            </a>
            </div>
        </div>
        <div className="content">

            {/* <div className="subcontent">
                <Link to={`/video?url=https://www.youtube.com/embed/HcOc7P5BMi4`}>
                <img src={bann7} alt="PYTHON" />
                <h3>100 Days of Code: The Complete Python Pro Bootcamp</h3>
                <p> By: Code With Harry, Developer and Lead...</p>
                </Link>
            </div> */}

            <div className="subcontent">
  <a href="https://youtube.com/playlist?list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&si=Ru-R5ESdht841gDh " target="_blank" rel="noopener noreferrer">
    <img src={bann7} alt="love" />
    <h3>The Complete Full-Stack Web Development Bootcamp</h3>
    <p>By: Love Babbar, Developer and YouTuber</p>
  </a>
</div>


            <div className="subcontent">
            <img src={bann8} alt="JS" />
            <a href="https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&si=RuooqQy22oebc0Ea" target="_blank" rel="noopener noreferrer">
            <h3>Python for Beginners (Full Course) | #100DaysOfCode</h3>
            <p> By: Code with Harry, Google Developer & Mentor</p>
            </a>
            </div>

            <div className="subcontent">
            <img src={bann9} alt="AWS" />
            <a href="https://youtube.com/playlist?list=PLt1SIbA8guuvfvUDVLpJepmbnYpOfYCIB&si=V-S4LWcHYQd73M2f" target="_blank" rel="noopener noreferrer">
                <h3>[NEW] Ultimate AWS Certified
                Cloud Practitioner CLF-C02 2025</h3>
                <p>By: Stephane Maarek , AWS Developer</p>
                 </a>
            </div>

            <div className="subcontent">
            <img src={bann10} alt="cloud" />
            <a href="https://youtu.be/j6Ule7GXaRs?si=LjzSBvzDX39whqsn" target="_blank" rel="noopener noreferrer">
            <h3>Learn Web Design For Beginners - Full Course 2025</h3>
            <p>By: John Doe, Senior Flux Academy Mentor</p>
            </a>
            </div>
        </div>
        <div className="goal">
            <h1>Learning focused on your goals</h1>
            </div>
        <div className="Goals">
                <div className="box">
                    <h2>Hands-on training</h2>
                    <p>Upskill effectively with Al-powered coding exercises, practice tests, and quizzes.</p>
                </div>

                <div className="box">
                    <h2>Certification prep</h2>
                    <p>Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.</p>
                    <a href="#">Explore Courses 🡢</a>
                </div>

                <div className="box">
                    <h2>Insights and analytics</h2>
                    <p>Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.</p>
                    <a href="#">Find out more 🡢</a>
                </div>

                <div className="box">
                    <h2>Customizable content</h2>
                    <p>Create tailored learning paths for team and organization goals and even host your own content and resources.</p>
                    <a href="#">Find out more 🡢</a>
                </div>
        </div>
            <Footer/>
        </div>
    )
}