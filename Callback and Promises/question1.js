function sumAsync(num1, num2, callback) {
    setTimeout(() => {
        const sum = num1 + num2;
        callback(sum);
    }, 1000);
}

sumAsync(3, 4, (result) => {
    console.log(`The sum is: ${result}`);
});
