import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const url = 'https://temp-server.netlify.app/api/3-airtable'
const Hero = () => {
 const [products, setProducts] = useState([])
 const fetchData = async () => {
  try {
   const { data } = await axios.get(url)
   setProducts(data)
  } catch (error) {}
 }

 useEffect(() => {
  fetchData()
 }, [])

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
   {/* {products.map((product) => {
    const { id, name, url, category, location } = product
    return (
     <article className="product" key={id}>
      <img src={url} alt={name} />
      <div className="info">
       <h5> {name}</h5>
       <h5> {category}</h5>
       <h5> {location}</h5>
      </div>
     </article>
    )
   })} */}

   {products.map((product) => {
    const { id, name, url, category, location } = product
    return (
     <div className="container" key={id}>
      <div
       className="card"
       style={{
        background: `url(${url}) no-repeat center center`,
        backgroundSize: `cover`,
       }}
      >
       {/* <div className="imgBx">
        <img src={url} alt={name} />
       </div> */}

       <div className="contentBx">
        <h1>{name}</h1>

        <div className="color">
         <h3>{category}</h3>
         <h3>{location}</h3>
         <a href="/">View</a>
        </div>
       </div>
      </div>
     </div>
    )
   })}
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
   border-radius: 20px;
   overflow: hidden;
   display: grid;
   align-items: center;
  }
  .card:before {
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;

   transition: 0.5s ease-in-out;
  }
  .card:after {
   position: absolute;
   top: 20%;
   left: -20%;
   font-size: 12em;
   font-weight: 800;
   font-style: italic;
   background: blue;
  }
  .card .imgBx {
   top: 50%;
   transform: translateY(-50%);
   z-index: 10000;
   width: 100%;
   height: 220px;
   transition: 0.5s;
  }
  .card:hover .imgBx {
   transform: translateY(0%);
  }
  .card .imgBx img {
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 270px;
  }
  .card .contentBx {
   position: absolute;
   width: 28vh;
   height: 250px;
   margin-bottom: 2rem;
   text-align: center;
   transition: 1s;
   z-index: 10;
   background-color: var(--mainBlack);
   border-radius: 10%;
   font-family: roboto;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .card:hover .contentBx {
   height: 100%;
   display: grid;
   grid-gap: 1.5rem;
   width: 20vh;

   border-radius: 0;
   margin-bottom: 0rem;
   margin-left: 0rem;
  }
  .card .contentBx h1 {
   position: relative;
   font-weight: 600;
   letter-spacing: 1px;
   border-radius: 20%;
   color: var(--mainWhite);
   margin: 0;
   margin-bottom: 2rem;
  }

  .color {
   margin-top: 1rem;
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
  h3 {
   color: var(--offWhite);
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

  .card .contentBx {
   margin-left: 3rem;
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
  .card .contentBx {
   margin-left: 3rem;
  }
 }
 /* Medium devices *landscape tablets, 768px and up) */
 @media only screen and (min-width: 768px) {
  .container {
   height: 55vh;
   width: 50vh;
  }
  .card .contentBx {
   margin-left: 3rem;
  }
 }
 /* Large devices (lapto/desktops, 992px and up) */
 @media only screen and (min-width: 992px) {
  .container {
   height: 55vh;
   width: 55vh;
   margin-right: 10rem;
  }
  .search-input {
   width: 25rem;
  }
  .card .contentBx {
   margin-left: 7rem;
  }
 }
 /* Extra large devices (large laptops and desktops, 1200px and up) */
 @media only screen and (min-width: 1200px) {
  .container {
   height: 65vh;
   width: 60vh;
   margin-right: 8rem;
  }
  margin-left: 12rem;
 }
`

export default Hero
