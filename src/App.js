import Topbar from './components/navbars/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './Pages/Home';
import "./app.css";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Users } from './Pages/usersPage/Users';
import  EditUser  from './Pages/editusers/EditUser';
import  CreateUser  from './Pages/newuser/CreateUser';
import Products  from './Pages/products/Products';
import EditProducts  from './Pages/products/EditProducts';
import CreateProducts  from './Pages/products/CreateProducts';


const  App = () => {
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
        <Route path="/movies" >
          <Products />
        </Route>
        <Route path="/product/:productId" >
          <EditProducts />
        </Route>
        <Route path="/newProduct" >
          <CreateProducts />
        </Route>
      </Switch>
     </div>
    </Router>
  );
}


export default App;
