const mongoose =require('mongoose')

const AttendenceSchema=mongoose.Schema({
    classroom:{
        type:String
    },
    teacher:{
        type:mongoose.Schema.Types.ObjectId,

    }
    ,
    attendence:{
        type:[{}]
    }
   

})

const attendence=mongoose.model('Attendence',AttendenceSchema)
module.exports=attendence