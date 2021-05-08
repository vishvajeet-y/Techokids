const express=require('express')
const jwt=require('jsonwebtoken')
const router=new express.Router()
const Student=require('../models/Student')
const Teacher=require('../models/Teacher')
const Classroom=require('../models/Classroom')



router.post('/stu_login',async(req,res)=>{
    
     try{
         
     const student=await Student.findByCredential(req.body)
     const token=await  student.generateAuthToken()
     //console.log(student)
     const flag=1
     const firstname=student.firstname
      res.send({flag,token,firstname})
     }
     catch(e){
         console.log(e)
         const flag=0
         res.send({flag})
     }
    })



router.post('/tea_login',async(req,res)=>{
    
    
    try{
        const teacher=await Teacher.findByCredential(req.body)
        //console.log(teacher)
        const token=await  teacher.generateAuthToken()
      //  console.log(token)
      const classroom=teacher.classroom
        const flag=1
        res.send({flag,token,classroom})
    }
    catch(e){
        console.log(e)
        const flag=0
        res.send({flag})
    }
})

module.exports=router