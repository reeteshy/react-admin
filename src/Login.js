import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    < div className="hold-transition login-page">
<div className="login-box">
  <div className="login-logo">
    <NavLink to='/'><b>Admin</b>LTE</NavLink>
  </div>
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Sign in to start your session</p>

      <form method="post">
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label for="remember">
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
        <p>- OR -</p>
        <NavLink to='' className="btn btn-block btn-primary">
          <i className="pi pi-facebook mr-2"></i> Sign in using Facebook
        </NavLink>
        <NavLink to='' className="btn btn-block btn-danger">
          <i className="pi pi-google mr-2"></i>Sign in using Google+
        </NavLink>
      </div>
      {/* /.social-auth-links */}

      <p className="mb-1">
        <NavLink to='' >
           I forgot my password
        </NavLink>
      </p>
      <p className="mb-0">
        <NavLink to='/register' className="text-center">
        Register a new membership
        </NavLink>
      </p>
    </div>
    {/* /.login-card-body */}
  </div>
</div>
    </div>
  )
}

export default Login