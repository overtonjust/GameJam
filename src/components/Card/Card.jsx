// Tools
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './Card.scss';

// Components
import PlayButton from '../PlayButton/PlayButton';


function Card (props) {
    const { data, about, updateAbout } = props; 


    return(
        <div className="card">
            <img className='card__image' src={data.image.src} alt={data.image.alt} />
            <NavLink to={`/about/${data.id}`} className='card__info'>
                <FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => updateAbout(data)} />
            </NavLink>
        <p className='card__title'>{data.title}</p>
            <PlayButton info={data.type} />
        </div>
    )
}

export default Card;