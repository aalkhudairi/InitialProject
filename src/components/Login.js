import React from 'react';
import App from '../App';

function Login() {


      
    return (
        <form>
            <div className="form-inner">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="name>">Name:</label>
                    <input type="text" name="name" id="name"/>
                
                </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="name" id="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"  name="password"
                        id="password">Password</label>

                        
                        <input type="password" name="password" id="password"/>
                    </div>
                    <input type="submit" value="LOGIN" />
            </div>
            
        </form>
        
    )
}

export default Login;
