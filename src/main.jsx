import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from "./routes/Home";
import Contact from './routes/Contact.jsx';

// 1 - criando provider
import { CounterContextProvider } from './context/CounterContext.jsx';

// 1 - configurando router
import { createBrowserRouter, RouterProvider, Route, Navigate} from "react-router-dom";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    // 3 - componente base
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ]

  },

  //{
  //  path: "contact",
  //  element: <Contact />,
  //},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <CounterContextProvider>
      <RouterProvider router={router} />
     </CounterContextProvider>
  </React.StrictMode>,
)
