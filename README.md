# CustomerPreferencesJS
This is a simple implementation of a Rest API built using NodeJS and MongoDB. 

Here the endpoints currently implemented - 

###### returns all entities
GET {basePath}/api/customerpreference/ 
###### returns an entity by id
GET {basePath}/api/customerpreference/{id}
###### returns all entities for the provided customerId
GET {basePath}/api/customerpreference/customer/{customerID}
###### deletes an entity returned by the provided id
DELETE {basePath}/api/customerpreference/{id}
###### adds an entity
POST {basePath}/api/customerpreference/
example content -
content-type: application/json
{
    "customerId": 1,
    "templateId": "Single Image Ad",
    "name": "Test",
    "repeat": "daily",
    "startDate": "2019-03-02",
    "isActive": true
}

NOTE: The project does not implement any validations or API security measures.

## Steps to setup the API -
1) Open a command prompt and navigate to the project folder.
2) The API is set to run at 4180. This can be changed in app.js by assigning a different value const port. Alternatively if you are using nodemon, then change PORT setting under nodemonConfig in package.json. 
2) Run "npm install".
3) Run "node app.js" OR run "npm start" to execute app through nodemon.
4) The api should now be available at http://localhost:4180. Access the API through desired api testing tool (eg: Postman)
