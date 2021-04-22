import React from 'react'

export default function GetDrinks({ disabled, toggleModal }) {
    return (
        <div className="get-drinks">
            <button id="get-drinks-btn" className={disabled ? 'disabled' : '' } onClick={disabled ? null : toggleModal} >Get Drinks</button>
        </div>
    )
}
