import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import PageOne from './Pages/PageOne/PageOne';
import PageTwo from './Pages/PageTwo/PageTwo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <PageOne></PageOne>,
        loader: ()=> fetch('https://bdjobs24.free.beeceptor.com/jobs')
      },
      {
        path: '/job-details/:jobId',
        element: <PageTwo></PageTwo>,
        loader: ({params}) => fetch(`https://bdjobs24.free.beeceptor.com/jobs/job-details/${params.jobId}`)
      },
    ]
  },
  {
    path: '*',
    element: <h1>404 not found. </h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
