import React from 'react'
import { NavLink } from 'react-router-dom'

function Register() {
  return (
    <div className="hold-transition register-page">
    <div className="register-box">
<div className="register-logo">

<NavLink to='/'><b>Admin</b>LTE</NavLink>
</div>

<div className="card">
  <div className="card-body register-card-body">
    <p className="login-box-msg">Register a new membership</p>

    <form action="../../index.html" method="post">
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Full name" />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-user"></span>
          </div>
        </div>
      </div>
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
      <div className="input-group mb-3">
        <input type="password" className="form-control" placeholder="Retype password" />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-lock"></span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="icheck-primary">
            <input type="checkbox" id="agreeTerms" name="terms" value="agree" />
            <label for="agreeTerms">
             I agree to the <NavLink to='/'>terms</NavLink> 
            </label>
          </div>
        </div>
        {/* /.col  */}
        <div className="col-4">
          <button type="submit" className="btn btn-primary btn-block">Register</button>
        </div>
        {/* /.col  */}
      </div>
    </form>

    <div className="social-auth-links text-center">
    <p>- OR -</p>
        <NavLink to='' className="btn btn-block btn-primary">
          <i className="pi pi-facebook mr-2"></i> Sign in using Facebook
        </NavLink>
        <NavLink to='' className="btn btn-block btn-danger">
          <i className="pi pi-google mr-2"></i>Sign in using Google+
        </NavLink>
    </div>
    <NavLink to='/' className="text-center">I already have a membership</NavLink> 
  </div>
  {/* /.form-box  */}
</div>
{/* /.card  */}
</div>
  </div>
  )
}

export default Register