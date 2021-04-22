class Coin {
    constructor(id, name, amount, quantity) {
        this.id = id;
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
    let pennies = new Coin(1, 'Pennies', 1, 100);
    let nickles = new Coin(2, 'Nickles', 5, 10);
    let dimes = new Coin(3, 'Dimes', 10, 5);
    let quaters = new Coin(4, 'Quaters', 25, 25);

    return [pennies, nickles, dimes, quaters];
}