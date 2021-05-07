import React from 'react'
import {NavLink} from 'react-router-dom'
const TeacherSidebar=(props)=>{
  //console.log('Nav',props)
  const token=props.token
  const type=props.type
return  <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
  <NavLink className="navbar-brand" to="/">Techokids</NavLink>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
      {type==='Teacher'?
    
      <NavLink className="nav-link active" aria-current="page" to={{
        pathname: '/tea_dashboard',
        state: {
          token
        }
      }}
      activeClassName='is-active' exact={true}> Teacher Dashboard </NavLink> :
    
      <NavLink className="nav-link active" aria-current="page" to={{
        pathname: '/stu_dashboard',
        state: {
          token
        }
      }}
      activeClassName='is-active' exact={true}> Student Dashboard </NavLink>
    
    
    }
        
      </li>
   
      <li className="nav-item ">
        <NavLink className="nav-link" to={{
            pathname: '/classroom',
            state: {
              token,
              type
            }
          }}>Classroom</NavLink>
      </li>
      
      <li className="nav-item">
      {
          type==='Teacher'?
          <NavLink className="nav-link" to={{
            pathname: '/classroom',
            state: {
              token,
              type,
              'Take':'attendence'
            }
          }}>Take Attendence</NavLink>:
          <NavLink className="nav-link" to='/stu_login'>Join Class</NavLink>

        }
      
        
      </li>
      
  
   
    </ul>
  </div>
</div>
</nav>
}
export default TeacherSidebar