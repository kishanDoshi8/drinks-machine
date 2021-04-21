import React, { useState, useEffect } from 'react';

export default function CoinsInfo({coins}) {

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
            <h1 className="section-title">You have</h1>
            <div className="coins-info">
                {coins.map((coin) => (
                    <div key={coin.amount} className="coin-info">
                        <h4 className="coin-name">{coin.name}</h4>
                        <p className="coin-quantity">{coin.quantity}</p>
                        <p className="coin-total"> {coin.amount * coin.quantity} <i className="fas fa-dollar-sign"></i></p>
                    </div>
                ))}
                <div className="coin-info">
                    <h4 className="coin-name">Total</h4>
                    <p className="coin-quantity">{totalAmount} <i className="fas fa-dollar-sign"></i></p>
                </div>
            </div>
        </>
    )
}
