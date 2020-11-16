import React from 'react'
import '../css/HomeLeft.css'
import {Link} from 'react-router-dom'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LanguageIcon from '@material-ui/icons/Language';
import Fade from 'react-reveal/Fade';

function HomeLeft() {
    return (
        <div className="homeLeft">
            <div className="homeLeft-box">
                <Fade left cascade>
                    <div className="homeLeft-h1">
                        <h1>Hi I'm Nico,</h1>
                        <h1>I am a Full Stack Developer</h1>
                    </div>
                </Fade>
                <div className="homeLeft-icon">
                    <a target="_blank" href="https://www.linkedin.com/in/nicolas-videla-27941272/">
                        <LinkedInIcon className="homeLeft-linkedin"/>
                    </a>
                    <a target="_blank" href="https://github.com/nicovg15/">
                        <GitHubIcon className="homeLeft-github"/>
                    </a>
                    <Link to="/portfolio">
                        <LanguageIcon className="homeLeft-portfolio"/>
                    </Link>
                    <Link to="/cv">
                        <ListAltIcon className="homeLeft-cv"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeLeft
