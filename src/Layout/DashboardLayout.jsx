import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-gray-300 p-10">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-secondary">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-secondary text-white font-semibold">
                        <li>
                            <Link>My Appointments</Link>
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;