# Character Application

This project is a web application based on Nodejs and MongoDB. This project uses [JWT](https://jwt.io/) for authentication.

## To deploy and run locally, follow the below steps

1. Install [npm, node](https://www.npmjs.com/get-npm) and [mongodb](https://docs.mongodb.com/manual/installation/) for your environment and make sure `mongodb` is up and running
2. Clone this repo into your file system
3. Edit `config/default.json` to provide mongodb credentials
4. Start the web application server from the root folder of this repo

    ```
    npm start
    ```
    **Note:** by default the web application server starts on port `5000`
5. For making the below API requests, you can use the `postman/Character API Requests.postman_collection.json` to import into your `postman` instance to use as a template
6. **Create admin user** - `POST` request to `http://localhost:5000/api/users` with the following `json`
    ```json
    {
        "name": "your name",
	    "email":  "yourusername@gmail.com",
	    "password": "pleasechangethis"
    }
    ```
    **Note** : This step is currently kept as a public API request for convinience, this method should be private for a production environment
7. **Get authentication token** - `POST` to `http://localhost:5000/api/auth` 
    ```json
    {
	    "email":  "yourusername@gmail.com",
	    "password": "pleasechangethis"
    }
    ```
    This will return with an authentication token as shown below that expires in 1 hour.
    ```json
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZDFiY2Y2ZDhjNDAxZTZmZWY0NDI0MSIsImlhdCI6MTYwNzU4MjE0MywiZXhwIjoxNjA3NTg1NzQzfQ.YqSMmlkb1xX-pT9GSHKvxaxegSwnejQMVsorZCFkNqg"
    }
    ```
    You will need to use this token for requests that need authentication like creating a character (Step 8), updating a character (Step 10) and deleting a character (Step 11)

8. **Add a character** - `POST` request to `http://localhost:5000/api/characters` with the following `json` 
    ```json
    {
        "name": "Harry Potter",
        "birth_date": "07/31/1980",
        "gender": "Male",
        "height": 170,
        "weight": 80,
        "home_location": "Hogwarts"    
    }
    ```
    Include the authentication token header `x-auth-token` with the value of token you have received in **Step 7** 
    
    This will  return the saved character with their unique `_id`
9. **Get all characters** - `GET` `http://localhost:5000/api/characters`. This will return all characters with their `_id`
10. **Update a character** - `PUT` `http://localhost:5000/api/characters` with the character `_id` value in the body
    ```json
    {
    "_id":"5fd19041c3b954de6e2ddbe0",
    "name": "Hero",
    "birth_date": "10/02/2001",
    "gender": "Male",
    "height": 200,
    "weight": 210,
    "home_location": "Indiana"    
    }
    ```
    Include the authentication token header `x-auth-token` with the value of token you have received in **Step 7** 

11. **Delete a character** - `DELETE` `http://localhost:5000/api/characters/:_id` 
 
    Include the authentication token header `x-auth-token` with the value of token you have received in **Step 7** 