import React from 'react'

export default function CoinsInfo({coins}) {

    return (
        <div>
            {coins.map((coin) => (
                <div key={coin.amount}>
                    <h1>{coin.name}</h1>
                    <h4>{coin.quantity}</h4>
                </div>
            ))}
        </div>
    )
}
