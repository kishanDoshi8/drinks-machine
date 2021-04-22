import React, { useState, useEffect } from 'react';
import { formatAmountWithSymbol } from '../../formats';

export default function CoinsInfo({ coins }) {

    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        let total = 0;
        coins.forEach(coin => {
            total += coin.amount * coin.quantity;
        })
        setTotalAmount(total);
    }, [coins]);

    return (
        <>
            <h2 className="section-title">You have</h2>
            <div className="coins-info">
                {coins.map((coin) => (
                    <div key={coin.amount} className="coin-info">
                        <h4 className="coin-name">{coin.name}</h4>
                        <p className="coin-quantity">{coin.quantity}</p>
                        <p className="coin-total"> {String.fromCharCode(36) + " " + (coin.amount * coin.quantity)/100} </p>
                    </div>
                ))}
                <div className="coin-info">
                    <h4 className="coin-name">Total</h4>
                    <p className="coin-quantity">{formatAmountWithSymbol(totalAmount)} </p>
                </div>
            </div>
        </>
    )
}
