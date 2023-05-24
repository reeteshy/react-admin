import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet';

function Protected(props) {
  const { Component } = props
  const navigate = useNavigate();
  useEffect(() => {
    let login = sessionStorage.getItem('token');
    if (!login) {
      navigate('../')
    }
  })

  return (
    <>
      <Helmet>
        <title> {props.title} </title>
      </Helmet>
      <Component />
    </>
  )
}

export default Protected