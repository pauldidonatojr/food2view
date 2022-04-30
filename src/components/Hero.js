import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import heroBcg from '../assets/hero-bcg.jpeg'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'
import Main_Carousel from './Main_Carousel.js'
const Hero = () => {
 return (
  <Wrapper>
   <main></main>
  </Wrapper>
 )
}

const Wrapper = styled.section`
 padding: 1rem;
 height: 100%;
 min-height: 30rem;
 display: grid;
 align-items: center;
 justify-content: center;

 /* In Size Order */

 /* Extra small devices (phones, 600px and down) */
 @media only screen and (max-width: 600px) {
  main {
   margin-top: 0.5rem;
   height: 45vh;
   width: 40vh;
   background-color: blue;
  }
 }
 /* Small devices (portrait tablets and large phones, 600px and up) */
 @media only screen and (min-width: 600px) {
  main {
   margin-top: 0.5rem;
   height: 45vh;
   width: 40vh;
   background-color: green;
  }
 }
/* Medium devices *landscape tablets, 768px and up) */
 @media only screen and (min-width: 768px) {
  main {
   margin-top: 0.5rem;
   height: 45vh;
   width: 40vh;
   background-color: orange;
  }
 }
/* Large devices (lapto/desktops, 992px and up) */
 @media only screen and (min-width: 992px) {
  main {
   margin-top: 0.5rem;
   height: 45vh;
   width: 40vh;
   background-color: purple;
  }
 }
/* Extra large devices (large laptops and desktops, 1200px and up) */
 @media only screen and (min-width: 1200px) {
  main {
   margin-top: 0.5rem;
   height: 45vh;
   width: 40vh;
   background-color: red;
  }
 }
`

export default Hero
