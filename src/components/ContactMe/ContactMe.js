import React from 'react'
import './ContactMe.css'
import facebookIcon from './images/facebook.webp'
import linkedinIcon from './images/linkedin.webp'
import instagramIcon from './images/instagram.png'
import twitterIcon from './images/twitter.webp'
function ContactMe() {
    return (
        <section className='ContactMe' id='ContactMe'>
            <h1 className='Contactmetitle'>Contact Me</h1>
            <p className='Contactmepara'> Hi, I'm Faseeh Ahmad, a passionate front-end developer with a strong focus on React.js.</p>
            <form className='contactForm'>
                <input className='Name' type='text' placeholder='Your name'></input>
                <input className='Email' type='email' placeholder='Your Email'></input>
                <textarea className='Message' placeholder='Type your message here...' rows={5} />
                <button className='Submit' type='Submit'>Submit </button>
                <div className='SocialIcons'>
                    <img src={facebookIcon} alt='icon'></img>
                    <img src={linkedinIcon} alt='icon'></img>
                    <img src={instagramIcon} alt='icon'></img>
                    <img src={twitterIcon} alt='icon'></img>

                </div>
            </form>
        </section>
    )
}

export default ContactMe
