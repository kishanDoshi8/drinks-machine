export const formatAmountWithSymbol = amount => {
    if(amount > 100) return String.fromCharCode(36) + " " + amount/100
    return String.fromCharCode(162) + " " + amount 
}