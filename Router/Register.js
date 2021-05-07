const express=require('express')
const bodyParser=require('body-parser')
const jwt=require('jsonwebtoken')
const router=new express.Router()
const Student=require('../models/Student')
const Teacher = require('../models/Teacher')
const Classroom=require('../models/Classroom')

router.use(bodyParser.urlencoded({
    extended: true
}))
router.use(express.json())

router.post('/stu_register',async(req,res)=>{
    //console.log('hello ',req.body)
    try{
         const student=new  Student(req.body)
         await student.save()
         const token=await  student.generateAuthToken()

          

         const classroom={
             classroom:student.classroom,
             owner:student.id
         }

         console.log(classroom)

         const class_val=Classroom(classroom)
         await class_val.save()
         const flag=1
         const firstname=student.firstname
         res.send({flag,token,firstname})
       //  res.send(student)
     }
     catch(e){
         console.log('error occur',e)
         const flag=0
         res.send({flag})
     }
})

router.post('/tea_register',async(req,res)=>{
   
    const teacher=new Teacher(req.body)
     console.log(teacher)
     try{
         await teacher.save()
         const token=await  teacher.generateAuthToken()
         const flag=1
         const classroom=teacher.classroom
         res.send({flag,token,classroom})
     }
     catch(e){
         const flag=0
         res.send({flag})
     }
})
module.exports=router