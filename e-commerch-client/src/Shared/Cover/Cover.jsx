import React from 'react';
import { Parallax, Background } from 'react-parallax';


const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div
                className="hero h-[700px]"
                style={{
                    backgroundImage: `url(${img})`,
                }}>
                    
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title} </h1>


                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;

























// const Cover = ({ img, title }) => {
//     return (
//         <div
//             className="hero h-[700px]"
//             style={{
//                 backgroundImage: `url(${img})`,
//             }}>
//             <div className="hero-overlay bg-opacity-60"></div>
//             <div className="hero-content text-neutral-content text-center">
//                 <div className="max-w-md">
//                     <h1 className="mb-5 text-5xl font-bold">{title} </h1>


//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cover;