import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { signInWithGoogle, logOut, user } = useContext(AuthContext);
    // console.log(user);

    const loginHandle = () => {
        signInWithGoogle()
            .then(result => {
                const user = result?.user;
                console.log(user);
                const userData = {
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    emailVerified: user.emailVerified,
                    userRole: "user"
                }
                // console.log(userData);
                fetch("https://my-portfolio-server-side.vercel.app/addUser", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userData)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                    })
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <section>
            <div className="navbar bg-slate-700 text-primary px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/home" className='text-secondary'>Home</Link></li>

                            <li><Link to="/blog" className='text-secondary'>Blog</Link></li>
                            <li><Link to="/aboutUs" className='text-secondary'>About us</Link></li>
                            {
                                user?.uid &&
                                <li><Link to="/dashboard" className='text-secondary'>Dashboard</Link></li>
                            }
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl"><span className='text-primary'>Abu</span><span className='text-secondary'>Sayed</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/home" className='text-secondary'>Home</Link></li>
                        <li><Link to="/blog" className='text-secondary'>Blog</Link></li>
                        <li><Link to="/aboutUs" className='text-secondary'>About us</Link></li>
                        {
                            user?.uid &&
                            <li><Link to="/dashboard" className='text-secondary'>Dashboard</Link></li>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        !user?.uid &&
                        <button onClick={loginHandle} className='btn btn-sm btn-primary mr-2'>Log in</button>
                    }

                    {
                        user?.uid &&
                        <button onClick={logOut} className='btn btn-sm btn-secondary mr-2'>Log out</button>
                    }


                </div>
            </div>
        </section>
    );
};

export default Navbar;