// import { useDispatch } from 'react-redux'
import AppLayout from '../../layout/AppLayout'
import AdminDashboard from '../../components/admin/dashboard/AdminDashboard'
const Dashboard = () => {

    return (
        <AppLayout title='Dashboard'>
            <AdminDashboard />    
        </AppLayout>
    )
}

export default Dashboard
