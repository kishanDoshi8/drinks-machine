import React from 'react'

export default function ErrorModal({ isShowing, toggle, error }) {
    if(!isShowing || !error) return null;
    return (
        <div className="modal">
            <div className="modal-content" >
                <button className="modal-toggle" onClick={toggle}> &times; </button>
                <h1>Whoops!</h1>
                <h2>{error}</h2>
                <div className="modal-btns">
                    <button className="modal-cancel" onClick={toggle} >Okay</button>
                </div>
            </div>
        </div>
    )
}
