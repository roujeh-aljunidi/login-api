# Login API

a simple node.js login and autherication APIbuilt with expresss and mongoDB.
what it does 

# features

-register a user
-login a user
-Passwords are hashed and bcrypted

## how to run 

1. instal dependenxies:
bash 
npm instal 

2. start mongodb
3. run the server using "node server.js"
the server runs on https://localhost3000

API routes 

Register 

post /api/auth/register

emxample:

bash 

curl -X POST http://localhost:3000/api/auth/register \
-H "Content-Type: application/json" \
-d '{"username":"andre","password":"password123"}'

Login post /api/auth/login

example:

bash 

curl -X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{"username":"andre","password":"password123"}'