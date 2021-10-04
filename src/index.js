import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './components/pages/FirebaseContext';
import {firebase} from './components/pages/config';

ReactDOM.render(

  <React.StrictMode>

<FirebaseContext.Provider value={{firebase}}></FirebaseContext.Provider>
  <App />

  </React.StrictMode>
  , document.getElementById('root')
);

