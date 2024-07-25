function fetchMultipleData(urls) {
    const fetchPromises = urls.map(url => fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    }));

    return Promise.all(fetchPromises);
}

const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5'
];

fetchMultipleData(urls)
    .then(dataArray => {
        console.log('Fetched data:', dataArray);
    })
    .catch(error => {
        console.error('Error:', error);
    });
