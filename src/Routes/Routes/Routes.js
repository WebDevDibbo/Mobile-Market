import DashBoardLayout from "../../Layout/DashBoardLayout";
import AllUser from "../../pages/AllUsers/AllUser";
import Blog from "../../pages/Blogs/Blog";
import AddProduct from "../../pages/Dashboard/AddProduct/AddProduct";
import Dashboard from "../../pages/Dashboard/Dashboard";
import MyOrders from "../../pages/Dashboard/MyOrders";
import MyProducts from "../../pages/Dashboard/MyProducts/MyProducts";
import PhonesCollection from "../../pages/Home/Categories/PhonesCollection";
import Login from "../../pages/Login/Login";
import Payment from "../../pages/Payment/Payment";
import Register from "../../pages/Register/Register";
import DisplayError from "../../pages/shared/DisplayError/DisplayError";
import AdminRoute from "./AdminRoute/AdminRoute";
import BuyerRoute from "./BuyerRoute/BuyerRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const {default:Home}  =require("../../pages/Home/Home/Home");


 const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/products/:name',
                loader:({params} )=> fetch(`http://localhost:5000/products/${params.name}`),
                element:<PrivateRoute><PhonesCollection></PhonesCollection></PrivateRoute>

            }
            
        ]
    },
    {
       path:'/dashboard',
       element:<PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
       errorElement:<DisplayError></DisplayError>,
       children:[
           {
               path:'/dashboard',
               element:<Dashboard></Dashboard>
           },
           {
               path:'/dashboard/myorders',
               element:<BuyerRoute><MyOrders></MyOrders></BuyerRoute>
           },
           {
            path:'/dashboard/payment/:id',
            loader:({params}) => fetch(`http://localhost:5000/bookings/${params.id}`),
            element:<Payment></Payment>
        },
        {
            path:'/dashboard/addproduct',
            element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
        },
        {
            path:'/dashboard/myproducts',
            element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
        },
        {
            path:'/dashboard/allUsers',
            element:<AdminRoute><AllUser></AllUser></AdminRoute>
        }
       ]
    }
])
export default router;