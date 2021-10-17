const http = new easyHTTP;

// Get users
const users = http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(error => console.log(error))

console.log(users);


// User Data
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
}

// Create User
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));


// Update Post
http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));