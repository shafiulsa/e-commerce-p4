


import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const { createUser,  updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    // Form Submission Handler
    const onSubmit = (data) => {
        console.log(data);

        // Create user with email and password
        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);

                // Update the user's profile with name and photoURL
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('User profile updated');
                        
                        // Reset form after successful signup
                        reset();

                        // Show success alert
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Sign Up Successful!",
                            showConfirmButton: false,
                            timer: 1500
                        });

                        // Navigate to the home route
                        navigate('/');
                    })
                    .catch((error) => {
                        console.error('Error updating profile:', error);
                    });
            })
            .catch((error) => {
                console.error('Error creating user:', error);
            });
    };

    return (
        <>
            <Helmet>
                <title>Bistro | Sign Up</title>
            </Helmet>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Now!!</h1>
                        <p className="py-6">
                            Join us and enjoy exclusive benefits. It's quick and easy to sign up!
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            {/* Name Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    placeholder="Name"
                                    className="input input-bordered"
                                />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>

                            {/* Photo URL Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("photoURL", { required: true })}
                                    placeholder="Photo URL"
                                    className="input input-bordered"
                                />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>

                            {/* Email Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    placeholder="Email"
                                    className="input input-bordered"
                                />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>

                            {/* Password Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,20}$/,
                                    })}
                                    placeholder="Password"
                                    className="input input-bordered"
                                />
                                {errors.password?.type === "required" && (
                                    <span className="text-red-600">Password is required.</span>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <span className="text-red-600">Password must be at least 6 characters.</span>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <span className="text-red-600">Password must not exceed 20 characters.</span>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <span className="text-red-600">
                                        Password must include:
                                        <br />- At least one uppercase letter.
                                        <br />- At least one lowercase letter.
                                        <br />- At least one number.
                                        <br />- At least one special character (#?!@$%^&*-).
                                    </span>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
