import React, { useState, useEffect } from 'react'
import data from '../data/bio_data'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

function Carousel() {
 const [people, setPeople] = useState(data)
 const [index, setIndex] = useState(0)

 useEffect(() => {
  let slider = setInterval(() => {
   setIndex((oldIndex) => {
    let index = oldIndex + 1
    if (index > people.length - 1) {
     index = 0
    }
    return index
   })
  }, 5000)
  return () => clearInterval(slider)
 }, [index])

 return (
  <Wrapper>
   <div className="section-center-1">
    {people.map((person, personIndex) => {
     const { id, image, text } = person
     let position = 'nextSlide'
     if (personIndex === index) {
      position = 'activeSlide'
     }
     if (
      personIndex === index - 1 ||
      (index === 0 && personIndex === people.length - 1)
     ) {
      position = 'latSlide'
     }
     return (
      <article className={position} key={id}>
       <div className="img-container">
        <Link to="/bio">
         {' '}
         <img src={data[0].image} alt="molly" className="person-img" />
        </Link>
       </div>
       <p className="text">{text}</p>
      </article>
     )
    })}
   </div>
  </Wrapper>
 )
}

export default Carousel

const Wrapper = styled.article`
 padding: 0.3rem 0.3rem;
 border-radius: var(--radius);
 box-shadow: var(--light-shadow);
 transition: var(--transition);
 text-align: center;
 min-height: 50vh;
 display: grid;
 place-items: center;
 .section-center-1 {
  margin: 0 auto;

  width: 60vw;
  /* have to have a height */
  height: 450px;
  max-width: 800px;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;
 }
 .container {
  width: 80vw;
  max-width: var(--fixed-width);
 }
 .review {
 }
 .review:hover {
  box-shadow: var(--dark-shadow);
 }
 .img-container {
  position: relative;
  width: 30vh;
  height: 30vh;
  border-radius: 50%;
  margin: 0 auto;
 }
 .person-img {
  width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
 }
 .person-img:hover {
  opacity: 0.5;
 }

 .text {
  max-width: 35em;
  margin: 0 auto;
  margin-top: 0.1rem;
  line-height: 2;
  color: var(--clr-grey-5);
  font-size: 0.8rem;
  font-weight: bold;
 }
 .text:hover {
  opacity: 0.3;
 }

 article {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: var(--transition);
 }
 article.activeSlide {
  opacity: 1;
  transform: translateX(0);
 }
 article.lastSlide {
  transform: translateX(-100%);
 }
 article.nextSlide {
  transform: translateX(100%);
 }
`
