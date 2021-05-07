import React,{useState} from 'react'


const LoginForm=(props)=>{
const [username,setUsername]=useState('')
const [password,setPassword]=useState('')


const onSubmit=(e)=>{
	e.preventDefault()
	const payload={
		username,
		password
	}
    props.onSubmitForm(payload)

	setUsername('')
	setPassword('')
}

   return  <div className="full d-flex">
			<div className="container-fluid align-self-center">
				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-6">
					<h1 className="text-center">Login</h1>
						<div className="card">
							<div className="card-body">
							
								<form onSubmit={onSubmit}> 
									<div className="form-group">
										<label htmlFor="email">Email</label>
										<input  type="email" className="form-control" name="username" value={username}
										onChange={(e)=>{setUsername(e.target.value)}}
										/>
									</div>
									<div className="form-group">
										<label htmlFor="password">Password</label>
										<input  type="password"  className="form-control" name="password"
										 value={password}
										 onChange={(e)=>{setPassword(e.target.value)}}
										/>
									</div>
									<button type="submit" className="btn btn-primary m-3">Login</button>
								</form>
								
							</div> 
						</div>
					</div>
				</div>
			</div>
		</div>
}

export default LoginForm