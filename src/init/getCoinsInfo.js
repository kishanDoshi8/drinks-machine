class Coin {
    constructor(name, amount, quantity) {
        this.name = name;
        this.amount = amount;
        if(quantity >= 0) {
            this.quantity = quantity;
        } else {
            this.quantity = 0;
        }
    }
}

// Add database or RestAPI queries (if any) for coins info in this method 
export const getCoinsInfo = () => {
    let pennies = new Coin('Pennies', 0.01, 100);
    let nickles = new Coin('Nickles', 0.05, 10);
    let dimes = new Coin('Dimes', 0.10, 5);
    let quaters = new Coin('Quaters', 0.25, 25);

    return [pennies, nickles, dimes, quaters];
}