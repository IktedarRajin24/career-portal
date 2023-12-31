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
import PageThree from './Pages/PageThree/PageThree';
import { appliedJobs } from './Utilities/appliedJobs';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Statistics from './Pages/Statistics/Statistics';
import Blog from './Pages/Blog/Blog';

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
      {
        path: '/applied-jobs',
        element: <PageThree></PageThree>,
        loader: () => appliedJobs()
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element: <ErrorPage/>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
