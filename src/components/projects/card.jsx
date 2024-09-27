
import './card.modular.css'

const Card = (props) => {
    return(
        <div className='card'>
            <img src={props.img} alt="" />
            <h3>{props.heading}</h3>
            <p>{props.about}</p>
            <div className='card-btn'>
                <a href={props.gitLink}><button>Github Repo</button></a>
                <a href={props.liveLink}><button>Live Demo</button></a> 
            </div>
        </div>
    )
}

export default Card