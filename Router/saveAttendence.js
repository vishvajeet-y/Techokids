const express=require('express')
const jwt=require('jsonwebtoken')
const router=new express.Router()
const Attendence=require('../models/Attendence')
const Classroom=require('../models/Classroom')
const Teacher=require('../models/Teacher')
router.use(express.json())
router.post('/attendence',async(req,res)=>{
  //  console.log(req.body)
   const token=req.body.token
   const PresentStudent=req.body.students

            const decode_token=jwt.verify(token,'Techokids')
            console.log(decode_token._id)
             
            const teacher=await Teacher.findOne({
              _id: decode_token._id,
              'tokens.token': token
          })
           
     await Classroom.find({classroom:teacher.classroom}).populate('owner').exec(function(err,students){
            const student_data = students.map((student)=> {
                
                  return student.owner
                  })
                  
                const studentList=student_data.map((Rstudent)=>{

                   if(PresentStudent.find(stu=>{
                      
                     //console.log("Stud ",stu._id)
                      //console.log("REg ",Rstudent._id)
                      //console.log(stu._id==Rstudent._id)
                        return Rstudent._id==stu._id}
                   ))
                   {
                       
                         return {[Rstudent.firstname]:'Present',[Rstudent._id]:'Present'}
                   }
                   else{
                    return {[Rstudent.firstname]:'Absent',[Rstudent._id]:'Absent'}
                   }
                 
                })
                  console.log(studentList)
 
                

                  const attendence=new Attendence({
                      classroom:teacher.classroom,
                      teacher:teacher._id,
                      attendence:studentList})
                  try{
              
                      attendence.save()

                      res.json({studentList,token})
                  }
                  catch(e){
                      res.send('Internal server error')
                  }
                
          })
       
               
               
        
     
  
     
})

module.exports=router