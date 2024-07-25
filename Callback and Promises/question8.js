function racePromises(promises) {
    return Promise.race(promises);
}

// Example usage:
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 resolved'), 500);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promise 2 rejected'), 300);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 700);
});

racePromises([promise1, promise2, promise3])
    .then(result => {
        console.log('First resolved or rejected promise result:', result);
    })
    .catch(error => {
        console.error('First resolved or rejected promise error:', error);
    });
