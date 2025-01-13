import React from 'react'
import './Services.css'
// import responsive from './images/devices-vector-icon-isolated-transparent-background-linear-d-outline-high-quality-transparency-concept-can-be-used-web-130122979.webp'

function Services() {
    return (
        <section className='ServicesSec'>
            <div className='Servicesfirstcard'>
                <div className='card'>
                    <i className="fa-solid fa-gear"></i>
                    <h2 >Creative Design</h2>
                    <p>I design visually engaging, intuitive web experiences that combine creativity with clean functionality. My goal is to captivate users at first glance, guiding them effortlessly through each page. Every element is crafted to make the web feel inviting and seamless</p>
                </div>
                <div className='card'>
                    <i className="fa-solid fa-filter"></i>
                    <h2>Clean Code</h2>
                    <p>In my approach to creative design, I focus on crafting clean, dynamic visuals that engage and guide users seamlessly. My designs aim to inspire, combining creativity with a streamlined, user-centered experience</p>
                </div>
                <div className='card'>
                    {/* <img className='responsiveIcon' src={responsive} alt='responsive Pic'></img> */}
                    <i class="fa-solid fa-laptop"></i>
                    <h2>Responsive Design</h2>
                    <p>I design responsive webpages that adapt seamlessly to any screen size, ensuring a smooth, user-friendly experience across devices. From desktop to mobile, each page is crafted to look and perform its best</p>
                </div>
            </div>

        </section>
    )
}

export default Services
