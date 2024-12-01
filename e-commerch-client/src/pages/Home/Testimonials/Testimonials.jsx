import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/sectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// for rating star
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { SiComma } from "react-icons/si";


// import required modules
import { Navigation } from 'swiper/modules';

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        // fetch('reviews.json')
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className='my-7'>
            <SectionTitle
                subHeading={'What our Client said'}
                heading={'Testimonials'}
            ></SectionTitle>

            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >


                {
                    reviews.map(review => <SwiperSlide kay={review._id}>





                        <div className='flex flex-col items-center my-24 '>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <div className='flex text-4xl py-6'>
                                <SiComma />
                                <SiComma />
                            </div>

                            <p className='px-12'>{review.details}</p>
                            <h3 className='text-3xl text-orange-500'>{review.name} </h3>
                            <div className='flex text-4xl py-6'>
                                <SiComma />
                                <SiComma />
                            </div>
                        </div>
                    </SwiperSlide>)
                }


            </Swiper>

        </section>
    );
};

export default Testimonials;