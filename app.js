const express =require('express');
const home = require("./router/home");
const admin = require("./router/admin");
const article = require("./router/article");
const app = express();

// 以下两行用于获取POST请求参数,有以下两行代码后可以请求req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use("/home", home);
app.use("/admin", admin);
app.use("/article", article);

app.listen(8080, ()=> {
    console.log(123)
})