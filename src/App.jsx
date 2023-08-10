import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Banner from "./Home/Banner";

 

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element : <Banner/>
      
     }
   ])
 
  
  
   return (
     <div>
       <RouterProvider router={router}/>
    </div>
  )
 };
 
 export default App;