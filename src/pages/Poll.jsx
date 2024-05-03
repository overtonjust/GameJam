// Tools

import './Poll.scss';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie} from 'react-chartjs-2';
import { NavLink } from 'react-router-dom';
import options from '../utils/pollData';

ChartJS.register(ArcElement, Tooltip, Legend);


function Poll () {
    
    return (
        <>
        <section className='vote'>
            <form action="">

                <NavLink className='about__home' to='/'>
                    Go back home
                </NavLink>
            </form>
            <Pie data={options}/>
        </section>
        </>
    )
}

export default Poll;