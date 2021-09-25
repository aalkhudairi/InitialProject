import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'; 
import HeroSection from './components/HeroSection';
import Login from './components/Login';
import {Link} from "react-router-dom";
import React, {useState} from 'react';


function App() {


  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }; 

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState(""); 

  const Login = details => {
    console.log(details); 

  }

  const Logout = () => {
    console.log("Logout");
  }

 

  return (
    <div>  

    <Router>
      <NavBar /> 
      <Switch> 
        <Route path='/' component= {Home} />
        <Route path='/btn-link' component={Login}/>
      </Switch>
    </Router>
    
    </div> 
    
  );
}

export default App;
