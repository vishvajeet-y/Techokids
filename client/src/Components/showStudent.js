import React from 'react'
import Navbar from './Navbar'
const showStudent=(props)=>{
 
     const studentList=props.location.state.data
     const token=props.location.state.token
     console.log(token)
return <div>
<Navbar token={token} type={'Teacher'} />
<div className="text-center"   >
              <div className="container-fluid align-self-center">
           <div className="row">
         
           <div className="col-sm-3"></div>
           <div className="col-sm-7">
           <div className="card m-3" >
           <div className="card-body ">

             {studentList.map((student,index)=>{
              //console.log(student)
              const keys=Object.keys(student)
            const  firstkey=keys[0]
            const secondkey=keys[1]
           return <div key={index}>
           <div className="container-fluid align-self-center">
           <div className="row">
         
           <div className="col-sm-3"></div>
           <div className="col-sm-7">
           <div className="card m-3" >
           <div className="card-body " >
            {firstkey} {student[secondkey]}

            </div>
            </div>
            </div>
            </div>
            </div>
            
            </div>
           })}

           </div>
           </div>
           </div>
           </div>
           </div>
    
</div>
</div>



}

export default showStudent