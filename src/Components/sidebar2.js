/* eslint-disable react/style-prop-object */
import React from "react";
import '../App.css';
//import { Link } from 'react-router-dom';


//import {useTranslation} from 'react-i18next';


function SIDEBAR2() {

    //const { t } = useTranslation();


    return(
  
        <div className="sidebar">
        <div className="section search">
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
        </div> 



    );
}


export default SIDEBAR2;