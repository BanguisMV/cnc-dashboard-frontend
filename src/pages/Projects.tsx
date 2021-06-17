import { Button } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'

const Project = () => {
    const dispatch = useDispatch()

    const Logout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('role')
        dispatch({ type: 'LOGIN' })
        window.location.href = '/'
    }
    return (
        <div>
            Project
          <Button onClick={Logout}>
              Logout
          </Button>
        </div>
    )
}

export default Project
