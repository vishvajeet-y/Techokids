import React,{Fragment} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import DashboardPage from '../Components/DashboardPage'
import StudentLogin from '../Components/StudentLogin'
import StudentRegister from '../Components/StudentRegister'  
import TeacherRegister from '../Components/TeacherRegister'  
import TeacherLogin from '../Components/TeacherLogin'  
import StudentDashboard from '../Components/StudentDashboardPage'
import TeacherDashboard from '../Components/TeacherDashboardPage'
import showStudent from '../Components/showStudent'
import Classroom from '../Components/Classroom'

const AppRouter=()=>(
     <BrowserRouter>
      <Fragment>
      
      <Switch>
      <Route path='/' component={DashboardPage} exact={true} />
      <Route path='/stu_login' component={StudentLogin} />
      <Route path='/stu_register' component={StudentRegister} />
      <Route path='/tea_login' component={TeacherLogin} />
      <Route path='/tea_register' component={TeacherRegister} />
      <Route path='/stu_dashboard' component={StudentDashboard} />
      <Route path='/tea_dashboard' component={TeacherDashboard} />
      <Route path='/classroom' component={Classroom} />
      <Route path='/showStudent' component={showStudent} />
      </Switch>
      </Fragment>
      </BrowserRouter>
)

export default AppRouter
