const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * (0.8/127.9);
    return valueInPound;
}
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * (127.9/1.2);
    return valueInYen;
}
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3));
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };