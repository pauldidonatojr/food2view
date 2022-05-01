import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import heroBcg from '../assets/hero-bcg.jpeg'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'
import Main_Carousel from './Main_Carousel.js'
const Hero = () => {
 return (
  <Wrapper>
   <div className="form-control">
    <input
     type="text"
     name="text"
     placeholder="search"
     className="search-input"
     value="search"
     //   onChange={updateFilters}
    />
   </div>
   <div className="container">
    <div className="card">
      <div class="imgBx">
      <img src="https://assets.codepen.io/4164355/shoes.png" alt="code" />
     </div>
     <div class="contentBx">
      <h2>Nike Shoes</h2>

      <div class="color">
       <h3>Color :</h3>
       <span></span>
       <span></span>
       <span></span>
      </div>
      <a href="/">Buy Now</a>
     </div>
    </div>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.div`
 display: grid;
 align-items: center;
 justify-content: center;
 grid-gap: 3rem;
 /* In Size Order */
 .container {
  .card {
   position: relative;
   width: 100%;
   height: 100%;
   background: #232323;
   border-radius: 20px;
   overflow: hidden;
  }
  .card:before {
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: black;

   transition: 0.5s ease-in-out;
  }
  .card:after {
   content: 'Nike';
   position: absolute;
   top: 30%;
   left: -20%;
   font-size: 12em;
   font-weight: 800;
   font-style: italic;
   color: rgba(255, 255, 25, 0.05);
  }
  .card .imgBx {
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   z-index: 10000;
   width: 100%;
   height: 220px;
   transition: 0.5s;
  }
  .card:hover .imgBx {
   top: 0%;
   transform: translateY(0%);
  }
  .card .imgBx img {
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%) rotate(-25deg);
   width: 270px;
  }
  .card .contentBx {
   position: absolute;
   bottom: 0;
   width: 100%;
   height: 100px;
   text-align: center;
   transition: 1s;
   z-index: 10;
  }
  .card:hover .contentBx {
   height: 210px;
  }
  .card .contentBx h2 {
   position: relative;
   font-weight: 600;
   letter-spacing: 1px;
   color: #fff;
   margin: 0;
  }
  .card .contentBx .size,
  .container .card .contentBx .color {
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 8px 20px;
   transition: 0.5s;
   opacity: 0;
   visibility: hidden;
   padding-top: 0;
   padding-bottom: 0;
  }
  .card:hover .contentBx .size {
   opacity: 1;
   visibility: visible;
   transition-delay: 0.5s;
  }
  .card:hover .contentBx .color {
   opacity: 1;
   visibility: visible;
   transition-delay: 0.6s;
  }
  .card .contentBx .size h3,
  .container .card .contentBx .color h3 {
   color: white;
   font-weight: 300;
   font-size: 14px;
   text-transform: uppercase;
   letter-spacing: 2px;
   margin-right: 10px;
  }
  .card .contentBx .size span {
   width: 26px;
   height: 26px;
   text-align: center;
   line-height: 26px;
   font-size: 14px;
   display: inline-block;
   color: #111;
   background: #fff;
   margin: 0 5px;
   transition: 0.5s;
   color: #111;
   border-radius: 4px;
   cursor: pointer;
  }
  .card .contentBx .color span {
   width: 20px;
   height: 20px;
   background: #ff0;
   border-radius: 50%;
   margin: 0 5px;
   cursor: pointer;
  }
  .card .contentBx .color span:nth-child(2) {
   background: #9bdc28;
  }
  .card .contentBx .color span:nth-child(3) {
   background: #03a9f4;
  }
  .card .contentBx .color span:nth-child(4) {
   background: #e91e63;
  }
  .card .contentBx a {
   display: inline-block;
   padding: 10px 20px;
   background: #fff;
   border-radius: 4px;
   margin-top: 10px;
   text-decoration: none;
   font-weight: 600;
   color: #111;
   opacity: 0;
   transform: translateY(50px);
   transition: 0.5s;
   margin-top: 0;
  }
  .card:hover .contentBx a {
   opacity: 1;
   transform: translateY(0px);
   transition-delay: 0.75s;
  }
 }
 /* Extra small devices (phones, 600px and down) */
 @media only screen and (max-width: 600px) {
  padding: 2rem;
  .container {
   height: 45vh;
   width: 40vh;
  }
 }
 /* Small devices (portrait tablets and large phones, 600px and up) */
 @media only screen and (min-width: 600px) {
  padding: 3rem;

  .container {
   height: 50vh;
   width: 45vh;
  }
  .search-input {
   width: 100%;
  }
 }
 /* Medium devices *landscape tablets, 768px and up) */
 @media only screen and (min-width: 768px) {
  .container {
   height: 55vh;
   width: 50vh;
  }
 }
 /* Large devices (lapto/desktops, 992px and up) */
 @media only screen and (min-width: 992px) {
  .container {
   height: 60vh;
   width: 55vh;
  }
 }
 /* Extra large devices (large laptops and desktops, 1200px and up) */
 @media only screen and (min-width: 1200px) {
  .container {
   height: 65vh;
   width: 65vh;
  }
 }
`

export default Hero
