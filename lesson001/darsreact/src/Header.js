import React  from "react";
import './Header.css';
import { FiStar, FiShoppingCart } from 'react-icons/fi';
import {  FaAngular, FaAppStore } from 'react-icons/fa';
import { IoAddCircleOutline } from 'react-icons/io5'


function Header() {
    return ( 
        <div className="navbar">
            <FiStar/>
            <FiShoppingCart/>
            <FaAngular/>
            <FaAppStore/>
            <IoAddCircleOutline/>
        </div>
    )
}


export default Header;