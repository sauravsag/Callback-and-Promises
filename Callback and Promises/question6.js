function fetchUserDataAndPosts(userId) {
    const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    
    return fetch(userUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(userDetails => {
            return fetch(postsUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(posts => {
                    return {
                        user: userDetails,
                        posts: posts
                    };
                });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error;
        });
}

fetchUserDataAndPosts(1)
    .then(data => {
        console.log('User details:', data.user);
        console.log('User posts:', data.posts);
    })
    .catch(error => {
        console.error('Error:', error);
    });
