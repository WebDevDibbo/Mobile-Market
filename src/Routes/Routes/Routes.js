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
            }
        ]
    }
])
export default router;