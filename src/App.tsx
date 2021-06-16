import { Route } from "react-router";

import Login from './pages/Login'
function App() {
  return (
    <div className="App">
        <Route path="/login">
          <Login />
        </Route>
    </div>
  );
}

export default App;
