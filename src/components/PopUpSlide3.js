import React from 'react';
import { useState } from 'react';
import '../styles/css/popUp.css';

function PopUpSlide3(props) {
  return (
    <div className="pop_up_slide slide-3">
        <div className="pop_up_content">
            <h2>Solvability of the highest order</h2>
            <p>We've managed to gather the greatest specialist in specific areas to rid your of unneccesary problems.</p>
            <span>The way we handle issues:</span>
            <ol type="1" className="list_advantages">
                <li>Identify the issues.</li>
                <li>Understand everyone's interests.</li>
                <li>List the possible solutions (options).</li>
                <li>Evaluate the options.</li>
                <li>Select an option or options.</li>
                <li>Document the agreement(s).</li>
                <li>Agree on contingencies, monitoring, and evaluation.</li>
                <button className="close_popup" onClick={() => props.setPopUp_3_State(false)}>×</button>
              </ol>
        </div>
    </div>
  );
}

export default PopUpSlide3;
