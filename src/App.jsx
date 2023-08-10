import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Banner from "./Home/Banner";
import Navber from "./Home/Navbar";

 

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Banner />,
      children: [
        {
          path : '/',
         element:<Navber/>
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