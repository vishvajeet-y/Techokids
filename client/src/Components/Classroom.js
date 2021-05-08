import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from './Navbar'



const Classroom=(props)=>{
 //   console.log(props)

    const token=props.location.state.token  
    const type=props.location.state.type
    const take=props.location.state.Take
    const firstname=props.location.state.firstname
    //console.log('clas',type)
    const [students,setStudents]=useState([])
    const getStudent=(token)=>{
          //   console.log('stud_token',token)
               axios( {
                   url:'/classroom',
                   method:'GET',
                   params:{token,'type':type}}
               ).then((response)=>{
                 //  console.log(response)
                   const data=response.data 
                   //console.log('class', data)
                   setStudents(data)
               })
               .catch(()=>{
                   alert('Error in retrving data')
               })
           }
         
           useEffect(()=>{
              getStudent(token)
          },[])

          const viewStudent=(students)=>{
            if(students.length===0)
            return <div className="text-center"><p>No student is present</p> </div>
          return students.map((student,index)=>{
           //     console.log(student.firstname)
              return <div className="text-center"  key={index} >
              <div className="container-fluid align-self-center">
           <div className="row">
         
           <div className="col-sm-3"></div>
           <div className="col-sm-7">
           <div className="card m-3" >
           <div className="card-body " >
         
               <label className="form-check-label p-2" htmlFor={index}>{student.firstname} {student.lastname} </label>
               </div>  
          </div>
          </div>
          </div>
          </div>
          </div>
               
          })
        }

        if(type==='Teacher'&&take==='attendence')
        {
         // console.log('Teacher joined class')
          axios({
            url:'/attendence',
            method:'POST',
            data:{token,students}
          }).then((msg)=>{
                const data=msg.data.studentList
                const token=msg.data.token
                console.log(token)
                console.log(data)
                props.history.push({
                  pathname:'/showStudent',
                  state:{data,token}
                 }
                   
                   )
         })
         .catch(()=>{
             alert('Internal Server error')
         })
        }

    return <div>
    
    {(type==='Teacher')?
    <Navbar token={token} type={type} />:
    <Navbar token={token} type={type} firstname={firstname}/>}
    <div className="container-fluid align-self-center">
    <div className="row">
    <div className="col-sm-3"></div>
     <div className="col-sm-7">
    <div className="card m-3" >
    <div className="card-body " >
    <h1 className="text-center">Classroom</h1>
   {  viewStudent(students)}
   </div>
   </div>
   </div>
   </div>
   </div>
    </div>
}

export default Classroom