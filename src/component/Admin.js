import React from 'react'
import { NavLink } from "react-router-dom";
import './admin.css';
const Admin = () => {
    return (
        <div>
            <div className='navbar'>
                <div className='navbar1' >Admin Panel</div>
            </div>
            <div className='sidebar'>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active_class">Dashboard</NavLink></li>
                    <li><NavLink exact to="/shop" activeClassName="active_class">AddProduct</NavLink></li>
                    <li><NavLink exact to="/" activeClassName="active_class">Customers</NavLink></li>
                    <li><NavLink exact to="/" activeClassName="active_class">Orders</NavLink></li>
                </ul>
            </div>

        </div>
    )
}

export default Admin
