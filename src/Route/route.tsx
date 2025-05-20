import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Store from "../pages/Store";
import App from "../App";

 export const mainRouter=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/store',
                element:<Store/>
            }
        ]

    },
    
])