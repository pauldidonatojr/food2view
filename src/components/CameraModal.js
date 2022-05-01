import React from 'react'
import { useModalContext } from '../context/modal_context'
import { FaCamera } from 'react-icons/fa'
import styled from 'styled-components'
const CameraModal = () => {
 const { isModalOpen, closeModal } = useModalContext()
 return (
  <Wrapper>
   <div
    className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}
   >
    <div className="modal-container">
     <h3>modal content</h3>
     <button className="close-modal-btn" onClick={closeModal}>
      <FaCamera></FaCamera>
     </button>
    </div>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.div`
 .show-modal {
  visibility: visible;
  z-index: 10;
 }
 .modal-container {
  background: var(--clr-white);
  border-radius: var(--radius);
  width: 90vw;
  height: 30vh;
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
`
export default CameraModal
