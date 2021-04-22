class Drink {
    constructor(id, name, cost, quantity) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.quantity = quantity;
    }
}

export const getDrinksInfo = () => {
    const coke = new Drink(1, 'Coke', 25, 5);
    const pepsi = new Drink(2, 'Pepsi', 36, 15);
    const soda = new Drink(3, 'Soda', 45, 3);

    return [coke, pepsi, soda];
}