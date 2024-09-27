import { useState } from 'react'
import Nav from './components/navbar/nav'
import './App.css'
import TypingEffect from './components/hero/hero'
import Projects from './components/projects/project'
import ContactForm from './components/contactForm/contact'
import Footer from './components/footer/footer'
import About from './components/about/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <div id='hero'><TypingEffect/></div>
      <div id='projects'><Projects/></div>
      <div id='about'><About/></div>
      <div id='contact'><ContactForm/></div>
      <Footer/>
    </>
  )
}

export default App
