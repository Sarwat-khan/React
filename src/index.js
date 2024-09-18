import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import First from './components/First';
import Card from './components/card';
import Calculator from './components/second';
import createCard from './components/Cards';
import contacts from './components/contacts';
import Addintodiary from './components/Addtodiary.jsx';




const router = createBrowserRouter([

    {
        path: "/",
        element: <App />,  // Root path should render App component
      },
  
  {
    path: "/First",
    element: <First />,
  },

 
  {
    path: "/Calculator",
    element: <Calculator />,
  },
 
  {
    path: "/Card",
    element : <Card 
        name="Sarwat Khan"
        img="https://i.pinimg.com/736x/8e/8b/47/8e8b47a9f9ca5c6dbd772608ecfb9d06.jpg"
        tel="+923443888454"
        email="sarwatkhan2003@gmail.com"
      />
  },


  {
    path: "/Mapping",
    element: <div><h1>Mapping Practice</h1>{contacts.map(createCard)}</div>
  },

  {
    path: "/Addintodiary",
    element: <Addintodiary/>,
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(<RouterProvider router={router}> </RouterProvider>);

