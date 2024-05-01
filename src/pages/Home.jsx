// Tools
import { NavLink } from 'react-router-dom';
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableList } from '@fortawesome/free-solid-svg-icons';

// Components
import Card from '../components/Card/Card';

function Home(props) {
    const { pages } = props;

    return (
        <main className='home'>
            <section className="home__bubble">
            {pages.map(page => {
                return (
                    <Card data={page} key={page.id}/>
                )
            })}
            </section>
            <aside className='home__aside'>
                <h2 className='home__title'>Chaturday Dinner (date)</h2>
                <article className='home__content'>
                    <div className="home__winner">
                        <p className='winnername'>Current winner: Indian</p>
                        <p className='winnerlink'>Order here: <NavLink>link</NavLink></p>
                        <img className='home__img' src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="home__order">
                        <ul>Orders in:
                            <li>Drew</li>
                            <li>Dante</li>
                        </ul>
                        <div className="home__guide">
                            <p>Order to be placed</p>
                            <FontAwesomeIcon icon={faTableList} className='home__icon'/>
                        </div>
                    </div>
                    <div className="home__opt">
                        <ul>Opting out:
                            <li>Justin</li>
                            <li>Steve</li>
                        </ul>
                        <div className="home__vote">
                            <p>Vote here</p>
                            <NavLink>Link</NavLink>
                        </div>
                    </div>
                </article>
            </aside>
        </main>
    )
}

export default Home;