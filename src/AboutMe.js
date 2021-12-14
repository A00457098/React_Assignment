import React from 'react';
import ProfileImage from './avatar.png';
import './AboutMe.css'
export const AboutMe = () =>{
    return(
        <div className="">
            <img src={ProfileImage} className="ProfileImg"/>
            <div className="textSection">
                <span className="Name">Hi, I'm Radhika</span><br/>  
                <p className="Desc">I am a graduate student in Saint Mary's University, Halifax pursuing MCDA</p>
            </div>
            <div className="mcdaSection">
                <span className="course">Why MCDA Course?</span><br/>
                <p className="Desc">I joined MCDA course because I have great interest in Analytics and like to play with data. </p>
            </div>
        </div>
    )
}