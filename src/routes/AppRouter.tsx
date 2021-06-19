import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import AdminDashboard from '../components/admin/dashboard/AdminDashboard'
import AdminDevelopers from '../components/admin/developers/AdminDevelopers'
import AdminProject from '../components/admin/projects/AdminProject'
import NotFoundPage from '../components/common/NotFoundPage'
import DevDashboard from '../pages/developer/DevDashboard'
import DevProfile from '../pages/developer/DevProfile'
import DevProject from '../pages/developer/DevProject'
import PrivateRoute from './PrivateRoute'
import RouterWrapper from './RouterWrapper'

const AppRouter = () => {
    return (
        <Fragment>

            <PrivateRoute
              exact
              path="/"
              component={RouterWrapper}
              role={['DEVELOPER', 'ADMIN']}
            />

            <PrivateRoute
              exact
              path="/admin/dashboard"
              component={AdminDashboard}
              role={['ADMIN']}
            />

            <PrivateRoute
              exact
              path="/admin/projects"
              component={AdminProject}
              role={['ADMIN']}
            />
              <PrivateRoute
              exact
              path="/admin/developers"
              component={AdminDevelopers}
              role={['ADMIN']}
            />

            <PrivateRoute
              exact
              path="/developer/dashboard"
              component={DevDashboard}
              role={['DEVELOPER']}
            />

            <PrivateRoute
              exact
              path="/developer/profile"
              component={DevProfile}
              role={['DEVELOPER']}
            />

            <PrivateRoute
              exact
              path="/developer/projects"
              component={DevProject}
              role={['DEVELOPER']}
            />


        </Fragment>
    )
}
export default AppRouter
