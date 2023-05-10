//const express = require('express')
import express from 'express'
const server = express()
const port  = 2556

server.get("/testsuccess",(req:any,res:any)=>{
    res.status(200).json({
        success:true,
        message:"success message"
    })
    res.end()
})

server.get("/testfailure",(req:any,res:any)=>{
    res.status(404).json({
        success:true,
        message:"failure message"
    })
    res.end()
})
server.listen(port,()=>{
    console.log(`server runnning at ${port}`)
})