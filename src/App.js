import './App.css';
import CoinsInfo from './components/CoinsInformation/CoinsInfo';
import { useState, useEffect } from 'react';
import { getCoinsInfo } from './init/getCoinsInfo';
import DrinksInfo from './components/ProductsInformation/DrinksInfo';
import OrderInfo from './components/OrderInformation/OrderInfo';
import { getDrinksInfo } from './init/getDrinksInfo';
import GetDrinks from './components/OrderInformation/GetDrinks';
import useModal from './customHooks/useModal';
import GetDrinksModal from './components/Modals/GetDrinksModal';

function App() {
    const [coins, setCoins] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [orders, setOrders] = useState([]);

    const[error, setError] = useState('');

    const { isShowing, toggle } = useModal();

    useEffect(() => {
        setCoins(getCoinsInfo());
        setDrinks(getDrinksInfo());
    }, []);

    useEffect(() => {
        console.log(error);
    }, [error]);

    const confirmOrder = () => {
        console.log('Cheers!!');
    }

    return (
        <div className="App container">
            <CoinsInfo coins={coins} />
            <div className="products-order">
                <DrinksInfo drinks={drinks} setOrders={setOrders} setError={setError} />
                <OrderInfo orders={orders}/>
            </div>
            <GetDrinks disabled={error || orders.length === 0 ? true : false} toggleModal={toggle} />
            <GetDrinksModal isShowing={isShowing} toggle={toggle} orders={orders} confirmOrder={confirmOrder} />
        </div>
    );
}

export default App;
