import React,{useContext,useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Context} from './Context';

function Main(){
  const [theme,setTheme] = useState("light-blue");
  return(
    <React.StrictMode>
    <Context.Provider value={{theme,setTheme}}>
      <App />
    </Context.Provider>
  </React.StrictMode>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
