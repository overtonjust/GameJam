// Tools
import { useState } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import data from './data/data.json';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Poll from './pages/Poll';

// Components
import Navbar from './components/Navbar/Navbar';





function App() {
  const [aboutData, setAboutData] = useState(false);

  return (
    <>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home pages={data} about={aboutData} updateAbout={setAboutData}/>}/>
        <Route path={'/about/:id'} element={<About data={aboutData} />} />
        <Route path='/poll' element={<Poll/>} />
      </Routes>
    </>
  )
}

export default App
