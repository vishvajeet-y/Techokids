const mongoose =require('mongoose')
const validator=require('validator')
const jwt=require('jsonwebtoken')
const bcrypt =require('bcryptjs')
const StudentSchema=mongoose.Schema({
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
    contact:{
      type:Number,
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

StudentSchema.statics.findByCredential = async (login) => {
    const username = login.username
    const password = login.password
    const student = await Student.findOne({
        username
    })
    if (!student) {
        throw new Error('No student with this username')
    } else {
        const isMatch = await bcrypt.compare(password, student.password)
        if (!isMatch) {
            throw new Error('Password is incorrect')
        }
        return student
    }

}

StudentSchema.methods.generateAuthToken=async function(){
    const student=this
   const token=jwt.sign({_id:student._id.toString()},'Techokids')
    student.tokens=student.tokens.concat({token})
    await student.save()
   return token
 
     }

StudentSchema.pre('save',async function(next){
     const student=this
     if (student.isModified('password')) {
        student.password = await bcrypt.hash(student.password, 8)
    }
    next()
})

const Student=mongoose.model('Student',StudentSchema)
module.exports=Student