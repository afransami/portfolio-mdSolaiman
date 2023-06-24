import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/pages/about.jsx';
import Resume from './components/pages/Resume.jsx';
import Projects from './components/pages/Projects.jsx';
import Main from './components/Layouts/Main.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "home",
        element: <Home></Home>
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "resume",
        element: <Resume></Resume>
      },
      {
        path: "projects",
        element: <Projects></Projects>
      },
    ]
  }
])
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='bg-indigo-950 bg-gradient-to-bl from-slate-600'>
  <RouterProvider router={router} />
  </div>
  </React.StrictMode>,
)
