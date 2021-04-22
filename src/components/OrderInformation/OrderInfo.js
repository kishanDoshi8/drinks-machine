import React, { useState, useEffect } from 'react'
import { formatAmountWithSymbol } from '../../formats';

export default function OrderInfo({ orders }) {
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        let total = 0;
        orders.forEach(order => {
            total += order.cost * order.quantity;
        })

        setTotalAmount(total);
    }, [orders])

    return (
        <div className="order-details">
            <h2 className="section-title">Order details!</h2>
            <div className="order-detail">
                {orders.map(order => (
                    <div className="order" key={order.id}>
                        <div>
                            <h4 className="order-product-name"> {order.name} <span> X {order.quantity}</span> </h4>
                            <p className="order-product-cost">Cost: {order.cost} &#162;</p>
                        </div>
                        <div className="order-product-total"> {order.cost * order.quantity} &#162; </div>
                    </div>
                ))}
                <h4 className="order-total">Total: {formatAmountWithSymbol(totalAmount)} </h4>
            </div>
        </div>
    )
}
