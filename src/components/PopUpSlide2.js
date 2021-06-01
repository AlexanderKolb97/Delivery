import React from 'react';
import { useState } from 'react';
import '../styles/css/popUp.css';

function PopUpSlide2(props) {
  return (
    <div className="pop_up_slide slide-2">
        <div className="pop_up_content">
            <h2>Great performance</h2>
            <p>We are happy to work 24/7 for the benefits of yours. Support-department is always available so you can ask for help by any issue comes to your way.</p>
            <span>Possible options to reach us out:</span>
            <ul className="list_advantages">
                <li>Email: delivery@gmail.com</li>
                <li>Phone number: +375 (17) 234-51-41. <br/> Your call is free.</li>
                <button className="close_popup" onClick={() => props.setPopUp_2_State(false)}>×</button>
            </ul>
        </div>
    </div>
  );
}

export default PopUpSlide2;
