import React, { useState } from 'react';
import orderCoverImage from '../../../assets/shop/banner2.jpg'
import Cover from '../../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../../Hooks/UseMenu';
import FoodCard from '../../../Shared/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {


    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [manu] = UseMenu();




    const salad = manu.filter(item => item.category === 'salad');
    const drinks = manu.filter(item => item.category === 'drinks');
    const dessert = manu.filter(item => item.category === 'dessert');
    const soup = manu.filter(item => item.category === 'soup');
    const offered = manu.filter(item => item.category === 'offered');
    const pizza = manu.filter(item => item.category === 'pizza');

    return (
        <div>
            <Helmet>
                <title>Bistro | Order food</title>

            </Helmet>
            <Cover img={orderCoverImage} title={'order Food'}></Cover>


            <Tabs selectedIndex={tabIndex} // Use selectedIndex instead of defaultIndex
                onSelect={(index) => {
                    setTabIndex(index); // Update the state when a tab is selected
                }}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>



                {/* <TabPanel>
                    <div className='grid grid-cols-3 gap-10'>
                        {
                            salad.map(item => <FoodCard
                            key={item._id}
                            item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel> */}
                <TabPanel>
                    <h2>salad</h2>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <p>pizza</p>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <h2>soup</h2>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;