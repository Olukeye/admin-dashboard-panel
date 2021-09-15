import Topbar from './components/navbars/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './Pages/Home';
import "./app.css";
import { Router, Route, Switch } from 'react-router-dom'
import { Users } from './Pages/usersPage/Users';


function App() {
  return (
    <Router>
     <Topbar />
     <div className="container">
      <Sidebar />
      <Switch>
        <Route  path="/" >
          <Home />
        </Route>
        <Route  path="/users" >
          <Users />
        </Route>
      </Switch>
     </div>
    </Router>
  );
}


export default App;
