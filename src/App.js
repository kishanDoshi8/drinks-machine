import './App.css';
import CoinsInfo from './components/CoinsInformation/CoinsInfo';
import { useState, useEffect } from 'react';
import { getCoinsInfo } from './init/getCoinsInfo';
import DrinksInfo from './components/ProductsInformation/DrinksInfo';
import OrderInfo from './components/OrderInformation/OrderInfo';
import { getDrinksInfo } from './init/getDrinksInfo';
import GetDrinks from './components/OrderInformation/GetDrinks';

function App() {
    const [coins, setCoins] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setCoins(getCoinsInfo());
        setDrinks(getDrinksInfo());
    }, []);

    return (
        <div className="App container">
            <CoinsInfo coins={coins} />
            <div className="products-order">
                <DrinksInfo drinks={drinks} setOrders={setOrders} />
                <OrderInfo orders={orders}/>
            </div>
            <GetDrinks />
        </div>
    );
}

export default App;
