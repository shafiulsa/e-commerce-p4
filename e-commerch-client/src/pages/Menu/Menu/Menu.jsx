import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';

import menuImg from '../../../assets/menu/dessert-bg.jpeg'
import dessImg from '../../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'



import PopulerManue from '../../Home/PopulerManue/PopulerManue';
import UseMenu from '../../../Hooks/UseMenu';
import SectionTitle from '../../../Components/sectionTitle/SectionTitle';
import MenuCatagory from '../MenuCatagory/MenuCatagory';


const Menu = () => {

    const [manu] = UseMenu();

    const salad = manu.filter(item => item.category === 'salad');
    const pizza = manu.filter(item => item.category === 'pizza');
    const dessert = manu.filter(item => item.category === 'dessert');
    const soup = manu.filter(item => item.category === 'soup');
    const offered = manu.filter(item => item.category === 'offered');


    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>

            </Helmet>




            <Cover img={menuImg} title={'Menu'}  ></Cover>
            {/* main cover */}

            <SectionTitle subHeading={'Dont miss'} heading={"Today's offer"}></SectionTitle>

            {/* offered menu items */}
            <MenuCatagory items={offered}></MenuCatagory>
            {/* desert menu items */}
            <MenuCatagory items={pizza} title={'pizza'} coverImg={pizzaImg}  ></MenuCatagory>

            <MenuCatagory items={dessert} title={'dessert'} coverImg={dessImg}  ></MenuCatagory>
          
            <MenuCatagory items={salad} title={'salad'} coverImg={saladImg}  ></MenuCatagory>

         
            <MenuCatagory items={soup} title={'soup'} coverImg={soupImg}  ></MenuCatagory>
          

        </div>
    );
};

export default Menu;