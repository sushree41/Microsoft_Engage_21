import React from 'react'
import img1 from "../../../images/Capture.JPG"
//design for the home page
function LandingPage() {
    return (
        <>
        <div className="app">
            <img src={img1} alt=""/>
            <span style={{ fontSize: '2rem' }}>Welcome</span>
        </div>
        <div style={{ float:'right' }}></div>
        </>
    )
}

export default LandingPage
