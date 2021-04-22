import React from 'react'

export default function GetDrinks({ disabled }) {
    return (
        <div className="get-drinks">
            <button id="get-drinks-btn" className={disabled ? 'disabled' : '' }>Get Drinks</button>
        </div>
    )
}
