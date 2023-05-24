import React from 'react'
import 'primeicons/primeicons.css';
import { useNavigate } from 'react-router-dom';


function Logout() {

    const navigate = useNavigate()

    const userLogout = () => {
        let token = sessionStorage.getItem('token')
        if(token) {
            sessionStorage.removeItem('token');
            navigate('../')
        }
    }

  return (
    <>
        <i className="pi pi-power-off" style={{ fontSize: '2rem' }} onClick={()=>userLogout()}></i>
    </>
  )
}

export default Logout