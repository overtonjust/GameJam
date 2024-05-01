// Tools

import './About.scss';
import { NavLink } from 'react-router-dom';


function About (props) {
    const {data} = props;

    console.log(data)

    return (
        <>
            <div className="about">
                <section>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <NavLink to='/'>
                        Go back home
                    </NavLink>
                </section>
                <aside>

                </aside>
            </div>
        </>
    )
}

export default About;