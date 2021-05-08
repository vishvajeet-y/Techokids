import React,{useState} from 'react'
import axios from 'axios'
import LoginForm from './LoginForm'
import Header from './Header'


const TeacherLogin=(props)=>{

  const [message,setMessage]=useState('')

  const onSubmitForm=(payload)=>{
    axios({
      url:'/tea_login',
      method:'POST',
      data:payload
    }).then((msg)=>{
      console.log(msg)
      const  message_val=msg.data.flag
      const token=msg.data.token
      const classroom=msg.data.classroom
      setMessage(msg.data.flag)
     
     if(message_val===1)
     {
       props.history.push({
        pathname:'/tea_dashboard',
        state:{token,classroom}
       }
         
         )
     }
    })
    .catch((e)=>{
      console.log('Internal server Error')
    })
  }

  return  <div>
  <Header />
  {message===0?<p className="text-center text-danger">Either username or password is wrong </p>:''}
    <LoginForm onSubmitForm={onSubmitForm}/>
    </div>
}

  export default TeacherLogin