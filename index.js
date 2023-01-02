const express= require("express");
const fs= require("fs");
const port= 4000;
const app= express();

const text=()=>{
    const ts = new Date().toISOString();
    return ts;
    
}


const dt=Date.now();
const new_dt= new Date(dt);
const year=new_dt.getFullYear();
const month=new_dt.getMonth()+1;
const day=new_dt.getDay();


let month_date=year +"-"+month +"-"+day;
let body=text();

fs.writeFile(`${month_date}.txt`,body,function(err){
    console.log("File Created Successfully");
});



app.get("/",function(req,res){
    res.send(`Date and Time is ${body}`);
})


app.listen(port,()=>console.log(`The server started in ${port}`))


