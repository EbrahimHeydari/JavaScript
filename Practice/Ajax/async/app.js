const http = new easyHTTP;

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function (error, response) {
    error ? console.log(error) : console.log(response)
})

// Get Single Post
http.get('https://jsonplaceholder.typicode.com/posts/1', function (error, response) {
    error ? console.log(error) : console.log(response)
})


// Create Data
const data = {
    title: 'Custom Post',
    body: 'this is a custom post'
}

// Create Post
http.post('https://jsonplaceholder.typicode.com/posts/1', data, function (error, post) {
    error ? console.log(error) : console.log(post)
})


// Update Post
http.put('https://jsonplaceholder.typicode.com/posts/5', data, function (error, post) {
    error ? console.log(error) : console.log(post);
})


// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/5', function(error, response) {
    error ? console.log(error) : console.log(response)
})