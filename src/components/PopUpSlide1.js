import React from 'react';
import { useState } from 'react';
import '../styles/css/popUp.css';


function PopUpSlide1(props) {
  return (
    <div className="pop_up_slide slide-1">
        <div className="pop_up_content">
            <h2>Express delivery</h2>
            <p>Service on delivery of consignments with standard delivery times throughout the territory of the Republic of Belarus.</p>
            <span>Advantages:</span>
            <ul className="list_advantages">
                <li>- Delivery to 100 per cent of settlements in the Republic of Belarus;</li>
                <li>- Pickup is possible in the evening from 18:00 to 21:00 in the city of Minsk and other settlements;</li>
                <li>- Delivery is possible on Saturday;</li>
                <li>- Reduced fare for delivery outside the main list of serviced settlements in the Republic of Belarus;</li>
                <li>- Free loading/unloading of up to 35 kg.</li>
                <button className="close_popup" onClick={() => props.setPopUp_1_State(false)}>×</button>
            </ul>
        </div>
    </div>
  );
}

export default PopUpSlide1;
