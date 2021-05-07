require('../db/mongoose')
const express=require('express')
const port=process.env.PORT||5000
const app=express()
const RegisterRouter=require('../Router/Register')
const LoginRouter=require('../Router/Login')
const getStudent=require('../Router/getStudent')
const saveAttendence=require('../Router/saveAttendence')
app.use(RegisterRouter)
app.use(LoginRouter)
app.use(getStudent)
app.use(saveAttendence)

if(process.env.NODE_ENV=='production')
{
    app.use(express.static('../client/build'))
}

app.listen(port,()=>{
    console.log('server is running',port)
})