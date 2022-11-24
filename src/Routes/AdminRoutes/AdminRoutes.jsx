import React, { useContext } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import useAdmin from '../../hooks/useAdmin';


const AdminRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    // admin hooks
    const [isAdmin, isAdminLoding] = useAdmin(user?.email);

    const location = useLocation();

    if (loading || isAdminLoding) {
        return <div className='flex justify-center items-center h-screen'>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}

            />
        </div>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;