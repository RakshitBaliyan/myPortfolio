import React, { useState, useEffect } from 'react';
import './hero.modular.css';
import gif from '../../assets/hero-gif.gif';
import arrowRight from '../../assets/arrow-right.svg';
import arrowDown from '../../assets/arrow-down.svg';
import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fontawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';



const TypingEffect = () => {
  const roles = ['Frontend Developer', 'Backend Developer', 'UI UX Designer'];
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const iconStyle = {
    color: 'black',
    margin: '0 15px',
    fontSize: '24px',
    transition: 'color 0.3s ease',
  };

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, currentText.length - 1)
        : currentRole.substring(0, currentText.length + 1);

      setCurrentText(updatedText);

      // If it's done typing and not deleting, start deleting after a pause
      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before starting deletion
        setTypingSpeed(100); // Set deletion speed
      }
      // If it's done deleting, move to the next word after a short pause
      else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150); // Reset typing speed
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);

    // Cleanup timeout on unmount
    return () => clearTimeout(typingTimer);
  }, [currentText, isDeleting, loopNum, typingSpeed]);

  

  return (
    <>
    <div className='hero'>
      <div className='social-links'>
      <a href="https://www.linkedin.com/in/rakshitbaliyan61/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
        </a>
        {/* GitHub */}
        <a href="https://github.com/RakshitBaliyan" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} style={iconStyle} />
        </a>
        {/* Instagram */}
        <a href="https://www.instagram.com/_rakshitbaliyan" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
        </a>
      </div>
        <div className='name-text'>
            <h1>I am Rakshit Baliyan<br/> I am a <span className='changing-text'>{currentText}</span></h1>
            <div className='aboutMe-btn'>
            <Link to="about" smooth={true} duration={500}><button>About Me</button></Link>  
            <img width={30} src={arrowRight} alt="" />
            </div>
        </div>
        <div className='logo-area'>
            <img width={500} height={400} src={gif} alt="" />
        </div>
    </div>
    <div className='project-btn-area'>
      <Link to="projects" smooth={true} duration={500}><button className='project-btn'>My Projects</button></Link>  
      <img width={30} src={arrowDown} alt="" />
    </div>
    </>
  );
};

export default TypingEffect
