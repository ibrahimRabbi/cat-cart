import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Banner from "./Home/Banner";
import Navber from "./Home/Navbar";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import CategoryData from "./CategoryData/CategoryData";

 

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/:category',
          element: <CategoryData/> ,
          loader: ({ params }) => fetch(`http://localhost:5000/${params.category}`)
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