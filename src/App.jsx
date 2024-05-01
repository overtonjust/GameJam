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

// Components
import data from './data/data.json';
import Header from './components/Header/Header';

// Layouts
import DefaultLayout from './layouts/DefaultLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<DefaultLayout/>}>
      <Route index element={<Home pages={data}/>} />
    </Route>
  )
)


function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App
