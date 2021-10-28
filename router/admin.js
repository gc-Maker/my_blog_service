const express = require("express");
const sqlRequest = require("../database/connect");
const admin = express.Router();
admin.post("/createTimelineData", (req, res)=> {
    const {event, createTime} = req.body;
    const sql = "insert into websiteTimeline set ?";
    const params = {event, createTime};

    sqlRequest(sql, params).then((v)=> {
        console.log(v);
    }, (r)=>{
        // 错误处理
        console.log(r);
    })
})


module.exports = admin;