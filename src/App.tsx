import { Switch, Route } from "react-router-dom";
import Login from './pages/Login'
import RouterWrapper from './routes/RouterWrapper'
import PrivateRoute from './routes/PrivateRoute'
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import PublicRoute from "./routes/PublicRoute";
import NotFoundPage from "./components/common/NotFoundPage";


function App() {

  return (
    <div className="App" style={{ height:'100%'}}>
        <Switch>

            <PrivateRoute
              exact
              path="/"
              component={RouterWrapper}
              role={['DEVELOPER', 'ADMIN']}
            />

            <PrivateRoute
              exact
              path="/admin/dashboard"
              component={Dashboard}
              role={['ADMIN']}
            />

            <PrivateRoute
              exact
              path="/developer/dashboard"
              component={Profile}
              role={['DEVELOPER']}
            />

            <PrivateRoute
              exact
              path="/developer/profile"
              component={Profile}
              role={['DEVELOPER']}
            />

          <PublicRoute exact path='/login' component={Login} />
          <Route component={NotFoundPage} />

        </Switch>
    </div>
  );
}

export default App;
