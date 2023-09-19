import "dotenv/config.js"
import "../../config/database.js"
import User from "../User.js"

let users = [
    {
        // "_id": 1,
        "email": "guille980627@stackcomerce.co",
        "password":"hola1234",
        "name":"Guillermo Duque",
        "address":"N/A",
        "role": 2
    },
    {
        // "_id": 2,
        "email": "haroldalzate99@stackcomerce.co",
        "password":"hola1234",
        "name":"Harold Alzare",
        "address":"N/A",
        "role": 2
    },
     {
        // "_id": 3,
        "email": "dcarolinahdev@stackcomerce.co",
        "password":"hola1234",
        "name":"Diana Carolina Hernandez",
        "address":"N/A",
        "role": 1
    },
    {
        // "_id": 5,
        "email": "rmgonzalez289@stackcomerce.co",
        "password":"hola1234",
        "name":"Estefanía Marín",
        "address":"N/A",
        "role": 2
    },
    {
        // "_id": 6,
        "email": "santiagogutierre8@stackcomerce.co",
        "password":"hola1234",
        "name":"Santiago Gutierrez Serna",
        "address":"N/A",
        "role": 1
    },
    {
        // "_id": 7,
        "email": "stiven1432@stackcomerce.co",
        "password":"hola1234",
        "name":"Stiven",
        "address":"N/A",
        "role": 1
    }
]

User.insertMany(users)
console.log("Users created!")