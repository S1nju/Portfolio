import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import '@radix-ui/themes/styles.css';
import './index.css';
import { Theme } from '@radix-ui/themes';

import  {BrowserRouter} from 'react-router-dom'
import './assets/all.min.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

       <Theme accentColor="indigo" appearance="dark"  >
       <BrowserRouter>

        <App />
   </BrowserRouter></Theme>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
