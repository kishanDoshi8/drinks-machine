import React from 'react'

export default function DrinksInfo({ drinks, setDrinks }) {

    return (
        <div className="products">
            <h2 className="section-title">Drinks!</h2>

            <div className="products-info">
                {drinks.map(drink => (
                    <div key={drink.name} className="product-info" >
                        <div >
                            <h4 className="product-name"> {drink.name} </h4>
                            <span className="product-cost">Cost: {drink.cost} &#162;</span>
                            <span className="product-stock">In stock: {drink.quantity} </span>
                        </div>
                        <input className="product-input" type="number" min="0" />
                    </div>
                ))}
            </div>
        </div>
    )
}
