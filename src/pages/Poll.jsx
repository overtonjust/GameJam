// Tools
import './Poll.scss';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Select from 'react-select';
import { useLocalStorage } from '../utils/LocaleStorage';

// Components
import Chart from '../components/Chart/Chart';



function Poll () {
    const [inputs,setInputs] = useState({});

    const [votes, setVotes] = useLocalStorage('votes', [0,0,0,0,0,0,0,0,0,0])
    const [namesArr,setNamesArr] = useLocalStorage('namesArr', [])

    const voteOptions = [
        {name:'vote', value: 0 , label: "Chan's Peking"},
        {name:'vote', value: 1 , label: 'Five Guys'},
        {name:'vote', value: 2 , label: 'Golden Buddha'},
        {name:'vote', value: 3 , label: 'Athena'},
        {name:'vote', value: 4 , label: 'Gymkhana'},
        {name:'vote', value: 5 , label: 'Hudson & Packard'},
        {name:'vote', value: 6 , label: 'Mexicali Blue'},
        {name:'vote', value: 7 , label: "Rossi's Deli"},
        {name:'vote', value: 8 , label: "Sushi Village"},
        {name:'vote', value: 9 , label: "Tamarind"}
    ]


    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name] : value }))
    }

    const handleSelect = (selectedOption) => {
        const name = selectedOption.name;
        const value = selectedOption.value;
        setInputs(values => ({...values, [name] : value }))
    }
  
    const handleSubmit = (event) => {
        event.preventDefault()
        event.target.reset()
        if(namesArr.includes(inputs.name.toLowerCase())){
            alert(`${inputs.name} has already voted.`) 
        } 
        else {
            setNamesArr(names => ([...names, inputs.name.toLowerCase()]));
            setVotes(votes => {
                const updateVotesArr =  votes.map((vote,index) => {
                    if(index === inputs.vote) {
                        vote++
                    }
                    return vote
                })
                return updateVotesArr;
            })
        }
        
    }
    

    return (
        <>
        <section className='vote'>
            <form className='vote__form' onSubmit={handleSubmit} >
                <h3 className='vote__title'>Takeaway Vote</h3>
                <input 
                    
                    onChange={handleInput}
                    type="text" 
                    name='name'
                    id='name' 
                    className='vote__input' 
                    placeholder='Please enter your name' 
                    required 
                />
                <Select 
                    onChange={handleSelect}
                    options={voteOptions}
                    isClearable={true}
                    required={true}
                    placeholder={'Restaurant Choice'}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderRadius: '2em',
                            width: 'calc(14 * 1vw)',
                            height: 'calc(4 * 1vh)',
                            backgroundColor: '#333333',
                            boxShadow: '0 0 .1em #F4EDED',
                            border: 'none',             
                        }),
                        placeholder: (base) => ({
                            ...base,
                            content: '"test"',
                            color: '#F4EDED',
                            fontSize: 'calc(.6* (1vh + 1vw))',
                        }),
                        menu: (base) => ({
                            ...base,
                            backgroundColor: '#333333',
                            color: '#F4EDED',
                            boxShadow: '0 0 .4em #8b8c89',
                        }),
                        option: (base) => ({
                            ...base,
                            color: '#F4EDED',
                            backgroundColor: '#333333',
                            cursor: 'pointer',
                            ":active": {
                                backgroundColor: '#333333',
                            },
                            ":hover": {
                                color: '#9C23A9'
                            }
                        }),
                        clearIndicator: (base) => ({
                            ...base,
                            color: '#F4EDED',
                            cursor: 'pointer',
                            ':hover': {
                                color: '#9C23A9'
                            }
                        }),
                        dropdownIndicator: (base) => ({
                            ...base,
                            color: '#F4EDED',
                            cursor: 'pointer', 
                            ':hover': {
                                color: '#9C23A9'
                            }
                        }),
                        singleValue: (base) => ({
                            ...base,
                            color: '#9C23A9',
                        })
                    }} 
                 />
                <input 
                    type="submit" 
                    className='vote__submit' 
                />
                <NavLink className='about__home' to='/'>
                    Go back home
                </NavLink>
            </form>
           <Chart data={votes}/>
        </section>
        </>
    )
}

export default Poll;