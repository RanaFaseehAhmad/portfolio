import React from 'react'
import './Experience.css'
import facebooklogo from './images/facebook.png'
import MicrosoftLogo from './images/microsoft.png'
import WalmartLogo from './images/Walmart-Logo.png'
import abodelogo from './images/Adobe_Corporate_logo.svg.png'

function Experience() {
    return (
        <section className='Experience'>
            <h1 className='experienceTitle'> My clients</h1>
            <p className='experiencePara'> Hi, I'm Faseeh Ahmad, a passionate front-end developer with a strong focus on React.js.
                I specialize in building dynamic, responsive, and user-friendly web applications. With a keen eye for detail and a deep understanding of modern web technologies,
                I aim to create seamless and intuitive user experiences.
                I have hands-on </p>
            <div className='clientsBox'>

                <div className='DivFacebook'> <img src={facebooklogo} className='Facebook' alt=''></img></div>
                <div className='DivMicrosoft' ><img src={MicrosoftLogo} className='Microsoft' alt=''></img></div>
                <div className='DivWalmart'><img src={WalmartLogo} alt='' className='Walmart' ></img></div>
                <div className='Divadobe'  ><img src={abodelogo} alt='' className='adobe'></img></div>
            </div>
        </section>
    )
}
export default Experience
