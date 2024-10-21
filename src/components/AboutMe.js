// src/components/AboutMe.js

import React from 'react';
import { aboutMeData } from '../data/data';
import './AboutMe.css'; // Import the CSS for styling

const AboutMe = () => {
    return (
        <section id="about-me">
            <h2>About Me</h2>
            <img src={aboutMeData.photo} alt="My Profile" />
            <p>{aboutMeData.bio}</p>
        </section>
    );
};

export default AboutMe;
