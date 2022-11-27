import DashBoardLayout from "../../Layout/DashBoardLayout";
import Blog from "../../pages/Blogs/Blog";
import Dashboard from "../../pages/Dashboard/Dashboard";
import MyOrders from "../../pages/Dashboard/MyOrders";
import Category from "../../pages/Home/Categories/Category";
import PhonesCollection from "../../pages/Home/Categories/PhonesCollection";
import Login from "../../pages/Login/Login";
import Payment from "../../pages/Payment/Payment";
import Register from "../../pages/Register/Register";
import DisplayError from "../../pages/shared/DisplayError/DisplayError";

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
            // {
            //     path:'/categories/:id',
            //     loader:({params}) => fetch(`http://localhost:5000/categories/${params.id}`),
            //     element:<Category></Category>
            // },
            {
                path:'/products/:name',
                loader:({params} )=> fetch(`http://localhost:5000/products/${params.name}`),
                element:<PhonesCollection></PhonesCollection>

            }
            
        ]
    },
    {
       path:'/dashboard',
       element:<DashBoardLayout></DashBoardLayout>,
       errorElement:<DisplayError></DisplayError>,
       children:[
        {
            path:'/dashboard',
            element:<MyOrders></MyOrders>
        },
        {
            path:'/dashboard/payment/:id',
            loader:({params}) => fetch(`http://localhost:5000/bookings/${params.id}`),
            element:<Payment></Payment>
        }
       ]
    }
])
export default router;