class Drink {
    constructor(name, cost, quantity) {
        this.name = name;
        this.cost = cost;
        this.quantity = quantity;
    }
}

export const getDrinksInfo = () => {
    const coke = new Drink('Coke', 25, 5);
    const pepsi = new Drink('Pepsi', 36, 15);
    const soda = new Drink('Soda', 45, 3);

    return [coke, pepsi, soda];
}