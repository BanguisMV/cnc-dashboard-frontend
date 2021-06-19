import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import {Route, Redirect} from "react-router-dom";

import FullWidthSpinner from '../components/common/FullWidthSpinner'

const PrivateRoute = ({ component:Component,role, ...rest }:any) => {
  const [ loading, setLoading ] = useState(false)
    const user = useSelector((state:any) => state.user)
    const roles = localStorage.getItem('role');

 useEffect(() => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 2000)

  return () => {
    setLoading(false)
  }
 },[])
  
    return (
      loading ? (
         <FullWidthSpinner />
      ) : (
        user.isLoggedIn ? (
          role.some((role:any) => role === roles) && (
            <Route {...rest}
                render={({ props }:any) =>
                user.isLoggedIn ? (
                    <Component {...props} />
                  ) :  (
                    <FullWidthSpinner />
                    ) 
                }
              />
            ) 
          ) : (
            <Redirect to="/login" />
          )
        ) 
      )
     
  
}

export default PrivateRoute
