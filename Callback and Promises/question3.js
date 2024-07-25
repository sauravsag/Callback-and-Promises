async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

fetchData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => {
        console.log('Fetched data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
