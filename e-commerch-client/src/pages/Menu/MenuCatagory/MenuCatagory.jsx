import React from 'react';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import Cover from '../../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCatagory = ({ items, title, coverImg }) => {
    return (
        <div className='pt-12 pb-12'>
            {title && <Cover img={coverImg} title={title} ></Cover>}
            <div className='grid md:grid-cols-2 gap-4 mt-16'>
                {
                    // manu.map(item => <MenuItem
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order now</button>
            </Link>

        </div>
    );
};

export default MenuCatagory; 