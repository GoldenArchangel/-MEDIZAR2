import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';


//import {useTranslation} from 'react-i18next';


function FOTER() {

    //const { t } = useTranslation();


    return(
  

        <div class="footer">
        <div class="footer-content">
    
          <div class="footer-section about">
            <h1 class="logo-text">Medizar</h1>
         
            <div class="contact">
              <span><i class="fas fa-phone"></i> &nbsp; 123-456-789</span>
              <span><i class="fas fa-envelope"></i> &nbsp; info@medizar.com</span>
            </div>
            
            <div class="socials">
         
            </div>
          </div>
    
          <div class="footer-section links">
            <h2>Brzi linkovi</h2>
            <br/>
            <ul>
            <Link to="/"> <a href="#">
                <li>Home</li>
              </a> </Link> 
         
              <Link to="/about"> <a href="#">
                <li>About</li>
              </a> </Link> <Link to="/"> <a href="#">
                <li>Prices</li>
              </a> </Link> 

              <Link to="/eu"> <a href="#">
                <li>Our projects</li>
              </a> </Link> 
              <Link to="contact"> <a href="#">
                <li>Contact</li>
              </a> </Link> 
            </ul>
          </div>
    
          <div class="footer-section contact-form">
            <h2>Contact us</h2>
            <br/>
            <form action="index.html" method="post">
              <input type="email" name="email" class="text-input contact-input" placeholder="Your email address..."/>
              <textarea rows="4" name="message" class="text-input contact-input" placeholder="Your message..."></textarea>
              <button type="submit" class="btn btn-big contact-btn">
                <i class="fas fa-envelope"></i>
                Send
              </button>
            </form>
          </div>
    
        </div>
    
        <div class="footer-bottom">
          &copy; Medizar 2021 | All rights reserved
        </div>
      </div>


    );
}


export default FOTER;