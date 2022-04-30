import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import heroBcg from '../assets/hero-bcg.jpeg'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'
import Main_Carousel from './Main_Carousel.js'
const Hero = () => {
 return (
  <Wrapper>
   <main></main>
   <main></main>
   <main></main>
   <main></main>
  </Wrapper>
 )
}

const Wrapper = styled.section`
 height: 100%;
 min-height: 30rem;
 display: grid;
 align-items: center;
 justify-content: center;
 grid-gap: 2rem;
 /* In Size Order */

 /* Extra small devices (phones, 600px and down) */
 @media only screen and (max-width: 600px) {
  padding: 2rem;
  main {
   height: 45vh;
   width: 40vh;
   background-color: blue;
  }
 }
 /* Small devices (portrait tablets and large phones, 600px and up) */
 @media only screen and (min-width: 600px) {
  padding: 3rem;
  main {
   height: 50vh;
   width: 45vh;
   background-color: green;
  }
 }
 /* Medium devices *landscape tablets, 768px and up) */
 @media only screen and (min-width: 768px) {
  main {
   height: 45vh;
   width: 40vh;
   background-color: orange;
  }
 }
 /* Large devices (lapto/desktops, 992px and up) */
 @media only screen and (min-width: 992px) {
  main {
   height: 45vh;
   width: 40vh;
   background-color: purple;
  }
 }
 /* Extra large devices (large laptops and desktops, 1200px and up) */
 @media only screen and (min-width: 1200px) {
  main {
   height: 45vh;
   width: 40vh;
   background-color: red;
  }
 }
`

export default Hero
