import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Loading from '../Loading/Loading';

const AdminRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const { data: dbUser = {}, isLoading } = useQuery({
        queryKey: ["/getUser"],
        queryFn: async () => {
            try {
                const res = await fetch(`https://my-portfolio-server-side.vercel.app/getUser?email=${email}`)
                const result = res.json()
                return result
            } catch (error) {
                console.log(error);
            }
        }
    })

    // console.log(dbUser);
    if (isLoading) {
        <Loading></Loading>
    } else {
        // console.log(dbUser);
        if (dbUser) {
            const isAdmin = dbUser?.data?.userRole === "admin";
            // console.log(isAdmin);
            if (isAdmin) {
                return children;
            } else {
                toast.error("You are not authorized to go to this route ")
                return <Navigate to={"/"}></Navigate>
            }
        } else {
            toast.error("You are not authorized to go to this route ")
            return <Navigate to={"/"}></Navigate>
        }
    }
};

export default AdminRoute;