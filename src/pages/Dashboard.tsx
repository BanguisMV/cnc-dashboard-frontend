import { Button } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'

const Dashboard = () => {
    const dispatch = useDispatch()
    const Logout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('role')
        dispatch({ type: 'LOGIN' })
        window.location.href = '/'
    }
    return (
        <div>
            Dashboard
          <Button onClick={Logout}>
              Logout
          </Button>
        </div>
    )
}

export default Dashboard
