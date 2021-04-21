import './App.css';
import CoinsInfo from './components/CoinsInformation/CoinsInfo';
import { useState, useEffect } from 'react';
import { getCoinsInfo } from './init/getCoinsInfo';

function App() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        setCoins(getCoinsInfo());
    }, [])

    return (
        <div className="App">
            <CoinsInfo coins={coins} />
        </div>
    );
}

export default App;
