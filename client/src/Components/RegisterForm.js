import React,{useState} from 'react'
const RegisterForm=(props)=>{
 
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('') 
  const [firstname,setFirstname]=useState('')
  const [lastname,setLastname]=useState('') 
  const [contact,setContact]=useState('')
  const [classroom,setClassroom]=useState('Artificial Intelligence')

  const onSubmit=(e)=>{
    e.preventDefault()
    // console.log(username)
    // console.log(password)
    // console.log(firstname)
    // console.log(lastname)
    // console.log(contact)
     const payload={
      username,
      password,
      firstname,
      lastname,contact,
      classroom
    }
    //console.log(payload)
    
    props.onSubmitForm(payload)
   

    setUsername('')
    setPassword('')
    setFirstname('')
    setLastname('')
    setContact('')
    setClassroom('')
  }
 
    return <div>
    <div className="container-fluid align-self-center">
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">
      <h1 className="text-center">Register</h1>
        <div className="card">
          <div className="card-body">

    <form onSubmit={onSubmit} >
    <div className="m-3">
      <label htmlFor="InputEmail" className="form-label">Email address</label>
      <input type="email" className="form-control" id="InputEmail" 
       aria-describedby="emailHelp" 
       value={username}
       onChange={(e)=>{setUsername(e.target.value)}}
       />
    </div>
    <div className="m-3">
      <label htmlFor="InputPassword" className="form-label">Password</label>
      <input type="password" className="form-control" id="InputPassword"
      value={password}
       onChange={(e)=>{setPassword(e.target.value)}}
      />
    </div>
    <div className="m-3">
    <label htmlFor="Inputfirstname" className="form-label">First Name</label>
    <input type="text" className="form-control" id="inputfirstname"
    value={firstname}
    onChange={(e)=>{setFirstname(e.target.value)}} 
    />
  </div>
  <div className="m-3">
      <label htmlFor="Inputlastname" className="form-label">Last name</label>
      <input type="text" className="form-control" id="Inputlastname" 
      value={lastname}
       onChange={(e)=>{setLastname(e.target.value)}} 
      />
    </div>
    <div className="m-3">
      <label htmlFor="Inputcontact" className="form-label">Contact</label>
      <input type="text" className="form-control" id="Inputcontact" 
      value={contact}
      onChange={(e)=>{setContact(e.target.value)}}
      />
    </div>
   
    <div className="m-3">
      <label htmlFor="Inputsubject" className="form-label">Subject</label>
      <select id="Inputsubject" className="form-select" value={classroom} 
      onChange={(e)=>{setClassroom(e.target.value)}}>
      <option>Artificial Intelligence</option>
      <option>Machine Learning</option>
      <option>Android Development</option>
      <option>Web Development</option>
      </select>
    </div>

    <button type="submit" className="btn btn-primary m-3">Submit</button>
  </form>

  </div> 
</div>
</div>
</div>
</div>
</div>
    
}

export default RegisterForm