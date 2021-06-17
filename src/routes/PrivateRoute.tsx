import React from 'react'
import { useSelector } from 'react-redux'
import {
    Route,
    Redirect,
  } from "react-router-dom";
const PrivateRoute = ({ component:Component,role, ...rest }:any) => {

    const auth = useSelector((state:any) => state.auth)
    const user = useSelector((state:any) => state.user)

    return (
      auth.isLoggedIn ? (
        role.some((role:any) => role === user.role) && (
          <Route {...rest}
              render={({ props }:any) =>
              auth.isLoggedIn ? (
                  <Component {...props} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          ) 
        ) : (
          <Redirect to="/login" />
        )
      ) 
  
}

export default PrivateRoute
