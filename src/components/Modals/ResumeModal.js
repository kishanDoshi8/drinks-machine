import React, { useState, useEffect } from 'react'
import { formatAmountWithSymbol } from '../../formats';

export default function ResumeModal({ isShowing, toggle, orders }) {

    const [totalAmount, setTotalAmount] = useState(0)
    
    useEffect(() => {
        let total = 0;
        orders.forEach(order => {
            total += order.cost * order.quantity;
        })
        
        setTotalAmount(total);
    }, [orders])
    
    if(!isShowing) return null;

    return (
        <div className="modal">
            <div className="modal-content" >
                <button className="modal-toggle" onClick={toggle}> &times; </button>
                <h1>Cheers!</h1>
                <h2>Your order: </h2>
                <div className="orders-resume">
                    {orders.map(order => (
                        <div key={order.name} className="order-resume">
                            <div>
                                <h4 className="order-resume-name"> {order.name} <span> X {order.quantity}</span> </h4>
                                <p className="order-resume-cost">Cost: {order.cost} &#162;</p>
                            </div>
                            <div className="order-resume-total"> {order.cost * order.quantity} &#162; </div>
                        </div>
                    ))}
                    <h4 className="orders-resume-total">Total: {formatAmountWithSymbol(totalAmount)} </h4>
                </div>
                <div className="modal-btns">
                    <button className="modal-confirm" onClick={toggle} >Okay</button>
                </div>
            </div>
        </div>
    )
}