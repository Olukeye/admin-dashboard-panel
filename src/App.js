import React, {useContext} from 'react';
import Topbar from './components/navbars/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './Pages/Home';
import "./app.css";
import {BrowserRouter as Router, Route, Switch , Redirect} from "react-router-dom";
import Users  from './Pages/usersPage/Users';
import  EditUser  from './Pages/editusers/EditUser';
import  CreateUser  from './Pages/newuser/CreateUser';
import Products  from './Pages/products/Products';
import ProductList from './Pages/products/ProductList';
import CreateProducts  from './Pages/products/CreateProducts';
import Lists  from './Pages/movieLists/Lists';
import {AuthContext} from "./context/authContext/AuthContext";
import Login from './Pages/login/Login';
import ListUpdate from './Pages/movieLists/ListUpdate';
;


const  App = () => {
  const {user} = useContext(AuthContext)
  return ( 
    <Router>
      <Switch>
      <Route path="/login" >
          {user ? <Redirect to="/" /> : <Login />}
      </Route>
      {user &&
       <>
     <Topbar />
     <div className="container">
      <Sidebar />
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
        <Route path="/movie" >
          <ProductList />
        </Route>
        <Route path="/product/:productId" >
         <Products />
        </Route>
        <Route path="/CreateProduct" >
          <CreateProducts/>
        </Route>
        <Route path="/lists" >
          <Lists />
        </Route>
        <Route path="/list/:listId" >
        <ListUpdate />
        </Route>
        {/* <Route path="/newList" >
          <CreateProducts/>
        </Route> */}
     </div>
     </>
}
     </Switch>
    </Router>
  );
}


export default App;
