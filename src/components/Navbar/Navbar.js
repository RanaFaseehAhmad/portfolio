import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Navbar/logo/Faseeh Ahmad (1).png';
import { Link } from 'react-scroll';
function Navbar() {
    const [showMenu, setshowMenu] = useState(false)

    const Togglemenu = () => {
        setshowMenu(!showMenu)
    }
    return (
        <nav className={`navbar ${showMenu ? 'show-menu' : ''}`}>
            <img src={logo} alt='logo' className='navbarlogo' />
            <i className="fa-solid fa-bars" onClick={Togglemenu}></i>
            <div className='navbarmenu '>
                {/* <div className='navlist'> */}
                <Link className='navbarlistitems ' activeclassname='active' to='intro' spy={true} smooth={true} offset={-400} duration={500}  >Home</Link>
                <Link className='navbarlistitems' activeclassname='active' to='skill' spy={true} smooth={true} offset={-450} duration={500}>About</Link>
                <Link className='navbarlistitems' activeclassname='active' to='ServicesSec' spy={true} smooth={true} offset={-250} duration={500}  onClick={() => console.log("Services button clicked")}>Services</Link>
                <Link className='navbarlistitems' activeclassname='active' to='worksection' spy={true} smooth={true} offset={-100} duration={500}>Work</Link>
                <Link className='navbarlistitems' activeclassname='active' to='Experience' spy={true} smooth={true} offset={-100} duration={500}>Experience</Link>
                <Link className='navbarlistitems navContact' activeclassname='active' to='ContactMe' spy={true} smooth={true} offset={-100} duration={500}>Contact me</Link>

                {/* </div> */}

            </div>
            <button className='contactme' onClick={() => {
                document.getElementById('ContactMe').scrollIntoView({ behavior: 'smooth' })
            }} >Contact Me</button>
        </nav >



    )
}

export default Navbar

