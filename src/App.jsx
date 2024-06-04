// Tools
import { useState } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Poll from './pages/Poll';

// Components
import data from './data/data.json';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";




function App() {
  const [aboutData, setAboutData] = useState(false);

  return (
    <div className='container'>
      <Header /> 
      <Routes>
        <Route path='/' element={<Home pages={data} about={aboutData} updateAbout={setAboutData}/>}/>
        <Route path={'/about/:id'} element={<About data={aboutData} />} />
        <Route path='/poll' element={<Poll/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
