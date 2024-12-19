-- -- CREATE TABLE Customers (
-- --     AccountNum INTEGER PRIMARY KEY AUTOINCREMENT,
-- --     FirstName VARCHAR(50) NOT NULL,
-- --     LastName VARCHAR(50) NOT NULL,
-- --     DOB DATE NOT NULL,
-- --     Gender CHAR(1) CHECK (Gender IN ('Male', 'Female', 'Others')),
-- --     Address TEXT NOT NULL,
-- --     PhoneNumber VARCHAR(15) UNIQUE NOT NULL,
-- --     Email VARCHAR(100) UNIQUE,
-- --     AadhaarNumber VARCHAR(12) UNIQUE NOT NULL
-- -- );

-- -- Insert a single customer
-- INSERT INTO Customers (FirstName, LastName, DOB, Gender, Address, PhoneNumber, Email, AadhaarNumber)
-- VALUES 
-- ('Rahul', 'Sharma', '1990-05-15', 'Male', '123 Residency Road, Bangalore', '9876543210', 'rahul.sharma@example.com', '123456789012');

-- -- Insert multiple customers
-- INSERT INTO Customers (FirstName, LastName, DOB, Gender, Address, PhoneNumber, Email, AadhaarNumber)
-- VALUES 
-- ('Priya', 'Nair', '1985-03-22', 'Female', '22 Indiranagar, Bangalore', '8765432109', 'priya.nair@example.com', '987654321098'),
-- ('Ravi', 'Kumar', '1988-08-12', 'Male', '45 MG Road, Mysore', '9988776655', 'ravi.kumar@example.com', '456789123456'),
-- ('Meera', 'Patil', '1992-01-05', 'Female', '78 Gandhi Nagar, Mangalore', '9123456789', 'meera.patil@example.com', '654321987654');


-- select * from Customers;