import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/sectionTitle/SectionTitle';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import UseMenu from '../../../Hooks/UseMenu';

const PopulerManue = () => {

     const [manu]=UseMenu();
     const popular = manu.filter(item => item.category === 'popular');

    // const[manu,setManu]=useState([]);

    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res =>res.json())
    //     .then(data => {
    //         console.log(data);
    //         const populerItems= data.filter(item=> item.category === 'popular')
    //         setManu(populerItems)})
    // },[])
    return (
        <section className='mb-20 '>
                <SectionTitle
                heading='From Our Manu'
                subHeading='popular Items'
                ></SectionTitle>

                <h2>{manu.length}</h2>

                <div className='grid md:grid-cols-2 gap-4'>
                    {
                        // manu.map(item => <MenuItem
                        popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                        ></MenuItem>)
                    }
                </div>
                <button className="btn btn-outline item-center border-0 border-b-4 mt-4">View full Menu</button>


        </section>
    );
};

export default PopulerManue;