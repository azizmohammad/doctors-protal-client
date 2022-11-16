import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItem = <React.Fragment>

        <li>
            <Link className='hover:bg-orange-500 transition-all' to="/">Home</Link>
        </li>

        <li>
            <Link className='hover:bg-orange-500 transition-all' to="/about">About</Link>
        </li>

        <li>
            <Link className='hover:bg-orange-500 transition-all' to="/appointment">Appoinment</Link>
        </li>

        <li>
            <Link className='hover:bg-orange-500 transition-all' to="/reviews">Reviews</Link>
        </li>

        <li>
            <Link className='hover:bg-orange-500 transition-all' to="/contact">Contact Us</Link>
        </li>

    </React.Fragment>

    return (
        <div className="navbar bg-teal-600 text-white lg:px-10 md:px-7 px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 bg-slate-400  rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/' className="font-bold text-xl">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-1">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login" className='btn bg-gray-900 text-white hover:bg-white hover:text-gray-900 border-0 font-semibold'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;