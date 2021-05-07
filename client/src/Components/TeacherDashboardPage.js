import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from './Navbar'

 
const TeacherDashbaordPage=(props)=>{
    
     const [students,setStudents]=useState([])
    //   const [checkedAtt,setChecked]=useState()
    //   const [atten,setAtten]=useState()
    //  const [studentlist,setStudentsList]=useState([])
    
   //  console.log('hfda ',props.location.state.token)
     const token=props.location.state.token       
     const classroom=props.location.state.classroom
     //console.log(token)
    // console.log('Classs',classroom)
     const getStudent=(token)=>{
  //     console.log('stud_token',token)
         axios( {
             url:'/student',
             method:'GET',
             params:{token}}
         ).then((response)=>{
           //  console.log(response)
             const data=response.data 
         //    console.log(data)
             setStudents(data)
         })
         .catch(()=>{
             alert('Error in retrving data')
         })
     }
   
     useEffect(()=>{
        getStudent(token)
    },[])
   
  //  const handleStudent=(e)=>{
  //       console.log('TEacher',e.target)
  //        const {name,value}=e.target
  //     console.log(e.target.id)


//   <div className="form-check form-check-inline">
//   <input className="form-check-input" type="radio" name={student._id} id={index} value="Present"

//   onChange={handleStudent}
//   />
//   <label className="form-check-label" htmlFor={index}>Present</label>
// </div>
  //     setChecked(e.target.id)
  //     setAtten(e.target.value)
  //     setStudentsList([...studentlist,{[name]:value}])
  //  }

   


     const viewStudent=(students)=>{
         if(students.length===0)
         return <p>No student is present</p>
       return students.map((student,index)=>{
           //  console.log(student.firstname)
           return <div key={index} >
           <div className="container-fluid align-self-center">
           <div className="row">
         
            <div className="col-sm-12">
           <div className="card m-3" >
           <div className="card-body mx-auto" >

            <label className="form-check-label p-2" htmlFor={index}>{student.firstname} {student.lastname} 
          </label>

          </div>
          </div>
          </div>
          </div>
          </div>
            </div>
       })
     }

    //  const submitForm=(e)=>{
    //       e.preventDefault()
    //       console.log(studentlist)
    //   console.log('TEACHER',e.target)
    //    axios({
    //      url:'/attendence',
    //      method:'POST',
    //      data:studentlist
    //    }).then(()=>{
    //      setChecked(false)
    //     setStudentsList([])
    //   })
    //   .catch(()=>{
    //       alert('Internal Server error')
    //   } <form onSubmit={submitForm}>
    //<button type="submit" className="btn btn-primary m-3" >Submit</button>
    //</form>
    //)
        
         
    // }


 return   <div>
      <Navbar token={token} type={'Teacher'} />
     
       <div className="container-fluid align-self-center">
       <div className="row">
       <div className="col-sm-3"></div>
        <div className="col-sm-7">
        <h1 className="text-center">{classroom} Student</h1>
       <div className="card m-3" >
       <div className="card-body mx-auto" >
      
       {viewStudent(students)}

      
       </div>
       </div>
       </div>
       </div>
         </div>
    </div>
}

export default TeacherDashbaordPage