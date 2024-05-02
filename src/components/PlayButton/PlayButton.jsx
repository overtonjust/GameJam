// Tools
import './PlayButton.scss';


function PlayButton (props) {
    const { info } = props;

    return (
        <button className='play-button'>{info === 'game' ? 'Play' : 'Open'}</button>
    )
}

export default PlayButton;