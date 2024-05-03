// Tools
import { useState } from 'react';
import './App.scss';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  NavLink
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Poll from './pages/Poll';

// Components
import data from './data/data.json';
import Header from './components/Header/Header';

// Layouts
import DefaultLayout from './layouts/DefaultLayout';



function App() {
  const [aboutData, setAboutData] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<DefaultLayout/>}>
        <Route index element={<Home pages={data} about={aboutData} updateAbout={setAboutData}/>} />
        <Route path={'/about/:id'} element={<About data={aboutData} />} />
        <Route path='/poll' element={<Poll/>} />
      </Route>
    )
  )

  return (
      <RouterProvider router={router}/>
  )
}

export default App
