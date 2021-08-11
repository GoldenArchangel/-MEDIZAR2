import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';


//import {useTranslation} from 'react-i18next';


function HEADER() {

    //const { t } = useTranslation();


    return(
  
<header>
<div className="logo">
      <h1 className="logo-text">Medizar</h1>
    </div>
    <i className="fa fa-bars menu-toggle"></i>
    <ul className="nav">
      <img src="images/cross.png" width="50px" alt="" className="img-logo"/> 
      
      <Link to='/'> <li> <a href="#" >HOME</a></li></Link>
      <Link to='about'> <li>  <a href="" >ABOUT</a></li></Link>
      <Link to='eu'><li>  <a href="" >OUR PROJECTS</a></li></Link>
      <Link to='prices'><li>  <a href="" >PRICES</a></li></Link>
      <Link to='contact'> <li> <a href="" >CONTACT</a></li></Link>
</ul>

</header>

    );
}


export default HEADER;