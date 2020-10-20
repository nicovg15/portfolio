import React from 'react'
import '../css/Portfolio.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Porfolio() {
    return (
        <div className="portfolio">
            <div className="portfolio-top">
                <div className="portfolio-box">
                    <a href="https://izgong.github.io/RooFarm/#/" target="_blank"><h2>ROOFARM | HACHATHON <ArrowForwardIcon/></h2></a>
                    <img className="portfolio-img" src={require('../pics/roofarm2.png')} alt="roofarm"/>
                    <span>Web App project where you can receive information about roofs of <br/> different cities around the world, to install small farms on them.</span>
                </div>
                <div className="portfolio-box">
                    <a href="https://acsonsound-d4340.web.app/" target="_blank"><h2>ACSON SOUND E-COMMERCE <ArrowForwardIcon/></h2></a>
                    <img className="portfolio-img" src={require('../pics/acson.png')} alt="acson"/>
                    <span>E-commerce Web App for an electronic product sales business.</span>
                </div>
            </div>
            <div className="portfolio-middle">
                <div className="portfolio-box portfolio-box-netflix">
                    <a href="https://netflix-clone-4d9a6.web.app/" target="_blank"><h2>NETFLIX CLONE <ArrowForwardIcon/></h2></a>
                    <img className="portfolio-img" src={require('../pics/netflix.png')} alt="netflix clone"/>
                    <span>Front End Netflix clone</span>
                </div>
                <div className="portfolio-box">
                    <h2>MOBILE APP | COMMUNICATION</h2>
                    <img className="portfolio-img" src={require('../pics/hrf.png')} alt="mobileapp"/>
                    <span>Mobile App for communication between managers and <br/> employees in manufacturing companies</span>
                </div>
            </div>
            <div className="portfolio-box portfolio-bottom">
                <a href="https://worldweather-964bb.web.app/" target="_blank"><h2>WHEATHER APP <ArrowForwardIcon/></h2></a>
                <img className="portfolio-img" src={require('../pics/weather.png')} alt="weather"/>
                <span>Web App where you can check the weather of any country/city </span>
            </div>
        </div>
    )
}

export default Porfolio
