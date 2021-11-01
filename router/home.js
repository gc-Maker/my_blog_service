const express = require("express");
const sqlRequest = require("../database/connect");
const home = express.Router();
home.get("/getLikeAndArticle",(req, res)=> {
    const sql = "select numberOfLike, numberOfArticle from information";
    sqlRequest(sql).then((value)=> {
        // console.log(value);
        res.send(value[0]);
    }, (r)=> {
        // 错误处理
    })
})

home.get("/getLabel", (req, res)=> {
    // const sql = "select distinct labelName from label";
    const sql = "select l.labelName, count(r.labelId) as number from relationarticlelabel as r join label as l where r.labelId = l.id group by labelId";
    // sqlRequest(sql1).then(v=> {
    //     console.log(v);
    // })
    sqlRequest(sql).then((value)=>{
        // console.log(value);
        res.send(value);
    }, (r)=> {
        // 
    })
})

// 获取Timeline数据
home.get("/getTimelineData", (req, res)=> {
    const sql = "select * from websiteTimeline";
    sqlRequest(sql).then(v=> {
        res.send(v);
    }, r=> {
        // 错误处理
    })
})

home.post("/setLike", (req, res)=> {
    const updateSql = "update information set numberOfLike = numberOfLike + 1";
    sqlRequest(updateSql).then((v)=> {
        // console.log(v);
        const getSql = "select numberOfLike from information";
        sqlRequest(getSql).then((v)=> {
            res.send(v[0]);
        }, (r)=>{
            // 错误处理
        })
    }, (r)=> {
        // 错误处理
    })
})
module.exports = home;