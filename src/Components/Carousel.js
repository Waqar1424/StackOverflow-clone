import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import "../assets/styles.css"

import Item1Img1 from "../images/item1-img1.svg";
import Item2Img2 from "../images/item2-img2.svg";
import Item3Img3 from "../images/item3-img3.svg";
import Item4Img4 from "../images/item4-img4.svg";

import ItemTImg1 from "../images/imgT-img1.svg";
import ItemTImg2 from "../images/imgT-img2.svg";
import ItemTImg3 from "../images/imgT-img3.svg";
import ItemTImg4 from "../images/imgT-img4.svg";

import ItemThImg1 from "../images/imgTh-img1.svg";
import ItemThImg2 from "../images/imgTh-img2.svg";
import ItemThImg3 from "../images/imgTh-img3.svg";
import ItemThImg4 from "../images/imgTh-img4.svg";



const divStyle = {
  margin: '8rem',
};
const contentStyle = {
  height: '100px',
  lineHeight: '160px',
  textAlign: 'center',
};


const ExampleCarousel = () => (
  <Carousel autoplay style={divStyle}>
    <div>
    <div className='row' style={contentStyle}>
        <div className='col-12 d-flex justify-content-center carousel-img'>
           <img width="150px" height="150px" src={Item1Img1} alt=""/>
           <img width="150px" height="150px" src={Item2Img2} alt=""/>
           <img width="150px" height="150px" src={Item3Img3} alt=""/>
           <img width="150px" height="150px" src={Item4Img4} alt=""/>
        </div>
    </div>
    </div>
    <div>
    <div className='row' style={contentStyle}>
        <div className='col-12 d-flex justify-content-center carousel-img '>
           <img width="150px" height="150px" src={ItemTImg1} alt=""/>
           <img width="150px" height="150px" src={ItemTImg2} alt=""/>
           <img width="150px" height="150px" src={ItemTImg3} alt=""/>
           <img width="150px" height="150px" src={ItemTImg4} alt=""/>
        </div>
    </div>
    </div>
    <div>
    <div className='row' style={contentStyle}>
        <div className='col-12 d-flex justify-content-center carousel-img'>
           <img width="150px" height="150px" src={ItemThImg1} alt=""/>
           <img  width="150px" height="110px" src={ItemThImg2} alt=""/>
           <img  width="150px" height="110px" src={ItemThImg3} alt=""/>
           <img width="150px" height="150px" src={ItemThImg4} alt=""/>
        </div>
    </div>
    </div>
  </Carousel>
);

export default ExampleCarousel;