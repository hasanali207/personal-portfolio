import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Timeline from "../components/Timeline";

const router = createBrowserRouter([
    {
      path: "/",    
      element: <Main></Main>,
      children:[
        {
            path: "/",    
            element: <Home></Home>,
        },
        {
            path: "portfolio",    
            element: <Portfolio></Portfolio>,
        },
        {
            path: "timeline",    
            element: <Timeline></Timeline>,
        },
        {
          path: "contact",    
            element: <Contact></Contact>,
        },
        {
          path: "about",    
            element: <About></About>,
        },
        {
          path: "blog",    
          element: <About></About>,
        }

      ]
    },
  ]);
  export default router;
  