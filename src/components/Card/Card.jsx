import './Card.scss';


function Card (props) {
    const { data } = props;
    

    return(
        <div className="card">
            <img className='card__image' src={data.image.src} alt={data.image.alt} />
            <p className='card__title'>{data.title}</p>
            <button className='card__button'>{data.type === 'game' ? 'Play' : 'Info'}</button>
        </div>
    )
}

export default Card;