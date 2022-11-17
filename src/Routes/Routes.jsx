import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointments/Appointments/Appointment";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/singup',
                element: <SingUp></SingUp>,
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    }
])