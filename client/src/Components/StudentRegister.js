import React,{useState} from 'react'
import axios from 'axios'
import Header from './Header'
import RegisterForm from './RegisterForm'


const StudentRegister=(props)=>{
  
  const [message,setMessage]=useState('')

  const onSubmitForm=(payload)=>{
    axios({
      url:'/stu_register',
      method:'POST',
      data:payload
    }).then((msg)=>{
     // console.log(msg)
        //console.log(msg.data.flag)
      const  message_val=msg.data.flag
      const token=msg.data.token
      const firstname=msg.data.firstname
       setMessage(msg.data.flag) 
    
      if(message_val===1)
      {
        props.history.push({
          pathname:'/stu_dashboard',
          state:{token,firstname}
         })
      }
        
    })
    .catch((e)=>{
      console.log('Internal server Error')
    })
  }
  return  <div>
  <Header />
    
    {message===0?<p className="text-center text-danger">Fill form correctly</p>:''}
    <RegisterForm onSubmitForm={onSubmitForm}/>
    </div>
}

  export default StudentRegister