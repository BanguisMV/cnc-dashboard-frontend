import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import {Route, Redirect} from "react-router-dom";

import FullWidthSpinner from '../components/common/FullWidthSpinner'

const PrivateRoute = ({ component:Component,role, ...rest }:any) => {
  const [ loading, setLoading ] = useState(false)
    const auth = useSelector((state:any) => state.auth)
    const user = useSelector((state:any) => state.user)

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
        auth.isLoggedIn ? (
          role.some((role:any) => role === user.role) && (
            <Route {...rest}
                render={({ props }:any) =>
                auth.isLoggedIn ? (
                    <Component {...props} />
                  ) :  (
                    <Redirect to="/login" />
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
