import React, { useState, useEffect } from 'react';
import Burger from './Burger';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Nav() {
    useEffect(() => {
        document.querySelectorAll('.navigation li').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelectorAll('.navigation li').forEach(item => item.classList.remove('active'));
                link.classList.add('active');
            })
        })
    }, [])

    return (
        <nav>
            <Burger />
            <ul className="navigation">
                <li className="name_link active">
                    <Link to="/delivery">Main</Link>
                </li>
                <li className="services_link">
                    <Link to="/services">Services</Link>            
                </li>
                <li className="about_link">
                    <Link to="/about">About</Link>
                </li>
                <li className="contacts_link">
                    <Link to="/support">Support</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
