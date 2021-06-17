import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {
    Route,
    Redirect,
  } from "react-router-dom";
const PublicRoute = ({ component:Component,role, ...rest }:any) => {

    const auth = useSelector((state:any) => state.auth)
    const user = useSelector((state:any) => state.user)

    const dispatch = useDispatch()
  
    useEffect(() => {
      function randomIntFromInterval(min:number, max:number) { 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
        const rndInt = randomIntFromInterval(0, 1)
        const role = ['DEVELOPER', 'ADMIN']
      const token = localStorage.getItem('accessToken');
      token  ? dispatch({ type:'LOGIN' }) : dispatch({ type:'LOGOUT' })
      token &&  dispatch({ type: role[rndInt] })
    },[dispatch])
  

    
    return (
      auth.isLoggedIn ? (
            <Redirect to="/" />
        ) : (
          <Route {...rest} render={({ props }:any) => <Component {...props} /> }/>

        )
      ) 
  
}

export default PublicRoute
