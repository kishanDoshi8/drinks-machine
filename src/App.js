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

    useEffect(() => {
        let invalid = false;
        let product = {};
        orders.forEach(order => {
            if(order.quantity < 0 || order.quantity > order.stock) {
                console.log(order);
                invalid = true;
                product = order;
            }
        });
        
        if(invalid) {
            setError(`Invalid input value for product: ${product.name}`)
        } else {
            setError('');
        }
    }, [orders]);

    useEffect(() => {
        
        console.log(error);
    }, [error])

    const getUpdatedCoinsInfo = () => {
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

        if(totalAmount === 0) return coinsCopy;

        return [];
    }

    const getUpdatedDrinksInfo = () => {
        let drinksCopy = _.cloneDeep(drinks);
        return drinksCopy.map(drink => {
            let currentOrder = orders.find(d => d.id === drink.id);
            if(currentOrder) {
                let d = {
                    ...drink,
                    stock: currentOrder.stock - currentOrder.quantity,
                }
                delete d.quantity;
                return d;
            } else {
                return drink;
            }
        })
    }

    const confirmOrder = () => {
        // Get updated inventory and validate
        let coinsUpdated = getUpdatedCoinsInfo();
        let drinksUpdated = getUpdatedDrinksInfo();
        
        // Inventory validation
        if(coinsUpdated.length === 0) return setError('Not sufficient change in the inventory.');
        if(drinksUpdated.length === 0) return setError('Drink is sold out, your purchase cannot be processed');

        // Inventory updation
        setCoins([...coinsUpdated]);
        setDrinks([...drinksUpdated]);
        setOrders([]);

        // Show orders resume
    }


    return (
        <div className="App container">
            <CoinsInfo coins={coins} />
            <div className="products-order">
                <DrinksInfo drinks={drinks} setOrders={setOrders} />
                <OrderInfo orders={orders}/>
            </div>
            <GetDrinks disabled={error || orders.length === 0 ? true : false} toggleModal={toggle} />
            <GetDrinksModal isShowing={isShowing} toggle={toggle} orders={orders} confirmOrder={confirmOrder} />
        </div>
    );
}

export default App;
