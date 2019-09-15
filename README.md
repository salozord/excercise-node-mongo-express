# excercise-node-mongo-express
Simple API Rest exercise with Node.js, Express and MongoDB.
Made By: Santiago Salazar Alvarez

## Description
### purpose
This exercise was made to simulate a simple API Rest with data about different countries. This data comes from a JSON file, located in the following URL: [countriesall.json](https://gist.githubusercontent.com/josejbocanegra/4c553e3b5f1aae1f05ea67068f058087/raw/9f1ec3f2b48cf59ed3c3c4b01d15d1a23b25f57c/countriesall.json).
The purpose of this exercise is to practice with the usage of Node.js and Express with a noSQL database: MongoDB.

### API points
The API is defined in the following routes:
* \[GET\] --> / --> Root access to de API with welcoming message.
* \[GET\] --> /countries --> Get all the countries in the database.
* \[GET\] --> /countries/:id --> Get the country with the specified id  from the database (Where :id is the name of the country).
* \[POST\] --> /countries --> Creates a new country in the database based on the json sent through the request's body.
* \[PUT\] --> /countries/:id --> Updates the country with the specified id in the database (Where :id is the name of the country).
* \[DELETE\] --> /countries/:id --> Deletes the country with the specified id from the database (Where :id is the name of the country).

## Instructions
1. Install the dependencies with ```npm install``` or individually with ```npm install express```, ```npm install mongodb``` & ```npm install body-parser```
2. Run the program with ```npm start``` or ```node index.js``` from the root directory.

Notice that the API works with the database from the local machine where it is ran, the name of the database is ```countries``` and the name of the collection which has to have the documents based on ```countriesall.json``` is ```countriesall```.
To run the postman collections, import the collection ```Tests Exercise Node-Mongo-Express.postman_collection.json``` into postman and then run it.
