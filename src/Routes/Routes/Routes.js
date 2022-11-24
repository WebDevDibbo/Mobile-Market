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
            }
        ]
    }
])
export default router;