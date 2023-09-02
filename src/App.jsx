import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import CategoryData from "./CategoryData/CategoryData";
import SingleData from "./SingelData/SingleData";
import Cart from "./cart/Cart";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import SignUp from "./form/Signup";
import AuthContext from "./Authentication/AuthContext";
import Payment from "./payment/Payment";
import Dashboard from "./dashboard/Dashboard";
import Signin from "./form/Signin";
import PrivetRoute from "./privetRoute/PrivetRoute";
import AdminDashboard from "./admin/dashboard/AdminDashboard";
import Allproduct from "./admin/Allproduct/Allproduct";
import AddProduct from "./admin/AddProduct/AddProduct";
import Manageuser from "./admin/user/Manageuser";
import BusinessAnalyse from "./admin/BusinessAnalyse/BusinessAnalyse";
import { Provider } from "react-redux";
import { store } from "./redux/store";

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
          element: <PrivetRoute><SingleData/></PrivetRoute>
        },
        {
          path: '/cart',
          element: <PrivetRoute><Cart/></PrivetRoute>
        },
        {
          path: '/Signup',
          element: <SignUp/>
        },
        {
          path: 'signin',
          element : <Signin/>
        },
        {
          path: '/dashboard',
          element : <Dashboard/>
        }

      ]
    },
    {
      path: '/payment/success/:id',
      element:<Payment/>
    },
    {
      path: '/admin',
      element: <AdminDashboard/>,
      children: [
        {
          path: 'dhome',
          element:<BusinessAnalyse/>
      },
        {
          path: 'allproduct',
          element: <Allproduct/>
        },
        {
          path: 'addproduct',
          element: <AddProduct />
        },
        {
          path: 'user',
          element: <Manageuser />
        }
      ]
    }
   ])
 
  
  
   return (
     <QueryClientProvider client={queryClient}>
       <AuthContext>
         <Provider store={store}>
           <RouterProvider router={router} />
        </Provider>
       </AuthContext>
    </QueryClientProvider>
  )
 };
 
 export default App;