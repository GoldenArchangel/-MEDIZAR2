import React, {Component,} from "react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "../App.css";
import $ from 'jquery';
import 'jquery/dist/jquery.js'


class SLIDEM extends Component{
   componentDidMount(){
   
    window.$ = $;
     
    $(document).ready(function() {
        $(".menu-toggle").on("click", function() {
          $(".nav").toggleClass("showing");
          $(".nav ul").toggleClass("showing");
        });
      
        $(".post-wrapper")({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          nextArrow: $(".next"),
          prevArrow: $(".prev"),
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
         
          ]
        });
      });
      
      ClassicEditor.create(document.querySelector("#body"), {
        toolbar: [
          "heading",
          "|",
          "bold",
          "italic",
          "link",
          "bulletedList",
          "numberedList",
          "blockQuote"
        ],
        heading: {
          options: [
            { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
            {
              model: "heading1",
              view: "h1",
              title: "Heading 1",
              class: "ck-heading_heading1"
            },
            {
              model: "heading2",
              view: "h2",
              title: "Heading 2",
              class: "ck-heading_heading2"
            }
          ]
        }
      }).catch(error => {
        console.log(error);
      });
      
   }

   render(){
     return (
        <div className="post-slider">
        <h1 className="slider-title">Najnovije</h1>
        <i className="fas fa-chevron-left prev"></i>
        <i className="fas fa-chevron-right next"></i>
  
        <div className="post-wrapper">
  
          <div className="post">
            <img src="images/a.jpg" alt="" className="slider-image"/> 
            <div className="post-info">
              <h4><a href="./single.html">Nosite knjižice</a></h4>
              &nbsp;
              <i className="far fa-calendar">2021</i>
            </div>
          </div>
  
          <div className="post">
            <img src="images/general-dentistry-treatment.png" alt="" className="slider-image"/>
            <div className="post-info">
              <h4><a href="./single.html">Perite zube</a></h4>
              &nbsp;
              <i className="far fa-calendar">2021</i>
            </div>
          </div>
   
          <div className="post">
            <img src="images/pills-stock-gty-jef-181030_hpEmbed_3x2_992.jpg" alt="" className="slider-image"/>
            <div className="post-info">
              <h4><a href="./single.html">Nove tablete stigle</a></h4>
              &nbsp;
              <i className="far fa-calendar">2021</i>
            </div>
          </div>     <div className="post">
            <img src="images/research-story-370x203.jpg" alt="" className="slider-image"/>
            <div className="post-info">
              <h4><a href="./single.html">Otkriven lijek za rak</a></h4>
              &nbsp;
              <i className="far fa-calendar">2021</i>
            </div>
          </div>     <div className="post">
            <img src="images/dawd.jpg" alt="" className="slider-image"/>
            <div className="post-info">
              <h4><a href="./single.html">Uveden novi zakon o hazmatskim odjelima</a></h4>
              &nbsp;
              <i className="far fa-calendar">2021</i>
            </div>
          </div>
  
  
  
        </div>
  
      </div>
     );
   }
}

export default SLIDEM;