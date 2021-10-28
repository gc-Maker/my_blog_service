const express =require('express');
const pageInformation = require("./router/home");
const app = express();


app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use("/home", pageInformation);

app.listen(8080, ()=> {
    console.log(123)
})