import React from 'react'
import styled from 'styled-components'
// import SearchForm from '../components/SearchForm'
import { Hero } from '../components'
const Home = () => {
 return (
  <MainContainer>
   <Hero />
  </MainContainer>
 )
}
const MainContainer = styled.main`
 height: 100%;
 width: 100%;

 display: grid;
 justify-content: center;
 align-items: center;
`

export default Home
