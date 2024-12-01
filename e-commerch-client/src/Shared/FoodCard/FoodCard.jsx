import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import UserCart from '../../Hooks/UserCart';
const FoodCard = ({ item }) => {

    const { name, image, price, recipe, _id } = item;

    const { user } = UseAuth();

    const navigate = useNavigate();
    const location = useLocation();    
    const axiosSecure =useAxiosSecure()
    const [,refetch] = UserCart();

    // const handleAddToCart = food => {
        const handleAddToCart = () => {
     
        if (user && user.email) {
            //send cart item to database
        
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            // axios.post('http://localhost:5000/carts', cartItem)
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                   
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} addade to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        //refetch the cart to show it immidately
                        refetch();
                    }
                })
        }
        else {
            // akta sweet alert add kori jodi oi khane confim kora toba login page a niye jai

            Swal.fire({
                title: "You are not Login",
                text: "Please log in for Order Products",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login "
            }).then((result) => {
                if (result.isConfirmed) {
                    //if press the login button then navigate it in login rout
                    navigate('/login', { state: { from: location } });
                    console.log('Logi in button is clicked')
                }
            });
        }
    }

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <p className='absolute right-0 mr-4 mt-4 px-4 bg-yellow-600 text-white'>${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button
                        // onClick={() => handleAddToCart(item)}
                        onClick={handleAddToCart}
                        className="btn btn-outline bg-slate-300 border-0 border-b-4 border-orange-400 mt-4">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;