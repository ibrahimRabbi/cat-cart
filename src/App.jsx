import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Banner from "./Home/Banner";
import Navber from "./Home/Navbar";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";

 

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
         }
      ]
     }
   ])
 
  
  
   return (
     <div>
       <RouterProvider router={router}/>
    </div>
  )
 };
 
 export default App;