# Character NodeJs Application

This is an example project to develop a web application based on Nodejs, MongoDb.

This also demonstrates how to use JWT for authentication

## How to deploy and run locally

1. Please edit `config/default.json` to provide mongodb credentials
2. Start the server

    ```
    npm start
    ```
    Note: The server starts on port `5000`
3. Create the first User by sending a `POST` request to `http://localhost:5000/api/users` with the following `json`
    ```json
    {
        "name": "your name",
	    "email":  "yourusername@gmail.com",
	    "password": "pleasechangethis"
    }
    ```
4. Get Authentication token - `POST` to `http://localhost:5000/api/auth` 
    ```json
    {
	    "email":  "yourusername@gmail.com",
	    "password": "pleasechangethis"
    }
    ```
    This will return with an authentication token like
    ```json
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZDFiY2Y2ZDhjNDAxZTZmZWY0NDI0MSIsImlhdCI6MTYwNzU4MjE0MywiZXhwIjoxNjA3NTg1NzQzfQ.YqSMmlkb1xX-pT9GSHKvxaxegSwnejQMVsorZCFkNqg"
    }
    ```
    you will need to use this for requests that need authentication like Creating a character (Step 5) and deleting a character (Step 7)

5.  You can now start adding characters by sending a `POST` request to `http://localhost:5000/api/characters` with the following `json` 
    ```json
    {
        "name": "Hero name",
        "birth_date": "10/02/2000",
        "gender": "Male",
        "height": 170,
        "weight": 80,
        "home_location": "Hogwarts"    
    }
    ```
    NOTE: you will need authentication token for this - See **Step 4**
6. Get All Characters - `GET` `http://localhost:5000/api/characters`
7. Delete Character - `DELETE` `http://localhost:5000/api/characters/:id` - `:id` is the characters id returned after a post or a get all function

    NOTE: you will need authentication token for this - See **Step 4**


 ### Todo 

 - [ ] Update function check
 - [ ] Add instructions to install npm and mongodb
 - [ ] Test instructions in a different environment