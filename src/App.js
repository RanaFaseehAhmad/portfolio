import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Skill from './components/Skill/Skill'
import Services from './components/Services/Services'
import Work from './components/Work/Work'
import Experience from './components/Experience/Experience'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'
// import { useEffect } from 'react';

export default function App() {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar />
      <Intro />
      <Skill />
      <Services />
      <Work />
      <Experience />
      <ContactMe />
      <Footer />

    </>

  )
}
