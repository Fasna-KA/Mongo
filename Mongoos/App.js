const mongoose = require("mongoose");
const Url = "mongodb://localhost:27017/Human_resources";


const DBSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    salary: Number,
    department: String,
    lastCompany: String,
    lastSalary: Number,
    overallExp: Number,
    contactInfo: Number,
    yearGrad: Number,
    gradStream: String
  })

  var data = [{"firstName": "John",
  "lastName": "Doe",
  "salary": "25000",
  "department": "HR",
  "lastCompany": "X",
  "lastSalary": "10000",
  "overallExp": "2",
  "contactInfo": "1234567890",
  "yearGrad": "2016",
  "gradStream": "CSE"
  },{
  "firstName": "Rohan",
  "lastName": "Jame",
  "salary": "30000",
  "department": "Technical",
  "lastCompany": "Y",
  "lastSalary": "15000",
  "overallExp": "1",
  "contactInfo": "1234567860",
  "yearGrad": "2015",
  "gradStream": "CSE"
  },
  {
  "firstName": "Jame",
  "lastName": "Doe",
  "salary": "35000",
  "department": "Accounts",
  "lastCompany": "Z",
  "lastSalary": "20000",
  "overallExp": "1",
  "contactInfo": "123567890",
  "yearGrad": "2019",
  "gradStream": "ECE"
  },
  {
  "firstName": "Sao",
  "lastName": "Avika",
  "salary": "30000",
  "department": "Sales",
  "lastCompany": "Y",
  "lastSalary": "15000",
  "overallExp": "2",
  "contactInfo": "1234567860",
  "yearGrad": "2015",
  "gradStream": "CSE"
  },
  {
  "firstName": "Jame",
  "lastName": "roh",
  "salary": "35000",
  "department": "Accounts",
  "lastCompany": "Z",
  "lastSalary": "15000",
  "overallExp": "2",
  "contactInfo": "123567890",
  "yearGrad": "2019",
  "gradStream": "EEE"
  },
  {
  "firstName": "Rohan",
  "lastName": "Jame",
  "salary": "30000",
  "department": "Technical",
  "lastCompany": "Y",
  "lastSalary": "15000",
  "overallExp": "1",
  "contactInfo": "1234567860",
  "yearGrad": "2015",
  "gradStream": "CSE"
  },
  {
  "firstName": "Jame",
  "lastName": "Doe",
  "salary": "35000",
  "department": "Accounts",
  "lastCompany": "Z",
  "lastSalary": "20000",
  "overallExp": "1",
  "contactInfo": "123567890",
  "yearGrad": "2019",
  "gradStream": "ECE"
  },
  {
  "firstName": "Sao",
  "lastName": "Avika",
  "salary": "30000",
  "department": "Sales",
  "lastCompany": "Y",
  "lastSalary": "15000",
  "overallExp": "2",
  "contactInfo": "1234567860",
  "yearGrad": "2015",
  "gradStream": "CSE"
  },
  {
  "firstName": "Jame",
  "lastName": "Doe",
  "salary": "35000",
  "department": "Accounts",
  "lastCompany": "Z",
  "lastSalary": "15000",
  "overallExp": "2",
  "contactInfo": "123567890",
  "yearGrad": "2019",
  "gradStream": "EEE"
  },
  {
  "firstName": "Rohan",
  "lastName": "Jame",
  "salary": "30000",
  "department": "Technical",
  "lastCompany": "Y",
  "lastSalary": "15000",
  "overallExp": "1",
  "contactInfo": "1234567860",
  "yearGrad": "2015",
  "gradStream": "CSE"
  },
  {
  "firstName": "Jame",
  "lastName": "Doe",
  "salary": "35000",
  "department": "Accounts",
  "lastCompany": "Z",
  "lastSalary": "20000",
  "overallExp": "1",
  "contactInfo": "123567890",
  "yearGrad": "2019",
  "gradStream": "ECE"
  },
  {
  "firstName": "Sao",
  "lastName": "Avika",
  "salary": "30000",
  "department": "Sales",
  "lastCompany": "Y",
  "lastSalary": "15000",
  "overallExp": "2",
  "contactInfo": "1234567860",
  "yearGrad": "2015",
  "gradStream": "CSE"
  },
  {
  "firstName": "Jame",
  "lastName": "Doe",
  "salary": "35000",
  "department": "Accounts",
  "lastCompany": "Z",
  "lastSalary": "15000",
  "overallExp": "2",
  "contactInfo": "123567890",
  "yearGrad": "2019",
  "gradStream": "EEE"
  }]

// creating a connection with the database : connection url should contain the db name inside it

mongoose.connect(Url, async(err)=>{
  if(err) console.log(err);
  else
  console.log("Connected Successfully !!!");

 //creating collections

 const employee = mongoose.model("employee",DBSchema);

 //inserting documents
  
    // const insert = employee.insertMany(data,(err,suc)=>{
    //     if (err) console.log(err)
    //     console.log(suc)
    // });
  
//display all the documents
  
//   employee.find(data,(err,suc)=>{
//     if (err) console.log(err)
//     console.log(data)
// });


// salary greaterthan 30000

  // const result =  employee.find({salary:{$gt:30000}},(err)=>{
  //   if (err) console.log(err)
  //   else console.log(result)
  // })
//experience morethan 2

// const exp =  employee.find({overallExp:{$gt:2}},(err,res)=>{
//   if (err) console.log(err)
//   else console.log(res)
// })

//year greaterthan 2015 and experience morethan 1

  // const emplo = {yearGrad:{$gt:2015},overallExp:{$gt:1}};
  // const employ =  employee.find(emplo);
  // console.log(employ);

//updating salary greaterthan 70000- 65000

// const sal = {salary:{$gt:70000}}
// const salupdat = {$set:{salary:65000}}
// const salaupdate = await employee.updateMany(sal,salupdat);
// console.log(salaupdate);

//deleting document having lastcompany Y

// const empdel = {lastCompany:"Y"};
// const empdelete = await employee.deleteMany(empdel);
// console.log(empdelete)
})