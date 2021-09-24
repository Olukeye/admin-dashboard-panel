import React, { useState, useEffect } from 'react';
import Topbar from './components/navbars/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './Pages/Home';
import "./app.css";
import axios from 'axios'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Users } from './Pages/usersPage/Users';
import  EditUser  from './Pages/editusers/EditUser';
import  CreateUser  from './Pages/newuser/CreateUser';
import Products  from './Pages/products/Products';
import EditProducts  from './Pages/products/EditProducts';
import CreateProducts  from './Pages/products/CreateProducts';


function App() {
  const [user, userState] = useState([]);

  const  MONTHS = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    // get statistic of the users on the admin board
    const getStat = async() => {
      try{
        const res = await axios.get("/user/state", {
          header: {
            token : ""
          }
        })
        userState(res.data)
      } catch(err) {
        console.log(err)
      } 
    };
    getStat()
    }, [])

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
        <Route path="/product" >
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
