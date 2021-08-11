import React from 'react';
import '../App.css';
import HEADER from '../Components/header';
import FOTER from '../Components/foter';
import SIDEBAR from '../Components/sidebar';


// import {useTranslation} from 'react-i18next';
// import i18next from 'i18next';

function CONTACT() {


  return (
    
<div>


<HEADER/>
 
 <div className="page-wrapper">

 <div className="content clearfix">


      <div class="main-content-wrapper"> 
        <div class="main-content single">
          <h1 class="post-title">Contact us</h1>

          <div class="post-content">
          
            
          
               
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24200.265255076327!2d-74.06794413999675!3d40.69526740236345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Sjedinjene%20Dr%C5%BEave!5e0!3m2!1shr!2shr!4v1614513896425!5m2!1shr!2shr" width="100%" height="1000" style={{border:"0"}} allowfullscreen="" loading="lazy" title="ge"></iframe>
   
   
          </div>

        </div>
      </div>
      <SIDEBAR/>

   
     </div>



 </div>

  
  <FOTER/>
  
  



  </div>








  
    
 
  );






}



export default CONTACT;