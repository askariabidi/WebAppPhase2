const mysql=require("mysql");
var mysqlconnec=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'password',
    database:'prac',
    multipleStatements:true
})
const express=require("express");
const app=express();
const bodypar=require("body-parser");
const cors=require("cors");
app.use(bodypar.json());
app.use(cors())
mysqlconnec.connect((err)=>{
if(!err){
    console.log("connected successfully");
} else{
    console.log("errorr"+JSON.stringify(err,undefined,2));
}

})
app.listen(4000,()=>{console.log("express server is running")});

app.get("/ret",(req,res)=>{
    mysqlconnec.query("SELECT * FROM users",(err,customer,fields)=>{
        if(!err){
            res.send(customer);
        } else{
            console.log(err);
        }
    })})
    
app.post("/signup" ,(req,res)=>{
    let emp=req.body;
    var sql="INSERT INTO users(name,email,contact,password) VALUES(?,?,?,?);"; 
    mysqlconnec.query(sql,[emp.fullname,emp.email,emp.contact,emp.password],(err,row,fields)=>{
        if(!err){
            console.log(row)
        } else{
            console.log(err);
        }
    })})
    app.post("/loginauth",(req,res)=>{
        let emp=req.body;
         mysqlconnec.query("SELECT * FROM users WHERE email=? AND password=?",[emp.email,emp.password],(err,row,fields)=>{
            if(row.length>0){
                
                res.send("success");
            } else{
                
                res.send("fail");
            }
        })})