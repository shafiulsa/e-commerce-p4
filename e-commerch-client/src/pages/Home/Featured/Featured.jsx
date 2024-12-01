import React from 'react';

import featurenImg from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../Components/sectionTitle/SectionTitle';

import './featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-10 my-20' >
            <SectionTitle
            heading='Feature Item'
            subHeading={'Check it out'}
            ></SectionTitle>

            <div className='md:flex justify-center
             bg-slate-600
             bg-opacity-40
             items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featurenImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 10,2024</p>
                    <p className='uppercase'>Where can i got Some?</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias aliquid ad tenetur odio necessitatibus sit exercitationem perspiciatis animi omnis voluptates, adipisci rerum sequi est assumenda iste esse magni eius? Adipisci recusandae laboriosam inventore ullam neque, consequuntur provident iure velit dolorem sint repellat est maiores eius doloremque consequatur aliquid in. Alias.
                        <button className="btn btn-outline border-0 border-b-4 mt-4">Order now</button>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Featured;