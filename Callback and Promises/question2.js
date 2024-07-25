function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully.");
        }, 2000);
    });
}

getData().then((message) => {
    console.log(message);
});
