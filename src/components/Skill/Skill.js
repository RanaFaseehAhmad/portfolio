import React from 'react'
import './Skill.css'
import Ui from './image/Ui.png';
import webdevelopment from './image/webdevelopment.png';
import wordpress from './image/Wordpress.png';

function Skill() {
    return (
        <section className='skillssection'>
            <h1 className='skillTitle' >What I do</h1>
            <p className='skillPara'>Hi, I'm Faseeh Ahmad, a passionate front-end developer with a strong focus on React.js. I specialize in building dynamic, responsive, and user-friendly web applications. With a keen eye for detail and a deep understanding of modern web technologies, I aim to create seamless and intuitive user experiences.
                I have hands-on experience in JavaScript (ES6+), HTML5, CSS3, and am proficient in implementing state management, component-based architecture, and performance optimization in React applications. My projects often involve crafting clean, reusable code and integrating APIs to enhance functionality.</p>
            <div className='skillbox'>

                <div className='skill'>
                    <div>
                        <img className='firstimg' src={Ui} ></img>
                    </div>
                    <div className='skilldesc'>
                        <h2>Social Media Marketing</h2>
                        <p>This is the demo text</p>
                    </div>
                </div>
                <div className='skill'>
                    <div>
                        <img className='firstimg' src={webdevelopment} ></img>
                    </div>
                    <div className='skilldesc'>
                        <h2>Front-end Web Development</h2>
                        <p>This is the demo text</p>
                    </div>
                </div>
                <div className='skill'>
                    <div>
                        <img className='firstimg' src={wordpress} ></img>
                    </div>
                    <div className='skilldesc'>

                        <h2>Wordpress</h2>
                        <p>This is the demo text</p>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Skill
