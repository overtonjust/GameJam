// Tools
import { NavLink } from 'react-router-dom';
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableList } from '@fortawesome/free-solid-svg-icons';
import food from '../data/poll.json';

// Components
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';

function Home(props) {
    const { pages, updateAbout, about } = props;

    return (
        <main className='home'>
            <aside className='home__aside'>

            </aside>
            <div className="home__dashboard">
                <header className='home__header'>
                    <h2 className='home__title'>Chaturday Dinner (date)</h2>
                    <article className='home__content'>
                        <section className="home__winner">
                            <div className="home__winner-text">
                                <p className='home__victor'>Current Winner: <span className='home__highlight'>Indian</span></p>
                                <p className='home__vote'>Vote here: <NavLink className='home__link' to='/poll'>Poll</NavLink></p>
                                <p className='home__vote'>Order here: <NavLink className='home__link'>Link</NavLink></p>
                            </div>
                            <img className='home__img' src={food[8].image.src} alt="" />
                        </section>
                        <section className="home__order">
                            <ul className='home__list'>Orders in:
                                <li className='home__item'>Drew</li>
                                <li className='home__item'>Dante</li>
                            </ul>
                            <div className="home__guide">
                                <p className='home__document'>Order to be placed</p>
                                <FontAwesomeIcon icon={faTableList} className='home__icon'/>
                            </div>
                        </section>
                        <section className="home__opt">
                            <ul className='home__list'>Opting out:
                                <li className='home__item'>Justin</li>
                                <li className='home__item'>Steve</li>
                            </ul>          
                        </section>
                    </article>
                </header>
                <section className="home__options-list">
                    {pages.map(page => {
                        return (
                            <Card data={page} about={about} updateAbout={updateAbout} key={page.id}/>
                        )
                    })}
                </section>
                <Footer/>
            </div>
        </main>
    )
}

export default Home;