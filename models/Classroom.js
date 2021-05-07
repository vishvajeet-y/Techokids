const mongoose =require('mongoose')

const ClassroomSchema=mongoose.Schema({
    
    classroom:{
        type:String,
        reqired:true,
        trim:true
    },

    owner:{
        type:mongoose.Schema.Types.ObjectId,
        reqired:true, 
        ref:'Student'
    }

})

const classromm=mongoose.model('Classroom',ClassroomSchema)
module.exports=classromm