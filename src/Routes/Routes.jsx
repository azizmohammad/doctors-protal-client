import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointments/Appointments/Appointment";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyAppoinment from "../Pages/Dashboard/MyAppoinment/MyAppoinment";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import PrivateRoutes from "./Private/PrivateRoutes";


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
            },


        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes> <DashboardLayout></DashboardLayout> </PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppoinment></MyAppoinment>,
            }
        ]
    }
])