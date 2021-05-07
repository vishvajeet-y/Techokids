import React from 'react'
import Navbar from './Navbar'
const StudentDashbaordPage=(props)=>{
    const token=props.location.state.token 
    const firstname=props.location.state.firstname
  return  <div>
    <Navbar token={token} type={'Student'}/>
    <h1 className="text-center">Welcome {firstname}</h1>
    </div>
}

export default StudentDashbaordPage