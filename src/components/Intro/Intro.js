import React from 'react'
import './Intro.css'
import { Link } from 'react-scroll';
import portfolioImage from './image/profile.png';

function Intro() {
    return (
        <section className='intro'>
            <div className='introContent'>
                <h2 >Hello,</h2>
                <h1>I'm  <mark style={{ color: 'yellow' }}>Faseeh Ahmad</mark> </h1>
                <h1>Front-end Web Developer</h1>
                <p className='intropara'>I am a skilled font-end web developer <br/>having experience of more then 2 years in react.js, html, css & js </p>
              
                    {/* <Link className='hiremelink' to='/'>  <button className='hiremebtn'> <i className="fa-solid fa-briefcase"></i>Hire me</button></Link> */}
                    <a className='Portfoliolink' href='https://github.com/RanaFaseehAhmad?tab=repositories' target="_blank" aria-label="Visit my GitHub portfolio">  <button className='githubbtn'> <i class="fa-brands fa-github"></i> visit Portfolio</button></a>
             

            </div>

            <img className='introPic' src={portfolioImage} alt='portfolio' />



        </section>
    )
}

export default Intro
