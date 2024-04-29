import { useState } from 'react'
import data from './data/data.json';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import './App.scss'

function App() {


  return (

    <div className="container">
      <div className="container__header">
        <Header />  
      </div>
      <div className="container__list">
        {data.map((option,index) => { return ( <Card key={index} data={option}/> )
        })}
      </div>
    </div>
   
  )
}

export default App
