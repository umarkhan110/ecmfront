import React from 'react'
import { NavLink } from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai';
import {HiShoppingCart} from 'react-icons/hi';
import {FaRegHeart} from 'react-icons/fa';
import {RiAccountPinBoxFill} from 'react-icons/ri';
import './menu.css';
const Menu = () => {
    return (
        <div className='header'>
            <ul >
                <li className='ul1'><NavLink exact to="/" activeClassName="active_class"><span>Khirrki</span></NavLink></li>
                <li><NavLink exact to="/" activeClassName="active_class">Home</NavLink></li>
                <li><NavLink exact to="/shop" activeClassName="active_class">Shop</NavLink></li>
                <li><NavLink exact to="/about" activeClassName="active_class">About</NavLink></li>
                <li><NavLink exact to="/women" activeClassName="active_class">Womens</NavLink></li>
                <li><NavLink exact to="/men" activeClassName="active_class">Mens</NavLink></li>
                <li><NavLink exact to="/contact" activeClassName="active_class">Contact</NavLink></li>
            </ul>
            <ul>
            <li><AiOutlineSearch size={22} /></li>
            <li><HiShoppingCart size={22}  /></li>
            <li><FaRegHeart size={22}  /></li>
            <li><RiAccountPinBoxFill size={22}  /></li>
            </ul>
        </div>
    )
}

export default Menu
