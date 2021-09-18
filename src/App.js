import Topbar from './components/navbars/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './Pages/Home';
import "./app.css";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Users } from './Pages/usersPage/Users';
import  EditUser  from './Pages/editusers/EditUser';
import  CreateUser  from './Pages/newuser/CreateUser';


function App() {
  return (
    <Router>
     <Topbar />
     <div className="container">
      <Sidebar />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/users" >
          <Users />
        </Route>
        <Route path="/user/:userId" >
          <EditUser />
        </Route>
        <Route path="/createuser" >
          <CreateUser />
        </Route>
      </Switch>
     </div>
    </Router>
  );
}


export default App;
