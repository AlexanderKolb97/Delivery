import React from 'react';
import logo from '../images/logo.png';
import '../styles/css/welcome.css';

function Welcome() {
    window.addEventListener('load', () => {
        document.getElementById('welcome').style.display = 'flex';
        document.querySelector('.welcome_btn').addEventListener('click', () => document.getElementById('welcome').style.display = 'none');
    })

    return (
        <div className="welcome_block" id="welcome">
            <div className="welcome_wrapper">
                <h1>Welcome to our service!</h1>
                <p>Let's enjoy delivery together</p>
                <button className="welcome_btn">GET STARTED</button>
            </div>
        </div>
    );
}

export default Welcome;
