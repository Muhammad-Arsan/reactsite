import React from 'react';
import { NavLink } from 'react-router-dom';
import Same from './Same';
import codi from '../src/Images/coding.svg';
const Home = () => {
    return(
        <>
        <Same 
        name = "Grow yor business with"
        visit = "/service"
        btnname = "Get Started"
        imgsrc = {codi}
        />
        </>
    )
}    
export default Home;