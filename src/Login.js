import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Login() {


  const [inputValue, setInputValue] = useState({
    username : '',
    password : ''
  })
  const [errorValidation, setErrorValidation] = useState({})

  const [isSubmit, setIsFormSubmit] = useState(false)

  
  useEffect(()=>{
    console.log("inputValue validation ", errorValidation)
  }, [errorValidation])

  const validation = () => {
    console.log("Called validation function")
    let error = errorValidation;
    const regexPattern  = /^[a-zA-Z0-9]+$/;
    if(inputValue.username === '' || inputValue.password === '') {
      if(inputValue.username === '') {
        console.log("Valida Blanck")
        error.username = 'Please Enter Blanck Name!';
      } else if (inputValue.username.length < 6 || !regexPattern.test(inputValue.username)) {
        console.log("Valida lenght")
        error.username = "Please enter valid username!";
      } else {
        console.log("Valida")
        delete error.username;
      }
      if(inputValue.password === '') {
        console.log("Password not enterned")
        error.password = 'Please Enter Password!';
      } else {
        console.log("Password enterned")
        delete error.password;
      }
    } 

    console.log(" Length ", Object.keys(error).length,  " Value0 ", error)

    if (Object.keys(error).length>0) { 
      setErrorValidation({...error})
      console.log("Validations are ", error)
      setIsFormSubmit(false)
      return false;
    } else {
      setIsFormSubmit(false)
      return true;
    }
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValue({...inputValue, [name]: value})
    const validationStatus = validation();
    console.log("validationStatus ", validationStatus)
    if(validationStatus) {
      console.log("Validaion true")
    }
  }

  async function loginUser(credentials) {
    // const {user_name, user_password} = credentials;
 return fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'kminchelle',
    password: '0lelplR',
  })
})
.then(data => data.json())


}

  const handleSubmit = async(event) => {
    event.preventDefault();
    const validationStatus = validation();
    console.log("validationStatus ", validationStatus)
    if(validationStatus) {
      const data = await loginUser(inputValue);
      const {token} = data;
      sessionStorage.setItem('token', JSON.stringify(token));
       console.log("Logged User Info ", token)
    } else {
      console.log("Form Not Submitted!")
    }

    

  }

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <NavLink to='/'><b>Admin</b>LTE</NavLink>
          {isSubmit ? <p>Form Submitted Successfully</p> : <p>Form not Submitted!</p> }
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input type="text" name="username" className={ errorValidation.username ? 'form-control is-invalid' : 'form-control'} currentvalue={inputValue.username} onChange={(e)=>handleChange(e)} placeholder="username" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
                <span id="exampleInputEmail1-error" className="error invalid-feedback">{errorValidation.username}</span>
              </div>
              <div className="input-group mb-3">
                <input type="password" name="password" className={ errorValidation.password ? 'form-control is-invalid' : 'form-control'} currentvalue={inputValue.password} onChange={(e)=>handleChange(e)} placeholder="Password" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
                <span id="exampleInputEmail1-error" className="error invalid-feedback">{errorValidation.password}</span>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">
                      Remember Me
                    </label>
                  </div>
                </div>
                {/* /.col */}
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                </div>
                {/* /.col */}
              </div>
            </form>

            <div className="social-auth-links text-center mb-3">
              <span>- OR -</span>
              <NavLink to='' className="btn btn-block btn-primary">
                <i className="pi pi-facebook mr-2"></i> Sign in using Facebook
              </NavLink>
              <NavLink to='' className="btn btn-block btn-danger">
                <i className="pi pi-google mr-2"></i>Sign in using Google+
              </NavLink>
            </div>
            {/* /.social-auth-links */}

            <NavLink to='' >
              I forgot my password
            </NavLink>
            <NavLink to='/register' className="text-center">
              Register a new membership
            </NavLink>
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
    </div>
  )
}

export default Login