import { v4 as uuidv4 } from 'uuid'
export const addStudent=()=>(
    {
        type:'ADD_STUDENT'
    }
)

export const loginStudent=()=>({
    type:'LOG_STUDENT'
})

export const addTeacher=()=>(
    {
        type:'ADD_TEACHER'
    }
)

export const loginTeacher=()=>(
    {
        type:'LOG_TEACHER'
    }
)