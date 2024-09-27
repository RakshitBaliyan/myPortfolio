import './project.modular.css'
import Card from './card'
import craftmycv from '../../assets/craftMyCV.png';
import emoji from '../../assets/Emoji.png';
import geekFood from '../../assets/GeeksFood.png';


const Projects = () =>{
    return(
        <>
            <div className='project-container'>
                <Card
                     img={craftmycv} 
                     heading={"Craft My CV"}
                     about={"Craft My CV, is a resume-building web app that allows users to select templates, input personal details, and download resumes in PDF or DOCX format. It features dynamic updates, user authentication, and an interactive UI."}
                     gitLink={"https://github.com/RakshitBaliyan/resumebuilder"}
                     liveLink={"https://rakshitbaliyan.github.io/resumebuilder/home.html"}
                />
                <Card
                     img={emoji} 
                     heading={"Emoji Finder"}
                     about={"Emoji Finder project is a web app that displays a wide range of emojis, allowing users to search, filter by categories (like Face, Hand, Heart, etc.), and copy emojis to the clipboard with a simple click."}
                     liveLink={"https://rakshitbaliyan.github.io/emoji-search/"}
                     gitLink={"https://github.com/RakshitBaliyan/emoji-search"}
                />
                <Card
                     img={geekFood} 
                     heading={"GeeksFood"}
                     about={"GeeksFood project is a homepage built using ReactJS, CSS, and Grid layout. It features a clean, responsive design with a focus on showcasing food items and services, providing an engaging user experience for food lovers."}
                     liveLink={"https://geek-coral.vercel.app/"}
                     gitLink={"https://github.com/RakshitBaliyan/geek"}
                />
                
            </div>
        
        </>
    )
}

export default Projects