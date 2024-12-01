import { FaAd, FaBook, FaCalendar, FaCartPlus, FaHome, FaPaypal, FaSearch, FaServicestack } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UserCart from "../Hooks/UserCart";


const Dashboard = () => {
    const [cart]=UserCart();
    return (
        <div className="flex ">
            {/*  dashboard  side bar*/}
            <div className="w-64 min-h-full bg-orange-400 text-black">
                <ul className="menu">
                    <li><NavLink to='/dashboard/userHome'>
                        <FaHome></FaHome> User Home
                    </NavLink> </li>

                    <li><NavLink to='/dashboard/userReservation'>
                        <FaCalendar> </FaCalendar> Reservation
                    </NavLink> </li>

                    <li><NavLink to='/dashboard/userHistory'>
                        <FaPaypal></FaPaypal> Payment History
                    </NavLink> </li>

                    <li><NavLink to='/dashboard/userCart'>
                        <FaCartPlus></FaCartPlus> My Cart <p className="bg-red-500 rounded-full">{cart.length}</p>
                    </NavLink> </li>

                    <li><NavLink to='/dashboard/userReview'>
                        <FaAd></FaAd> Add review
                    </NavLink> </li>

                    <li><NavLink to='/dashboard/userBooking'>
                        <FaBook /> My Booking
                    </NavLink> </li>

                    {/* Link between  home rout and this rout */}
                    <div className="divider"></div>

                    <li><NavLink to='/'>
                        <FaHome /> Home
                    </NavLink> </li>

                    <li><NavLink to='/order/salad'>
                        <FaSearch></FaSearch> Menu
                    </NavLink> </li>

                </ul>
            </div>


            {/* dashboard  contain*/}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default Dashboard;