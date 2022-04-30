import React from 'react'
import Carousel from './Carousel'
import styled from 'styled-components'
function App() {
 return (
  <Wrapper>
   <section className="container">
    <Carousel />
   </section>
  </Wrapper>
 )
}

const Wrapper = styled.main`
 .container {
  width: 60vw;
  max-width: var(--fixed-width);
 }
 @media (min-width: 992px) {
  .container {
   width: 50vw;
   max-width: var(--fixed-width);
  }
 }
`
export default App
