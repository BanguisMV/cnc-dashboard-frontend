// import { useDispatch } from 'react-redux'
import AppLayout from '../../layout/AppLayout'

const Dashboard = () => {
    // const dispatch = useDispatch()
    // const Logout = () => {
    //     localStorage.removeItem('accessToken')
    //     localStorage.removeItem('role')
    //     dispatch({ type: 'LOGIN' })
    //     window.location.href = '/'
    // }
    return (
        <AppLayout title='Dashboard'>
            <div style={{ height:'200vh'}}>
            Dashboard
            </div>
     
        </AppLayout>
    )
}

export default Dashboard
