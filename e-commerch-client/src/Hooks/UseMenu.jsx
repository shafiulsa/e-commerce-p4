import React, { useEffect, useState } from 'react';
import Menu from '../pages/Menu/Menu/Menu';

const UseMenu = () => {  
    
    const[manu,setManu]=useState([]);
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        // fetch('menu.json')    akhon ai data server taka upload korbo
        fetch('http://localhost:5000/menu')
        .then(res =>res.json())
        .then(data => {
            // console.log(data);
            setManu(data)})
            setLoading(false);
    },[])

    return [manu,loading];
};

export default UseMenu;