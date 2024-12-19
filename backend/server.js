// const express = require('express')
// const cors = require('cors')
// const app = express()
// const port = process.env.PORT || 3000

// const path = require('path')
// const dbPath = path.join(__dirname,'./bank-database.db')

// const {open} = require('sqlite')
// const sqlite3 = require('sqlite3')
// app.use(express.json())
// app.use(cors())

// let db



// const initializeDBAndServer = async() =>{
//     try {
//         db =await open({
//             filename:dbPath,
//             driver:sqlite3.Database
//         })
//         app.listen(port , ()=>{
//             console.log(`server is running at http://localhost:${port}/`);
//         })
//     } catch (error) {
//         console.log(error); 
//     }  
// }



// initializeDBAndServer()





// app.get('/',async(req,res)=>{
//     res.send('server is started and working')
// })

// app.get('/accounts/',async(request,response)=>{
//     const accountsQuery = `SELECT * FROM Customers;`;
//     const accountsData = await db.all(accountsQuery)
//     response.send(accountsData)
//     console.log('server called');
    
// })

// app.post('/accounts/',async(request,response)=>{
//     const {name,age,mobileNumber,dateOdBirth,email,accountType} = request.body
//     console.log(name,age,mobileNumber,dateOdBirth,email,accountType);
    
// })




const express = require('express');
const cors = require('cors');
const path = require('path');
const { open } = require('sqlite');
const sqlite3 = require('sqlite3');
const morgan = require('morgan')

const app = express();
const port = process.env.PORT || 3000;
const dbPath = path.join(__dirname, './bank-database.db');

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

let db;

// Initialize database and server
const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}/`);
    });
  } catch (error) {
    console.error('Failed to start the server:', error);
    process.exit(1); // Exit the process with failure code
  }
};

initializeDBAndServer();

// Routes

// Default route
app.get('/', async (req, res) => {
  res.send('Server is started and working');
});

// GET: Fetch all customer accounts
app.get('/accounts/', async (req, res) => {
  try {
    const accountsQuery = `SELECT * FROM Customers;`;
    const accountsData = await db.all(accountsQuery);
    res.status(200).json(accountsData);
  } catch (error) {
    console.error('Error fetching accounts:', error);
    res.status(500).json({ error: 'Failed to fetch accounts' });
  } 
});



// app.post('/accounts/',async(request,response)=>{
//     const {firstname,lastname,dateOfBirth,gender,address,phoneNumber,email,aadharNumber} = request.body
//     console.log(firstname,lastname,dateOfBirth,phoneNumber);
//     const insertQuery = `INSERT INTO Customers(FirstName,LastName,DOB,Gender,Address,PhoneNumber,Email,AadhaarNumber)
//         VALUES('${firstname}','${lastname}','${dateOfBirth}','${gender}','${address}','${phoneNumber}','${email}','${aadharNumber}');`;
//         const result = await db.run(insertQuery);
//         response.status(201).json({message:'Customer account created'})
  
   
// })
  


app.post('/accounts/', async (request, response) => {
    try {
      const {
        firstname,
        lastname,
        dateOfBirth,
        gender,
        address,
        phoneNumber,
        email,
        aadharNumber,
      } = request.body;
  
      console.log(firstname, lastname, dateOfBirth, phoneNumber);
  
      const insertQuery = `
        INSERT INTO Customers(FirstName, LastName, DOB, Gender, Address, PhoneNumber, Email, AadhaarNumber)
        VALUES('${firstname}', '${lastname}', '${dateOfBirth}', '${gender}', '${address}', '${phoneNumber}', '${email}', '${aadharNumber}');
      `;
  
      const result = await db.run(insertQuery);
  
      response.status(201).json({ message: 'Customer account created' });
    } catch (error) {
      console.error('Error creating customer account:', error.message);
  
      // Error response
      response.status(500).json({
        error: 'Failed to create customer account',
        details: error.message,
      });
    }
  });
  

// 404 Error handling
app.use((req, res) => {
  res.status(404).send({ error: 'Endpoint not found' });
});

module.exports = app;
