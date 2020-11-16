import React from 'react'
import '../css/Home.css'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'
import Footer from './Footer'

function Home() {
    return (
        <div className="home">
                <div className="home-top">
                <HomeLeft />
                <HomeRight/>
            </div>
            <div className="home-footer">
                <Footer />
            </div>
            </div>
    )
}

export default Home
