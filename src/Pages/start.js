import React from 'react';
import '../App.css';
import HEADER from '../Components/header';
import FOTER from '../Components/foter';
import SIDEBAR2 from '../Components/sidebar2';
import SLIDEM from '../Components/slidem';

// import {useTranslation} from 'react-i18next';
// import i18next from 'i18next';

function START() {


  return (
    
<div>


<HEADER/>
<div className="page-wrapper">






<div className="content clearfix">
  
<div className="main-content">
  
        <h1 className="recent-post-title">Nedavno</h1>

      
        <div className="post clearfix">
          <img src="images/pills-stock-gty-jef-181030_hpEmbed_3x2_992.jpg" alt="" className="post-image"/>
          <div className="post-preview">
            <h2><a href="single.hmtl">Dostupna nova jumbo tableta</a></h2>
         
            <i className="far fa-calendar">2021</i>
            <p className="preview-text">
              Dostupna je nova jumbo tableta vrste mogus koja liječi vodu u koljenu.
            </p>
            <a href="single.html" className="btn read-more">Read More</a>
          </div>
        </div>


        <div className="post clearfix">
          <img src="images/a.jpg" alt="" className="post-image"/>
          <div className="post-preview">
            <h2><a href="single.hmtl">Nosite knjižice</a></h2>
         
            <i className="far fa-calendar">2021</i>
            <p className="preview-text">
              Liječnici upozoravaju da prije dolaska na preglede morate sa sobom imat liječničku knjižicu
            </p>
            <a href="single.html" className="btn read-more">Read More</a>
          </div>
        </div>

        <div className="post clearfix">
          <img src="images/general-dentistry-treatment.png" alt="" className="post-image"/>
          <div className="post-preview">
            <h2><a href="single.hmtl">Perite zube</a></h2>
         
            <i className="far fa-calendar">2021</i>
            <p className="preview-text">
              U 2021 godini zabilježeno je više slučajeva karijesa nego u predhodinih 30 godina.
            </p>
            <a href="single.html" className="btn read-more">Read More</a>
          </div>
        </div>

        

      </div>

  <SIDEBAR2/>
    </div>



</div>

 

  
  <FOTER/>
  
  
  : <script src="https://cdn.ckeditor.com/ckeditor5/12.3.1/classic/ckeditor.js"></script>
  <script src="/scripts.js"></script>


  </div>








  
    
 
  );






}



export default START;