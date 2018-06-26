# nodejs_epam

```bash
node v8.9.1
```

Usage:
```bash
npm i

node index.js

// Send Post request to authenticate
http://localhost:3000/auth

// With body:
{
  "name": "User2",
  "password": "22"
}

// Then you can use auth token to send requests to another routes
// by adding it as value for *x-access-token* header


// Get Requests for content:

http://localhost:3000/api/products
http://localhost:3000/api/products/1

http://localhost:3000/api/users
http://localhost:3000/api/users/1
```
