export const formatAmountWithSymbol = amount => {
    if(amount > 100) return amount/100 + " " +String.fromCharCode(36);
    return amount + " " + String.fromCharCode(162);
}