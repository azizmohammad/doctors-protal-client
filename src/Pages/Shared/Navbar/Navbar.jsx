import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { MdAddShoppingCart, MdCancel, MdDashboard, MdFavoriteBorder, MdLogin, MdLogout, MdSearch } from "react-icons/md";
// import { FaEllipsisV } from "react-icons/fa";

const Navbar = () => {

    const [isDwear, setIsDawer] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


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

        {user &&
            <li>
                <Link className='hover:bg-orange-500 transition-all' to="/dashboard">Dashboard</Link>
            </li>}

        <li>
            <Link className='hover:bg-orange-500 transition-all' to="/contact">Contact Us</Link>
        </li>

    </React.Fragment>

    return (
        <>
            <div className="navbar bg-teal-600 text-white lg:px-10 md:px-7 px-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 bg-slate-400  rounded-box w-52">
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
                    {
                        user?.uid ?
                            <>
                                {/* <span className='lg d-flex align-items-center text-white mr-3'>{user?.displayName}</span> */}

                                <div className="avatar ml-5">
                                    <div className="w-11 h-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img onClick={() => setIsDawer(true)} src="https://source.unsplash.com/100x100/?portrait" alt="logo" />
                                    </div>
                                </div>
                                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                            </>
                            :
                            <>
                                <Link to="/login" className='btn bg-white text-gray-900 hover:bg-gray-900 hover:text-white border-0 font-semibold mr-3'>Login</Link>
                                <Link to="/singup" className='btn bg-gray-900 text-white hover:bg-white hover:text-gray-900 border-0 font-semibold'>SingUp</Link>

                            </>
                    }
                </div>
            </div>

            {
                isDwear &&
                <div className={`z-50 absolute w-72 h-[500px] rounded-lg top-0 bottom-0 transition-all bg-gray-900 ${isDwear ? 'right-0' : '-right-80'}`}>
                    <MdCancel onClick={() => setIsDawer(false)} className='w-8 h-8 text-white mr-4 mt-2 ml-auto'></MdCancel>
                    <div className=''>
                        {user &&
                            <div>
                                <div className='cursor-pointer flex  justify-between items-center mt-5 px-4'>
                                    <img className='ms-3 w-12 h-12 rounded-full ' src="https://source.unsplash.com/100x100/?portrait" alt="logo" />
                                    <span className='text-xl mr-2 text-orange-600 font-bold capitalize'>{user?.displayName}</span>
                                </div>
                                <div className='cursor-pointer flex justify-end items-center my-5 bg-gray-800 active:bg-gray-800 transition-all py-2 text-gray-50'>
                                    <Link to="/dashboard" className="font-semibold capitalize mr-4">Dashboard</Link>
                                    <MdDashboard className='w-6 h-6 mr-4'></MdDashboard>
                                </div>

                                <div className='cursor-pointer  flex justify-end items-center my-5 hover:bg-gray-800 transition-all  text-gray-50 py-2'>
                                    <span className="font-semibold capitalize mr-4">Search</span>
                                    <MdSearch className='w-6 h-6 mr-4'></MdSearch>
                                </div>
                                <div className='cursor-pointer py-2 flex justify-end items-center my-5 hover:bg-gray-800 transition-all  text-gray-50'>
                                    <span className="font-semibold capitalize mr-4">Orders</span>
                                    <MdAddShoppingCart className='w-6 h-6 mr-4'></MdAddShoppingCart>
                                </div>
                                <div className='cursor-pointer py-2 flex justify-end items-center my-5 hover:bg-gray-800 transition-all  text-gray-50'>
                                    <span className="font-semibold capitalize mr-4">Wishlist</span>
                                    <MdFavoriteBorder className='w-6 h-6 mr-4'></MdFavoriteBorder>
                                </div>
                                <p className='border-t-2  border-gray-700'></p>
                            </div>

                        }

                    </div>
                    <div className='mt-9'>
                        {user ?
                            <Link to='/login' onClick={handelLogOut} className=' py-2 flex justify-end items-center my-5 hover:bg-gray-800 transition-all  text-orange-600'>
                                <span className="font-semibold capitalize mr-4">LogOut</span>
                                <MdLogout className='w-6 h-6 mr-4'></MdLogout>
                            </Link>
                            :
                            <Link to='/login' className=' py-2 flex justify-end items-center my-5 hover:bg-gray-800 transition-all  text-gray-50'>
                                <span className="font-semibold capitalize mr-4">Login</span>
                                <MdLogin className='w-6 h-6 mr-4'></MdLogin>
                            </Link>

                        }
                    </div>
                </div>
            }

        </>

    );
};

export default Navbar;









