import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import UseAuth from './UseAuth';


const UserCart = () => {
    //data k axios diye load korte pari toba 
    // ai khane tan stack query diye load korbo

    const axiosSecure= useAxiosSecure();
    const {user}= UseAuth();
    const { refetch,data: cart=[]} =useQuery({

        queryKey: ['cart',user?.email],
        queryFn: async ()=>{
            const res= await axiosSecure.get(`carts?email=${user.email}`);
            return res.data;
        }
    })

    return [cart,refetch];
};

export default UserCart;