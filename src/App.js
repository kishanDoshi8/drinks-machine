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
import _ from 'lodash';

function App() {
    const [coins, setCoins] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [orders, setOrders] = useState([]);

    const[error, setError] = useState('');

    const { isShowing, toggle } = useModal();

    useEffect(() => {
        // Sort the coins in descending order to its value
        let c = getCoinsInfo().sort((a, b) => b.amount - a.amount);
        setCoins(c);
        setDrinks(getDrinksInfo());
    }, []);

    // useEffect(() => {
    //     console.log(coins);
    // }, [coins]);

    useEffect(() => {

    }, [error]);

    const confirmOrder = () => {
        // Get the total amount
        let totalAmount = 0;
        orders.forEach(order => {
            totalAmount += order.cost * order.quantity;
        });

        // Deep clone of coins array
        let coinsCopy = _.cloneDeep(coins);

        for(let i=0; i<coinsCopy.length; i++) {
            while(coinsCopy[i].quantity && totalAmount && coinsCopy[i].amount <= totalAmount) {
                totalAmount -= coinsCopy[i].amount;
                --coinsCopy[i].quantity;
            }
        }

        // Only update coins if there is enough change in the inventory or else show error.
        if(totalAmount === 0) {
            setCoins([...coinsCopy]);
            toggle();
        } else {
            setError('Not sufficient change in the inventory.')
        }
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
