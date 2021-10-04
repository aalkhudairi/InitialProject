import React from 'react';
import './SignUp.css';
import {useState} from 'react'; 
import { FirebaseContext } from './FirebaseContext';
import { useContext } from 'react';



const  SignUp = ( ) => {
 
  /*
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  
  const {firebase} = useContext(FirebaseContext); 
  */ 
  return (
    <div className="container">
      <form /*
      onSubmit={(event) => {
        event.preventDefault()
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => alert('signed up!'))
        .catch((error) => alert(error.message))
        alert(email + " " + password);
        setEmail("");
        setPassword(""); 
      }}
      */> 
        <label>Email</label>

        <input 
        type="email"
        /*
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        *//>

        <label>Password</label>

        <input 
        type="password"
        /*value={password}
        onChange={(event) => setPassword(event.target.value)}
        *//>

        <button type="submit">Sign Up</button>
      </form>
    </div>
        

        
    );
};

export default SignUp; 