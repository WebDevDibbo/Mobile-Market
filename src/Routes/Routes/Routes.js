import DashBoardLayout from "../../Layout/DashBoardLayout";
import Blog from "../../pages/Blogs/Blog";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Category from "../../pages/Home/Categories/Category";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const {default:Home}  =require("../../pages/Home/Home/Home");


 const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
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
                path:'/categories/:id',
                loader:({params}) => fetch(`http://localhost:5000/categories/${params.id}`),
                element:<Category></Category>
            },
            
        ]
    },
    {
       path:'/dashboard',
       element:<DashBoardLayout></DashBoardLayout>,
       children:[
        {
            path:'/dashboard',
            element:<Dashboard></Dashboard>
        }
       ]
    }
])
export default router;