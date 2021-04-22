import React from 'react'

export default function DrinksInfo({ drinks, setOrders }) {

    const onChange = e => {
        // Get drink data
        let drink = drinks.find(d => d.id === +e.target.id);
        // Create an order object
        let order = {
            ...drink,
            quantity: +e.target.value
        }
        // Update Orders array
        // If the new value is zero remove it from the orders list
        if(+e.target.value === 0) {
            setOrders(prev => [...prev.filter(o => o.id !== +e.target.id)]);

            return;
        }
        // Else update the orders
        setOrders(prev => {
            if(prev.find(d => d.id === +e.target.id)) {
                return [...prev.map(o => o.id === +e.target.id ? order : o)]
            } else {
                return [...prev, order];
            }
        });
    }

    return (
        <div className="products">
            <h2 className="section-title">Drinks!</h2>

            <div className="products-info">
                {drinks.map(drink => (
                    <div key={drink.id} className="product-info" >
                        <div >
                            <h4 className="product-name"> {drink.name} </h4>
                            <span className="product-cost">Cost: {drink.cost} &#162;</span>
                            <span className="product-stock">In stock: {drink.quantity} </span>
                        </div>
                        <input className="product-input" type="number" min="0" max={drink.quantity} name={drink.name} id={drink.id} onChange={e => onChange(e)} />
                    </div>
                ))}
            </div>
        </div>
    )
}
