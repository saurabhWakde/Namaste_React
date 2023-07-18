import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Contact from './components/Contact';
import Login from './components/Login';
import Menu from './components/Menu';
import Error from './components/Error';



const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter =createBrowserRouter([
  

      {
        path : "/",
        element :<App/> ,
        errorElement:<Error/>
      },
      {
        path : "/about",
        element :<About name="saurabh"  location="Maharastra" contact="8308645619" /> ,
      },
      {
        path : "/contact",
        element : <Contact/>,
      },
      {
        path : "/login",
        element : <Login/>,
      },
      {
        path:'/restaurant/:resId',
        element : <Menu/>,
      }
    
    
])
root.render(
  <React.StrictMode>
   <RouterProvider router={appRouter}/>
  </React.StrictMode>
);
;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
