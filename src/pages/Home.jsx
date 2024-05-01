// Tools
import { NavLink } from 'react-router-dom';
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableList } from '@fortawesome/free-solid-svg-icons';

// Components
import Card from '../components/Card/Card';

function Home(props) {
    const { pages, updateAbout } = props;

    return (
        <main className='home'>
            <section className="home__bubble">
                {pages.map(page => {
                    return (
                        <Card data={page} updateAbout={updateAbout} key={page.id}/>
                    )
                })}
            </section>
            <aside className='home__aside'>
                <h2 className='home__title'>Chaturday Dinner (date)</h2>
                <article className='home__content'>
                    <section className="home__winner">
                        <div className="home__winner-text">
                            <p className='home__victor'>Current Winner: <span className='home__highlight'>Indian</span></p>
                            <p className='home__vote'>Vote here: <NavLink className='home__link'>Link</NavLink></p>
                            <p className='home__vote'>Order here: <NavLink className='home__link'>Link</NavLink></p>
                        </div>
                        <img className='home__img' src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
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
            </aside>
        </main>
    )
}

export default Home;