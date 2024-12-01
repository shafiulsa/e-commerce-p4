import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import UserCart from "../../Hooks/UserCart";

const Navber = () => {

    const { user, logOut } = useContext(AuthContext);

    const [cart]=UserCart();
    // console.log("this is ");
    // console.log(user.email)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navigate = useNavigate();
    const handleDetailsProfile = () => {

        const userDetails = {
            displayName: user.displayName,
            email: user.email,
            photo: user.photoURL

        }

        navigate('/profile');
    }

    const navOption = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/menu'}>Our Menu</Link></li>
        <li><Link to={'/order/salad'}>Order Food</Link></li>
        <li><Link to={'/secret'}>Secret</Link></li>
        <li><Link to={'/dashboard/cart'}>
            <button className="">
                <FaCartPlus className="text-2xl mr-12" />
                <div className="absolute bottom-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 badge badge-secondary ml-1">
                    {cart.length}
                </div>
            </button>

        </Link></li>


        {/* {
            user ? <><button onClick={handleLogOut} className="btn btn-active btn-ghost">Log Out</button></>
                : <>      <li><Link to={'/login'}>Login</Link></li></>
        } */}

    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div onClick={handleDetailsProfile} tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user.photoURL} />
                                </div>

                            </div>

                            <button onClick={handleLogOut} className="btn btn-active btn-ghost">Log Out</button></>
                            : <>   <button className="btn btn-active btn-ghost"> <Link to={'/login'}>Login</Link></button>     </>
                    }
                </div>

            </div>
        </>
    );
};

export default Navber;