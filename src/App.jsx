import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import CategoryData from "./CategoryData/CategoryData";
import SingleData from "./SingelData/SingleData";
import Cart from "./cart/Cart";

 

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
          loader: ({ params }) => fetch(`http://localhost:5000/category/${params.category}`)
        },
        {
          path: '/:category/:id',
          element:<SingleData/>
        },
        {
          path: '/cart',
          element: <Cart/>
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