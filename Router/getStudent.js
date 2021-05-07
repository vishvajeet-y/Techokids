const express=require('express')
const jwt=require('jsonwebtoken')
const router=new express.Router()
const Student=require('../models/Student')
const Teacher=require('../models/Teacher')
const Classroom=require('../models/Classroom')


router.get('/student',async(req,res)=>{
    try{
      //   console.log('student is running')
       //  console.log(req.query)
     
          const token=req.query.token
          const decode_token=jwt.verify(token,'Techokids')
          console.log(decode_token._id)
           
          const teacher=await Teacher.findOne({
            _id: decode_token._id,
            'tokens.token': token
        })
         
     //   console.log(teacher.classroom)
         
        const student=await Classroom.find({classroom:teacher.classroom}).populate('owner').exec(function(err,students){
          const student_data = students.map((student)=> {
                 //console.log(student.owner)
                return student.owner
                })
             res.json(student_data)
               // console.log('hello',student_data)
        })
        // const student1=await Classroom.findOne({classroom:'Machine Learning'})
        // await student1.populate('owner').execPopulate()
             
             
        }
        catch(e){
            console.log(e)
            res.send('something wrong occur')
        }
})

router.get('/classroom',async(req,res)=>{
    try{
       // console.log(req.query)
        const token=req.query.token
        const type=req.query.type
        const decode_token=jwt.verify(token,'Techokids')
       // console.log('hello ',decode_token._id)
       // console.log(type)
        let user
         if(type==='Student')
         {
             user=await Student.findOne({
                _id: decode_token._id,
                'tokens.token': token
            })
         }
         else{
            user=await Teacher.findOne({
                _id: decode_token._id,
                'tokens.token': token
            })
         }
      
     
    //   console.log(user.classroom)
    //    console.log(user.tokens.length)

       await Classroom.find({classroom:user.classroom}).populate('owner').exec(function(err,students){
        const student_data = students.filter((student)=> {
              // console.log(student.owner.tokens.length)
               
              return student.owner.tokens.length>1
              }).map((student)=>{
                      return student.owner
              })
            //  console.log(student_data)
              res.json(student_data)
             /// console.log('hello',student_data)
      })


        }
        catch(e){
            
            res.send('something wrong occur')
        }
})

module.exports=router
