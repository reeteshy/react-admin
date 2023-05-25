import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <NavLink to='/admin/' className="brand-link">
      <img src="/logo192.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3 opacityC" />
      <span className="brand-text font-weight-light">AdminLTE 3</span>
    </NavLink>

    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="/logo192.png" className="img-circle elevation-2" alt="User " />
        </div>
        <div className="info">
          <NavLink to='/admin/' className="d-block">Alexander Pierce</NavLink>
        </div>
      </div>

      {/* SidebarSearch Form */}
      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon className
               with font-awesome or any other icon font library */}
          <li className="nav-item menu-open">
            <NavLink to='/admin/' className="nav-link">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <i className="right fas fa-angle-left"></i>
              </p>
            </NavLink>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <NavLink to='/admin/product' className="nav-link">
                  <i className="pi pi--circle nav-icon"></i>
                  <p>Products</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/admin/user' className="nav-link">
                  <i className="pi pi--circle nav-icon"></i>
                  <p>Users</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/admin/post' className="nav-link">
                    <i className="pi pi--circle nav-icon"></i>
                  <p>Posts</p>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
    </>
  )
}

export default Sidebar