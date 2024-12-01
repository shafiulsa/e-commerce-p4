
import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'

const Login = () => {
    // const captchaReff = useRef(null);

    const [disabled, setDisabled] = useState(true);


    const { signIn } = useContext(AuthContext);

    const navigate =useNavigate();
    const location = useLocation();

    //kon location thaka asce sata amra ber kori
  
    const from = location.state?.from?.pathname || "/";
    console.log('state in the location,log in page ',location.state);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire("Log in Successfully !!!");

                // login successfull hoila kon rout a niye jabe sat
                navigate(from, { replace: true });
            })
    };

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleValidedCaptur = (e) => {

        // const user_captcha_value = captchaReff.current.value;
        const user_captcha_value = e.target.value;

        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
    }

    return (

        <>
            <Helmet>
                <title>Bistro |  Log in</title>

            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input
                                    onBlur={handleValidedCaptur}
                                    type="text"
                                    name="captcha"
                                    // ref={captchaReff}
                                    placeholder="enter above captcha"
                                    className="input input-bordered"
                                    required
                                />
                                {/* <button type="button" onClick={handleValidedCaptur} className="btn btn-primary btn-xs">
                                    Validate Captcha
                                </button> */}
                            </div>
                            <div className="form-control mt-6">
                                {/* TODO : apply disable for recapture */}
                                {/* <input disabled={disabled} className="btn btn-active btn-accent" type="submit" value="Login" /> */}

                                <input disabled={false} className="btn btn-active btn-accent" type="submit" value="Login" />
                            </div>
                            <p><span> new here <Link  className='text-blue-500' to={'/singup'}>Register</Link> </span></p>
                        </form>

                
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
