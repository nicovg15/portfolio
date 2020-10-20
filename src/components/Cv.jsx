import React from 'react'
import '../css/Cv.css'
import RemoveIcon from '@material-ui/icons/Remove';
function Cv() {
    return (
        <div className="cv">
            <div>
                <div className="cv-projects">
                    <div className="cv-title">
                        <RemoveIcon />
                        <h3>Projects</h3>
                    </div>
                    <div className="cv-projects-main">
                        <h4>ROOFARM | HACKATHON | 2020</h4>
                        <span>Web app project where you can receive information about roofs of different cities around the world, to install small farms on them.</span>
                        <ul>
                            <li>UX/UI Design</li>
                            <li>Front End Developer (React.js, Hooks, Material UI, Responsive)</li>
                            <li>Used S.O.L.I.D Method to work on a team project</li>
                        </ul>
                    </div>
                    <div className="cv-projects-main">
                        <h4>ACSON SOUND | 2020</h4>
                        <span>Web app e-commerce for an electronic product sales business.</span>
                        <ul>
                            <li>Front End (React.js, Hooks, Context, Reducer, CSS, Responsive)</li>
                            <li>Back End (Node,js, MongoDB, Firebase, Authentication)</li>
                        </ul>
                    </div>
                </div>
                <div className="cv-skills">
                    <div className="cv-title">
                        <RemoveIcon />
                        <h3>Computer skills</h3>
                    </div>
                    <ul>
                        <li>React.js | React Native | Node.js | MongoDB | Firebase | Bootstrap | Material UI</li>
                        <li>Basic skills: Python | Flask | Pandas | JupyterLab</li>
                    </ul>
                </div>
                <div className="cv-education">
                    <div className="cv-title">
                        <RemoveIcon />
                        <h3>Education</h3>
                    </div>
                    <div className="cv-education-main">
                        <h4>ISRAEL TECH CHALLENGE CODING BOOTCAMP | 2020</h4>
                        <p>A unique training course designed to transform hand-picked young professionals into qualified full-stack software developers. The program encourages research and self-led learning, as well as teamwork, all while incorporating the industry's best practices.</p>
                    </div>
                </div> 
                <div className="cv-experience">
                    <div className="cv-title">
                        <RemoveIcon />
                        <h3>Experience</h3>
                    </div>
                    <div className="cv-experience-main">
                        <h4>SOCIAL MEDIA & CONTENT CREATOR INTERNSHIP | 365 SCORES - 2019</h4>
                        <ul>
                            <li>Manage social media</li>
                            <li>Creation & edition of Image & content</li>
                            <li>Update app's news</li>
                            <li>Trends research</li>
                        </ul>
                    </div>
                    <div className="cv-experience-main">
                        <h4>MARKETING ASSISTANT IMANAGING | 2013 - 2018</h4>
                        <ul>
                            <li>Infrastructure assistant and event organization (location, production, suppliers contacting, on site support).</li>
                            <li>Database preparation and marketing pieces production.</li>
                            <li>Events advertising and products sale.</li>
                            <li>Administrative tasks</li>
                        </ul>
                    </div>
                </div> 
                <div className="cv-language">
                    <div className="cv-title">
                        <RemoveIcon />
                        <h3>Language</h3>
                    </div>
                    <div>
                        <h5>Spanish - Native speaker</h5>
                        <h5>English - Fluent</h5>
                        <h5>Hebrew - Ulpan</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cv
