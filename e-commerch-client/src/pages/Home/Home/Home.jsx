import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import PopulerManue from '../PopulerManue/PopulerManue';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>

            </Helmet>

            <Banner></Banner>
            <Catagory></Catagory>
            <PopulerManue></PopulerManue>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;