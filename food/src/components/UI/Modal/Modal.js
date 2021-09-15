import React from 'react'
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

const Backdrop = (props) => {
    return (
        <div className={styles.backdrop} onClick={props.onHide}/>
    )
}

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.contents}>
                {props.children}
            </div>
        </div>
    )
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onHide={props.onHide}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </React.Fragment>
    )
}

export default Modal
