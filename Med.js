
// MEDIUM: Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));
// // prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3));
// // prints "Each person gets 2.67 slices of pizza"


function cutPizza(slices) {
    return (numOfPeople) => {
        const slicesEach = (slices / numOfPeople);
        const partOfSlice = slicesEach.toFixed(2);
        return `Each person gets ${partOfSlice} slice of pizza`;
    }
}
const sharePizza = cutPizza(8);
console.log(sharePizza(2));
console.log(sharePizza(3));
