const express = require("express");
const sqlRequest = require("../database/connect");
const article = express.Router();
article.get("/getArticleDesc", (req, res)=> {
    const sql = "select min(labelId) as labelId from relationarticlelabel";
    sqlRequest(sql).then(v=> {
        const {labelId} = v[0];
        const sql1 = "select a.title, a.ctime from relationarticlelabel as r join article as a " + 
        `where r.labelId = ${labelId} and r.articleId = a.id`;
        sqlRequest(sql1).then(v=> {
            res.send(v);
        }, r=> {
            console.log(r);
        })
    } , r=> {
        // 错误处理
        console.log(r);
    })
})


article.post("/submitArticle", (req, res)=> {
    const sql = "insert into article set ?";
    sqlRequest(sql, req.body).then(v=> {
        res.send({
            status: 1,
            desc: "文章添加成功"
        })
    }, r=> {
        // 错误处理
        console.log(r);
        res.send({
            status:0,
            desc: "文章添加失败"
        })

    })
})
module.exports = article;