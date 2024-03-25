import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ModalComponent from './components/ModalComponent'

const Modal = ({ setShowModal, title, info, onProceed, displayItem, isProceedModal, isDisplayModal }) => {

    return ReactDOM.createPortal(
        <ModalComponent setShowModal={setShowModal} title={title} info={info} onProceed={onProceed} displayItem={displayItem} isDisplayModal={isDisplayModal} isProceedModal={isProceedModal} />,
        document.querySelector('#modal')
    )
}

export default Modal