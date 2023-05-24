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
    console.log("inputValue", errorValidation)
  }, [errorValidation])

  const validation = () => {
    let error = {};
    if(inputValue.username === '' || inputValue.password === '') {
      if(inputValue.username === '') {
        error.username = 'Please Enter User Name!';
      } else {
        delete errorValidation.username;
        setErrorValidation({...errorValidation})
      }
      if(inputValue.password === '') {
        error.password = 'Please Enter Password!';
      } else {
        delete errorValidation.password;
        setErrorValidation({...errorValidation})
      }
      setErrorValidation({...errorValidation, ...error})
      console.log("Validatioons are ", errorValidation)
    } else {
      setErrorValidation({})
    }

    if (Object.keys(errorValidation).length>0) {
      console.log("Validation Failed")
      return false;
    } else {
      console.log("Validation Done", errorValidation)
      setIsFormSubmit(true)
      return true;
    }
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValue({...inputValue, [name]: value})
    const re = /^\S*$/;
    if (inputValue.username.length < 6 || !re.test(inputValue.username)) {
      setErrorValidation({...errorValidation, username: "Please enter valid username."})
    } else {
      delete errorValidation.username;
      setErrorValidation({...errorValidation})
    }

    
    if (inputValue.username.length < 6 || !re.test(inputValue.username)) {
      setErrorValidation({...errorValidation, username: "Please enter valid username."})
    } else {
      delete errorValidation.username;
      setErrorValidation({...errorValidation})
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
    if(validation()) {
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
                <input type="password" name="password" className={ errorValidation.password ? 'form-control is-invalid' : 'form-control'} currentvalue={inputValue.password} onChange={(e)=>{setInputValue({...inputValue, password : e.target.value})}}  placeholder="Password" />
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