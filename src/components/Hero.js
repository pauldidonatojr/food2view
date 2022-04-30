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
 min-height: 80vh;
 display: grid;
 align-items: center;
 justify-content: center;

 main {
  margin-top: 2rem;
  height: 45vh;
  width: 40vh;
  background-color: blue;
 }
`

export default Hero
