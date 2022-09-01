const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017/Human_resource";

// creating a connection with the database : connection url should contain the db name inside it

mongoose.connect(Url, (err, suc)=>{
    if(err) console.log(err);
    console.log("Connected Successfully !!!");
})

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







