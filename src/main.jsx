import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Layout/Home';
import Statistics from './Components/Statistics/Statistics'
import AppliedJob from './Components/AppliedJob/AppliedJob'
import Blog from './Components/Blog/Blog';
import JobDetails from './Components/JobDetails/JobDetails';
import JobDetail from './Components/JobDetail/JobDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/",
        element:<App></App>
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/job",
        element:<AppliedJob></AppliedJob>,
        loader:()=>fetch('/featureJob.json')
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
     {
      path:"/jobdetail/:id",
      element:<JobDetail></JobDetail>,
      loader:()=>fetch('/featureJob.json')

     }
      // {
      //   path:"/jobdetails",
      //   element:<JobDetails></JobDetails>
      // }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App></App> */}
     <RouterProvider router={router} />
  </React.StrictMode>,
)
