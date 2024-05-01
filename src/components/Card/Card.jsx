// Tools
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './Card.scss';



function Card (props) {
    const { data, updateAbout } = props;
    

    return(
        <div className="card">
            <img className='card__image' src={data.image.src} alt={data.image.alt} />
            <NavLink to='/about' className='card__info'>
                <FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => updateAbout(data)} />
            </NavLink>
            <p className='card__title'>{data.title}</p>
            <button className='card__button'>{data.type === 'game' ? 'Play' : 'Info'}</button>
        </div>
    )
}

export default Card;