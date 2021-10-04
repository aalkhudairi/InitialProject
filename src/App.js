import React, {useState, useEffect} from 'react'; 
import Navbar from './components/NavBar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import products from './components/pages/Products';
import SignUp from './components/pages/SignUp';


 
function App() {

  
  return (
  




    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={products} />
          <Route path='/sign-up' component={SignUp}
           />
        </Switch>
      </Router>
      </div>

    
  );
}

export default App;


