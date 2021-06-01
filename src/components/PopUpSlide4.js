import React from 'react';
import { useState } from 'react';
import '../styles/css/popUp.css';

function PopUpSlide4(props) {
  return (
    <div className="pop_up_slide slide-4">
        <div className="pop_up_content">
            <h2>Good courier service</h2>
            <p>Outstanding quality of courier service for expenses of:</p>
            <ul className="list_advantages">
                <li>- Exceptional Customer Service. Customer service is everything in the courier industry.</li>
                <li>- A flexible Courier Service. When booking a courier, you should look for a company that provides plenty of options.</li>
                <li>- Value for Money Services. Cheap often equals a poor quality service.</li>
                <li>- Quick delivery times</li>
                <button className="close_popup" onClick={() => props.setPopUp_4_State(false)}>×</button>
            </ul>
        </div>
    </div>
  );
}

export default PopUpSlide4;
