import React, { useState, useEffect } from 'react'
import { useModalContext } from '../context/modal_context'
import { FaCamera } from 'react-icons/fa'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { api_url, links } from '../utils/constants'
// import { QrReader } from 'react-qr-reader'

const api = api_url
const Hero = () => {
 const [products, setProducts] = useState([])
 const { isModalOpen, closeModal } = useModalContext()
 const [searchInput, setSearchInput] = useState('')

 const fetchData = async () => {
  const response = await fetch(api)
  const data = await response.json()
  console.log(data)
  setProducts(data)
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
    />
   </div>

   <div
    className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}
   >
    <div className="modal-container">
     <button className="close-modal-btn" onClick={closeModal}>
      <FaCamera></FaCamera>
     </button>
    </div>
   </div>
   {products.map((product) => {
    const { category, id, location, name, url } = product
    return (
     <div className="container" key={id}>
      <div className="card">
       <div className="contentBx">
        <div className="sectionBX">
         <img src={url} className="logo" alt="logo" />
         <div className="content-title" style={{ padding: '0.25rem' }}>
          {/* <p>{name}</p> */}

          {/*
          <ul className="linksBx">
           {links.map((link) => {
            const { id, text, url } = link
            return (
             <li key={id}>
              <Link to={url}> {text} </Link>
             </li>
            )
           })}
          </ul> */}
         </div>

         <div className="color">
          {/* <p>{category}</p> */}
          <p>{location}</p>
         </div>
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
 width: 100%;
 height: 100%;
 grid-gap: 3rem;
 /* In Size Order */

 .show-modal {
  visibility: visible;
  z-index: 100000000;
 }
 .qr-container {
  height: 70vh;
  width: 50vh;
  background: var(--mainGrey);
 }
 .modal-container {
  background: var(--offWhite);
  border-radius: var(--radius);
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: var(--fixed-width);
  text-align: center;
  display: grid;
  place-items: center;
  position: relative;
 }

 .close-modal-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-red-dark);
  cursor: pointer;
 }
 .container {
  .card {
   position: relative;
   width: 100%;
   height: 100%;
   border-radius: 20px;
   overflow: hidden;
   display: flex;
   align-items: center;
   justify-content: center;
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
   /* font-size: 12em;
   font-weight: 800; */
   font-style: italic;
  }

  .contentBx {
   position: absolute;

   text-align: center;
   transition: 1s;
   z-index: 10;
   border-radius: 10%;
   font-family: roboto;
   /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
   overflow-wrap: break-word;
   display: grid;
   justify-content: center;
   align-items: center;
  }
  .card:hover .contentBx {
   display: grid;
   grid-gap: 1.5rem;
   /* width: 22vh; */

   border-radius: 2%;
   margin-bottom: 0rem;
   margin-left: 0rem;
  }
  .card .contentBx p {
   position: relative;
   font-weight: 600;
   letter-spacing: 1px;
   border-radius: 20%;
   color: var(--mainWhite);
   margin: 0;
  }

  .size,
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
  /* .card:hover .contentBx .color {
   opacity: 1;
   visibility: visible;
   transition-delay: 0.6s;
  } */
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
   padding: 2.5px 10px;
   background-color: var(--mainBlack);
   border-radius: 4px;
   margin-top: 10px;
   text-decoration: none;
   font-weight: 600;
   color: white;
   opacity: 0;
   transform: translateY(50px);
   transition: 0.5s;
  }
  .card:hover .contentBx a {
   opacity: 1;
   transform: translateY(0px);
   transition-delay: 0.75s;
  }
 }
 /* .card .contentBx p {
  font-size: 2rem;
 }
 .contentBx .color p {
  font-size: 1.5rem;
 } */
 /* Extra small devices (phones, 600px and down) */
 @media only screen and (max-width: 600px) {
  padding: 2rem;
  /* .card:before {
   .color {
    display: none;
   }
  } */

  .linksBx {
   display: flex;
   justify-content: center;
   li {
    margin: 0 0.5rem;
   }
   a {
    color: var(--clr-grey-3);
    font-size: 0.65rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    padding: 0.85rem;
    &:hover {
     border-bottom: 2px solid var(--clr-primary-7);
    }
   }
  }

  img {
   width: 280px;
   display: block;
   object-fit: cover;
   height: 125px;
  }

  .card .contentBx a {
  }

  .card .contentBx .sectionBX .color {
   visibility: hidden;
  }
  .card:hover .contentBx .color {
   opacity: 1;
   visibility: visible;
   transition-delay: 0.6s;
   background-color: var(--mainBlack);
  }
  .card:after {
   position: absolute;
   top: 20%;
   left: -20%;
   /* font-size: 12em;
   font-weight: 800; */
   font-style: italic;
  }
  .container {
   height: 10rem;
   width: 50vh;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .sectionBX {
   height: 20vh;
   width: 280px;
  }
  .container .contentBx {
   height: 22vh;
   width: 25vh;
  }
  .container:hover {
   height: 35rem;

  }
  .card:hover .contentBx {
   height: 50rem;
   display: grid;

   width: 100rem;
   border-radius: 2%;
   margin-bottom: 0rem;
   margin-left: 0rem;
   .sectionBX {
    height: 90vh;
   }
   .color {
    background-color: blueviolet;
    display: grid;

    padding: 1rem;
    height: 24rem;
    width: 100%;
   }
   .content-title {
    background-color: var(--mainBlack);
    height: 6vh;
    ul {
     color: white;
     display: flex;
     font-size: 1.2rem;
     justify-content: space-around;
    }
    p {
     font-size: 0.02rem;
    }
   }
  }
  .card .contentBx p {
   font-size: 0.8rem;
  }
  .contentBx .color p {
   font-size: 0.75rem;
  }
  .contentBx .color {
   height: 20vh;
   width: 100%;
   grid-row: 2/3;
   grid-column: 2/3;
  }
  /* .content-title {
   background-color: var(--mainBlack);
   height: 6vh;
   ul {
    color: white;
    display: flex;
    font-size: 1.2rem;
    justify-content: space-around;
   }
   p {
    font-size: 0.02rem;
   }
  } */
 }
 /* Small devices (portrait tablets and large phones, 600px and up) */
 @media only screen and (min-width: 600px) {
  padding: 2rem;
  /* .card:before {
   .color {
    display: none;
   }
  } */
  img {
   width: 280px;
   display: block;
   object-fit: cover;
   height: 100px;
  }

  .card .contentBx a {
   background-color: blue;
  }

  .card .contentBx .sectionBX .color {
   visibility: hidden;
  }
  .card:hover .contentBx .color {
   opacity: 1;
   visibility: visible;
   transition-delay: 0.6s;
   background-color: var(--mainBlack);
  }
  .card:after {
   position: absolute;
   top: 20%;
   left: -20%;
   /* font-size: 12em;
   font-weight: 800; */
   font-style: italic;
  }
  .container {
   height: 45vh;
   width: 50vh;
  }
  .sectionBX {
   height: 40vh;
   width: 280px;
   background-color: var(--mainBlack);
   margin-bottom: 5rem;
  }
  .container .contentBx {
   height: 15vh;
   width: 44vh;
   background-color: green;
  }
  .card:hover .contentBx {
   height: 50vh;
   display: grid;
   background-color: white;
   width: 50vh;
   border-radius: 2%;
   margin-bottom: 0rem;
   margin-left: 0rem;
  }
  .card .contentBx p {
   font-size: 0.8rem;
  }
  .contentBx .color p {
   font-size: 0.75rem;
  }
  .contentBx .color {
   height: 10vh;
   width: 100%;
   grid-row: 2/3;
   grid-column: 2/3;
   margin-bottom: 3rem;
  }
  .content-title {
   grid-row: 1/2;
   grid-column: 2/3;
   ul {
    color: white;
    display: flex;
    font-size: 1.2rem;
    justify-content: space-around;
   }
   p {
    font-size: 0.02rem;
   }
  }
 }
 /* Medium devices *landscape tablets, 768px and up) */
 @media only screen and (min-width: 768px) {
  padding: 2rem;
  /* .card:before {
   .color {
    display: none;
   }
  } */
  img {
   width: 280px;
   display: block;
   object-fit: cover;
   height: 100px;
  }

  .card .contentBx a {
   background-color: blue;
  }

  .card .contentBx .sectionBX .color {
   visibility: hidden;
  }
  .card:hover .contentBx .color {
   opacity: 1;
   visibility: visible;
   transition-delay: 0.6s;
   background-color: var(--mainBlack);
  }
  .card:after {
   position: absolute;
   top: 20%;
   left: -20%;
   /* font-size: 12em;
   font-weight: 800; */
   font-style: italic;
  }
  .container {
   height: 45vh;
   width: 50vh;
  }
  .sectionBX {
   display: grid;
   height: 40vh;
   width: 280px;
   background-color: var(--mainBlack);
   margin-bottom: 5rem;
  }
  .container .contentBx {
   height: 15vh;
   width: 44vh;
  }
  .card:hover .contentBx {
   height: 50vh;
   display: grid;
   background-color: white;
   width: 50vh;
   border-radius: 2%;
   margin-bottom: 0rem;
   margin-left: 0rem;
  }
  .card .contentBx p {
   font-size: 0.8rem;
  }
  .contentBx .color p {
   font-size: 0.75rem;
  }
  .contentBx .color {
   height: 10vh;
   width: 100%;
   grid-row: 2/3;
   grid-column: 2/3;
   margin-bottom: 3rem;
  }
  .content-title {
   grid-row: 1/2;
   grid-column: 2/3;
   ul {
    color: white;
    display: flex;
    font-size: 1.2rem;
    justify-content: space-around;
   }
   p {
    font-size: 0.02rem;
   }
  }
 }
 /* Large devices (lapto/desktops, 992px and up) */
 @media only screen and (min-width: 992px) {
  padding: 2rem;
  /* .card:before {
   .color {
    display: none;
   }
  } */
  img {
   width: 280px;
   display: block;
   object-fit: cover;
   height: 100px;
  }

  .card .contentBx a {
   background-color: blue;
  }

  .card .contentBx .sectionBX .color {
   visibility: hidden;
  }
  .card:hover .contentBx .color {
   opacity: 1;
   visibility: visible;
   transition-delay: 0.6s;
   background-color: var(--mainBlack);
  }
  .card:after {
   position: absolute;
   top: 20%;
   left: -20%;
   /* font-size: 12em;
   font-weight: 800; */
   font-style: italic;
  }
  .container {
   height: 45vh;
   width: 50vh;
  }
  .sectionBX {
   height: 40vh;
   width: 280px;
   background-color: var(--mainBlack);
   margin-bottom: 5rem;
  }
  .container .contentBx {
   height: 15vh;
   width: 44vh;
   background-color: green;
  }
  .card:hover .contentBx {
   height: 50vh;
   display: grid;
   background-color: white;
   width: 50vh;
   border-radius: 2%;
   margin-bottom: 0rem;
   margin-left: 0rem;
  }
  .card .contentBx p {
   font-size: 0.8rem;
  }
  .contentBx .color p {
   font-size: 0.75rem;
  }
  .contentBx .color {
   height: 10vh;
   width: 100%;
   grid-row: 2/3;
   grid-column: 2/3;
   margin-bottom: 3rem;
  }
  .content-title {
   grid-row: 1/2;
   grid-column: 2/3;
   ul {
    color: white;
    display: flex;
    font-size: 1.2rem;
    justify-content: space-around;
   }
   p {
    font-size: 0.02rem;
   }
  }
 }
 /* Extra large devices (large laptops and desktops, 1200px and up) */
 @media only screen and (min-width: 1200px) {
  padding: 2rem;
  /* .card:before {
   .color {
    display: none;
   }
  } */
  img {
   width: 280px;
   display: block;
   object-fit: cover;
   height: 100px;
  }

  .card .contentBx a {
   background-color: blue;
  }

  .card .contentBx .sectionBX .color {
   visibility: hidden;
  }
  .card:hover .contentBx .color {
   opacity: 1;
   visibility: visible;
   transition-delay: 0.6s;
   background-color: var(--mainBlack);
  }
  .card:after {
   position: absolute;
   top: 20%;
   left: -20%;
   /* font-size: 12em;
   font-weight: 800; */
   font-style: italic;
  }
  .container {
   height: 45vh;
   width: 50vh;
  }
  .sectionBX {
   height: 40vh;
   width: 280px;
   background-color: var(--mainBlack);
   margin-bottom: 5rem;
  }
  .container .contentBx {
   height: 15vh;
   width: 44vh;
   background-color: green;
  }
  .card:hover .contentBx {
   height: 50vh;
   display: grid;
   background-color: white;
   width: 50vh;
   border-radius: 2%;
   margin-bottom: 0rem;
   margin-left: 0rem;
  }
  .card .contentBx p {
   font-size: 0.8rem;
  }
  .contentBx .color p {
   font-size: 0.75rem;
  }
  .contentBx .color {
   height: 10vh;
   width: 100%;
   grid-row: 2/3;
   grid-column: 2/3;
   margin-bottom: 3rem;
  }
  .content-title {
   grid-row: 1/2;
   grid-column: 2/3;
   ul {
    color: white;
    display: flex;
    font-size: 1.2rem;
    justify-content: space-around;
   }
   p {
    font-size: 0.02rem;
   }
  }
 }
`
export default Hero
