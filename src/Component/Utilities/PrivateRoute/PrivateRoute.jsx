import React, { useContext } from 'react';
// import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loading from '../Loading/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    // console.log(user);

    if (loading) {
        <Loading></Loading>
    }

    if (user) {
        return children
    } else {
        return <ErrorPage></ErrorPage>
    }

};

export default PrivateRoute;