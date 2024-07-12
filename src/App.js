import React from "react";
import Header from "./components/Header"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import SignupForm from "./components/Signup";
import { lazy } from "react";
import Login from "./components/Login";
import ContactUsPage from "./components/Contact ";
import SyllabusP1 from "./components/SyllabusP1";
import SyllabusP2 from "./components/Syllabusp2";
import Navbar from "./components/Navbar";
import PyqQuestion from "./components/PyqQuestion";
import Experiment from "./components/experiment";
import PyqQuestion1 from "./components/PyqQuestion1";
import MockTest from "./components/Mocktest";
import Ebooks from "./components/ebooks";












const Applayout = () => {
    return (
      <>
        <Header />
        
        <Outlet/>
        <Footer />
      </>
    );
  };
  const Approuter=createBrowserRouter([
    {path:"/",
    element: <Applayout/>,
    errorElement:<Error/>,
    children :[
      {path:"/about",
    element:<About/>},
    {
      path:"/",
      element:<Body/>
    },
    {path:"/login",
    element:<Login/>

    },
    
      {path:"/signup",
      element:<SignupForm/>
  
      },
      {
        path:"/contact",
        element:<ContactUsPage/>
      }, 
      {path:"/syllabuspaper1",
      element:<SyllabusP1/>
    },
    {path:"/syllabuspaper2",
    element:<SyllabusP2/>
  },
  {
    path:"/pyqP2",
    element:<PyqQuestion/>
  },
  
  {
    path:"/pyqP1",
    element:<PyqQuestion1/>
  },
  {
  path:"/experiment",
  element:<Experiment/>},
  {
    path:"/mocktest1",
    element:<MockTest/>},
    {
      path:"/ebooks",
      element:<Ebooks/>
    },
    

    

    
    
  
  
  
  
  ]
  
  
  
  
  }])
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={Approuter}/>);
  




