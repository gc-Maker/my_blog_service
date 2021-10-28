const express = require("express");
const sqlRequest = require("../database/connect");
const router = express.Router();
router.get("/getLikeAndArticle",(req, res)=> {
    const sql = "select numberOfLike, numberOfArticle from information";
    sqlRequest(sql).then((value)=> {
        // console.log(value);
        res.send(value[0]);
    }, (r)=> {
        // 错误处理
    })
})

router.get("/getLabel", (req, res)=> {
    // const sql = "select distinct labelName from label";
    const sql = "select labelName, count(labelName) as number from label group by labelName";
    sqlRequest(sql).then((value)=>{
        // console.log(value);
        res.send(value);
    }, (r)=> {
        // 
    })
})

router.post("/setLike", (req, res)=> {
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
module.exports = router;