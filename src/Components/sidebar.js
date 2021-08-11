import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';


//import {useTranslation} from 'react-i18next';


function HEADER() {

    //const { t } = useTranslation();


    return(
      
      <div className="sidebar single">

     

        <div className="section popular">
          <h2 class="section-title">Popular</h2>

          <div className="post clearfix">
            <img src="images/pills-stock-gty-jef-181030_hpEmbed_3x2_992.jpg" alt=""/>
            <a href="" className="title">
              <h4>How to overcome your fears</h4>
            </a>
          </div>
          <div class="post clearfix">
            <img src="images/research-story-370x203.jpg" alt=""/>
            <a href="" className="title">
              <h4>How to overcome your fears</h4>
            </a>
          </div>
          <div class="post clearfix">
            <img src="images/1200x0.jpg" alt=""/>
            <a href="" className="title">
              <h4>How to overcome your fears</h4>
            </a>
          </div>
          <div class="post clearfix">
            <img src="images/general-dentistry-treatment.png" alt=""/>
            <a href="" className="title">
              <h4>How to overcome your fears</h4>
            </a>
          </div>

          <div class="post clearfix">
            <img src="images/dawd.jpg" alt=""/> 
            <a href="" className="title">
              <h4>How to overcome your fears</h4>
            </a>
          </div>

        </div>

      <div className="section topics">
            
            <div  style={{    backgroundColor: "red", width: "109%", float: "left", padding: "1px", position: "relative", left: "-4.5%",  marginTop: "16px"}}>
                <h2>INFORMACIJE I REZERVACIJE</h2>
                </div>
            <br/>             <br/>

            <h2>MEDIZAR:  NEW YORK</h2>

            <i className="fa fa-phone" id="d1" style={{fontSize: "20px",color: "red"}} ></i>
<a href="tel:+38551263109" style={{fontSize: "20px", marginLeft: "20px"}}>0913008431</a>
<br/>             <br/>

<i class="fa fa-clock" style={{fontSize: "20px",color: "red"}} ></i>

<a href="#" style={{fontSize: "20px", marginLeft: "10px", fontFamily: 'Times New Roman'}}>Monday - Friday: 07:00 to 24:00   </a>

            <br/>             <br/>
        <br/>             <br/>

                <h2>MEDIZAR:  WASHINGTON</h2>
                <i className="fa fa-phone"  style={{fontSize: "20px",color: "red"}} ></i>

                <a href="tel:+38551263109" style={{fontSize: "20px", marginLeft: "20px"}}>0913008431</a>
                <br/>                 <br/>

                <i className="fa fa-clock"  style={{fontSize: "20px",color: "red"}} ></i>

                <a style={{fontSize: "20px", marginLeft: "10px", fontFamily: 'Times New Roman'}} href="#">Monday - Friday: 07:00 to 21:00 </a>


        </div>
      </div>
    );
}


export default HEADER;