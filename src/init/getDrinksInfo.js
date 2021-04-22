class Drink {
    constructor(id, name, cost, stock) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.stock = stock;
    }
}

export const getDrinksInfo = () => {
    const coke = new Drink(1, 'Coke', 25, 5);
    const pepsi = new Drink(2, 'Pepsi', 36, 15);
    const soda = new Drink(3, 'Soda', 45, 3);
    // const appleJuice = new Drink(4, 'Apple Juice', 89, 5);

    return [coke, pepsi, soda];
    // return [coke, pepsi, soda, appleJuice];
}