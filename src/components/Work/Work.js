import React from 'react'
import './Work.css';
import characterOne from './images/characterOne.jpg'
import characterTwo from './images/characterTwo.avif'
import characterThree from './images/characterThree.webp'
import characterForth from './images/characterForth.jpg'
import characterFifth from './images/characterFifth.webp'
import characterSixth from './images/characterSixth.avif'

function Work() {


    return (
        <section className='worksection'>
            <div className='workdesc'>
                <h1 className='worktitle'>My Portfolio</h1>
                <p className='workpara'>Hi, I'm Faseeh Ahmad, a passionate front-end developer with a strong focus on React.js. I specialize in building dynamic, responsive, and user-friendly web applications. With a keen eye for detail and a deep understanding of modern web technologies, I aim to create seamless and intuitive user experiences.
                    I have hands-on experience in JavaScript </p>
            </div>

            <div className='firstcards ' >
                <div className='workcard'><img src={characterOne} alt=''></img></div>
                <div className='workcard'><img src={characterTwo} alt=''></img></div>
                <div className='workcard'><img src={characterThree} alt=''></img></div>
            </div>
            <div className='secondcards'>
                <div className='workcard'><img src={characterForth} alt=''></img></div>
                <div className='workcard'><img src={characterFifth} alt=''></img></div>
                <div className='workcard'><img src={characterSixth} alt=''></img></div>
            </div>
        </section>
    )
}

export default Work
