import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import CategoryData from "./CategoryData/CategoryData";
import SingleData from "./SingelData/SingleData";
import Cart from "./cart/Cart";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import SignUp from "./form/Signup";
import AuthContext from "./Authentication/AuthContext";
 
const queryClient = new QueryClient()

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
        },
        {
          path: '/Signup',
          element: <SignUp/>
        }

      ]
     }
   ])
 
  
  
   return (
     <QueryClientProvider client={queryClient}>
       <AuthContext>
         <RouterProvider router={router} />
       </AuthContext>
    </QueryClientProvider>
  )
 };
 
 export default App;