import './nav.modular.css';
import about from '../../assets/about.svg'
import project from '../../assets/projects.svg'
import resume from '../../assets/resume.svg'
import myphoto from '../../assets/myPhoto.jpg'
import contactSvg from '../../assets/contactSvg.svg'
import { Link } from 'react-scroll';

const Nav = () => {
    const handleDownload = () => {
        // Creating a link element
        const link = document.createElement('a');
        link.href = '/resume.pdf'; // Path to your resume file
        link.download = 'Rakshit_Baliyan_Resume.pdf'; // Default file name for download
        document.body.appendChild(link);
        link.click(); // Trigger the download
        document.body.removeChild(link); // Remove the link after triggering
      };
    return(
        <nav>
            <div className='img-logo'>
                <img width={80} height={80} src={myphoto} alt="" />
            </div>
            <div className='nav-links'> 
                <div className='nav-link'>
                    <img width={25} src={about} alt="" />
                    <Link to="about" smooth={true} duration={500}>
                        About Me
                     </Link>
                </div>
                <div className='nav-link'>
                    <img width={18} src={project} alt="" />
                    <Link to="projects" smooth={true} duration={500}>
                        My Projects
                     </Link>
                </div>
                <div className='nav-link'>
                    <img width={25} src={contactSvg} alt="" />
                    <Link to="contact" smooth={true} duration={500}>
                        Contact Me
                     </Link>
                </div>
                <div className='nav-link'>
                    <button  onClick={handleDownload}>Download Resume</button>
                </div>
                <button className='mobile' onClick={handleDownload}>Download Resume</button>
            </div> 
             
        </nav>
    )
}

export default Nav