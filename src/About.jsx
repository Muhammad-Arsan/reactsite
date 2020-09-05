import React from 'react';
import {NavLink} from 'react-router-dom';
import Same from './Same';
import code from '../src/Images/code.svg';
const About = () => {
    return(
        <>
        <Same 
        name = "Welcome to About Page"
        visit = "/contact"
        btnname = "About Us"
        imgsrc = {code}
  
        />
        </>      
    )
}
export default About;