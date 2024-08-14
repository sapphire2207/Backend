import express from "express";
const app= express();
const port= 3000;


app.get("/", (req,res)=>{

    const today = new Date();
    const day = today.getDay;

    let nameOfDay="weekday";
    let mood="work hard";
    if(day===0 || day===6){
        nameOfDay="weekend";
        mood="have fun";
    }

    console.log(day);
    res.render("index.ejs",{
        name: nameOfDay,
        letter: mood
    });
})

app.listen(port, (req,res)=>{
    console.log(`Server running on port ${port}.`);
})