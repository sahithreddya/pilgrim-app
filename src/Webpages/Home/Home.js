import React from 'react';
import './Home.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import { ReactComponent as ContinentNA } from '../../Assets/Images/continent vectors/NA.svg';
import { ReactComponent as ContinentSA } from '../../Assets/Images/continent vectors/SA.svg';
import { ReactComponent as ContinentAfrica } from '../../Assets/Images/continent vectors/Africa.svg';
import { ReactComponent as ContinentAsia } from '../../Assets/Images/continent vectors/Asia.svg';
import { ReactComponent as ContinentEurope } from '../../Assets/Images/continent vectors/Europe.svg';
import { ReactComponent as ContinentOceania } from '../../Assets/Images/continent vectors/Oceania.svg';

import { useRef } from 'react';
import Articles from '../Articles';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <div>Oops, an unexpected error occured.</div>
  },
]);

export const Home = () => {
  const ref = useRef();
  const scroll = () => ref?.current?.scrollIntoView({ behavior: "smooth" });

  return (
    // <Router>
      <div className="Home">
        <div className='pilgrim-header' />
        <div className='divider' />
        <div className='map'>
          <div className='mapWrapper'>
            {/* <Link to="/articles"> */}
              <ContinentNA path="/na" className='continent continent-NA' />
            {/* </Link> */}
            <ContinentSA className='continent continent-SA' />
            <ContinentAfrica className='continent continent-Africa' />
            <ContinentAsia className='continent continent-Asia' />
            <ContinentEurope className='continent continent-Europe' />
            <ContinentOceania className='continent continent-Oceania' />
          </div>
        </div>
      </div>
  );
}


export default Home;
