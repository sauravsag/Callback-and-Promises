function multiplyWithCallback(numbers, callback) {
    const result = numbers.map(number => number * 2);
    callback(result);
}

const numbers = [1, 2, 3, 4, 5];

multiplyWithCallback(numbers, (result) => {
    console.log('Result:', result);
});
