import './Card.scss';


function Card (props) {
    const { data } = props;
    
    console.log(data)

    return(
        <div className="card">
            <div className="card__img-holder">
                <img className='card__image' src={data.image.src} alt={data.image.alt} />
            </div>
            <p className='card__title'>{data.title}</p>
            <button className='card__button'>{data.type === 'game' ? 'Play' : 'Info'}</button>
        </div>
    )
}

export default Card;