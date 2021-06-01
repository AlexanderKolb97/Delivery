import React, { useState, useEffect } from 'react';
import '../styles/css/burger.css';

function Burger() {

    let burger;
    let navigation;

    const handleBurger = () => {
        burger = document.querySelector('.burger');
        navigation = document.querySelector('.navigation');
        let value = parseInt(window.getComputedStyle(navigation).top) - 100;

        burger.addEventListener('click', function() {
            if(window.getComputedStyle(navigation).top == `${value}px`) {
                navigation.style.top = "0px";
                burger.querySelector('.first').classList.toggle('close');
                burger.querySelector('.second').classList.toggle('close');
                burger.querySelector('.third').classList.toggle('close');
            } else {
                navigation.style.top = `${value}px`;
            }
        })

        document.addEventListener('mouseup', function(e) {
            if(e.target.className != 'navigation') {
                navigation.style.top = `${value}px`;
                burger.querySelector('.first').classList.remove('close');
                burger.querySelector('.second').classList.remove('close');
                burger.querySelector('.third').classList.remove('close');
            }
            
        })
    }

    useEffect(() => {
        handleBurger()
    }, [])

    return (
        <div className="burger">
            <div className="burger_line first"></div>
            <div className="burger_line second"></div>
            <div className="burger_line third"></div>
        </div>
    );
}

export default Burger;
