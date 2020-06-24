import React from 'react';

import '../Style/About.css';
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";


export default function About() {

    return (
        <section className='about-section' id='about'>
            <div className='about-container'>
                <div className="about-css">
                    <h1>About</h1>
                    <p>
                        Hello! I'm Valentin, a engineer based in Brasov, Romania.
                    </p>
                    <p>
                        I am a very motivated and ambitious person. Given the fact that we live in a world that is constantly changing, I'm always trying to learn new skills. Got a my bachelors degree in <span> Aviation Engineering </span> <span>at Transilvania University Of Brasov</span>.</p>
                    <p>
                        I've been fascinatet by Web Development for some time, this domain always seemed out of my reach, but I decided to get out of my confort zone and I enroled in the <span>Web Developer</span> course ath the <span>The Informal School of IT</span>, Brasov to get a better understanding of this domain.
                    </p>
                    <p>
                        Here are a few technologies I've been working with recently:
                    </p>
                    <ul className="tech">
                        <li>Javascript (ES6)</li>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Github</li>
                        <li>Figma</li>
                    </ul>
                </div>
                <div className="tech-logos">
                    <FaReact className="react-icon" />
                    <FaJs className="js-icon" />
                    <FaHtml5 className="html-icon" />
                    <FaCss3Alt className="css-icon" />
                </div>
            </div>
        </section>
    )

}