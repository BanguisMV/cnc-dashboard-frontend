import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

function RouterWrapper() {
    const user = useSelector((state:any) => state.user)

  switch (user.role) {
    case 'ADMIN':
      return <Redirect to="/admin/dashboard" />;

    case 'DEVELOPER':
      return <Redirect to="/developer/dashboard" />;

    default:
      return <Redirect to="/login" />;
  }


}

export default RouterWrapper;
