const mongoose =require('mongoose')
const validator=require('validator')
const bcrypt =require('bcryptjs')
const jwt=require('jsonwebtoken')
const TeacherSchema=mongoose.Schema({
    username:{
        type:String,
        reqired:true,
        trim:true,
        lowercase:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error('Email is invalid')
            }
        }
    },
    password:{
        type:String,
        reqired:true,
        trim:true,
        minLength:3,
        validate(value){
            if(value.includes('password'))
            throw new Error('password contain password')
        }
    },
    firstname:{
        type:String,
        trim:true
    },
    lastname:{
        type:String,
        trim:true
    },
    subject:{
       type:String,
       trim:true
    },
    contact:{
      type:String,
      trim:true
    },
    classroom:{
       type:String,
       trim:true,
       reqired:true
    },
    tokens:[{
        token:{
           type:String,
           required:true
        }
    }
    ]

})

TeacherSchema.statics.findByCredential = async (login) => {
    const username = login.username
    const password = login.password
    const teacher = await Teacher.findOne({
        username
    })
    if (!teacher) {
        throw new Error('No teacher with this username')
    } else {
        const isMatch = await bcrypt.compare(password, teacher.password)
        if (!isMatch) {
            throw new Error('Password is incorrect')
        }
        return teacher
    }

}

TeacherSchema.methods.generateAuthToken=async function(){
    const teacher=this
   const token=jwt.sign({_id:teacher._id.toString()},'Techokids')
    teacher.tokens=teacher.tokens.concat({token})
    await teacher.save()
   return token
 
     }

TeacherSchema.pre('save',async function(next){
    const teacher=this
    if (teacher.isModified('password')) {
        teacher.password = await bcrypt.hash(teacher.password, 8)
   }
   next()
})

const Teacher=mongoose.model('Teacher',TeacherSchema)
module.exports=Teacher