// Tools

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './About.scss';
import { NavLink } from 'react-router-dom';
import apps from '../data/data.json';

// Components

import PlayButton from '../components/PlayButton/PlayButton';


function About () {
    const [data, setData] = useState({});
    const { id } = useParams();  

    useEffect(() => {
       setData(apps.find(app => app.id === id))
    },[])


    return (
        <>
            {data.title && (
                 <main className="about" key={data.id}>
                 <section className='about__info'>
                     <h2 className='about__title'>{data.title}</h2>
                     <p className='about__description'>{data.description}</p>
                     <div className="about__links">
                         <NavLink className='about__home' to='/'>
                             Go back home
                         </NavLink>
                         <PlayButton info={data.type} className='about__button' />
                     </div>
                 </section>
                 <aside className='about__aside'>
                     <div className="about__shadow">
                     </div>
                     <img className='about__image' src={data.image.src} alt={data.image.alt} width='20px'/>
                 </aside>
             </main>
            )}              
        </>
    )
}

export default About;