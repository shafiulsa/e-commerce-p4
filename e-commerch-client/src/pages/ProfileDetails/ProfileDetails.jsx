import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const ProfileDetails = () => {

    const {user,loading} =useContext(AuthContext)
    // console.log(user);
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-primary"></div>
            </div>
        );
    }

    return (
        <div className='py-32 flex items-center justify-center '>
            <div className="card  text-center bg-base-100 w-96 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img
                        src={user.photoURL}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{user.displayName} </h2>
                    <p>emai : {user.email}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Thnks fro visit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;