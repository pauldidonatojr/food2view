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
 height: 80vh;
`

export default Home
