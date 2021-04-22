import React, { useState, useEffect } from 'react'
import { formatAmountWithSymbol } from '../../formats';

export default function GetDrinksModal({ isShowing, toggle, orders, confirmOrder }) {

    const [totalAmount, setTotalAmount] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        let amount = 0, quantity = 0;
        orders.forEach(order => {
            amount += +order.cost * +order.quantity;
            quantity += +order.quantity;
        });
        setTotalAmount(amount);
        setTotalQuantity(quantity);
    }, [orders])

    if(!isShowing) return null;
    return (
        <div className="modal">
            <div className="modal-content" >
                <button className="modal-toggle" onClick={toggle}> &times; </button>
                <h2>Are you sure? Click confirm to make a purchase of <span>{formatAmountWithSymbol(totalAmount)}</span> for <span>{totalQuantity}</span> items</h2>
                <div className="modal-btns">
                    <button className="modal-cancel" onClick={toggle} >Cancel</button>
                    <button className="modal-confirm" onClick={confirmOrder} >Confirm</button>
                </div>
            </div>
        </div>
    )
}
