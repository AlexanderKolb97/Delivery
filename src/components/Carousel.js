import React, { useState, useEffect } from 'react';

import graphic from '../images/graphic.jpg';
import delivery from '../images/delivery.jpg';
import convinience from '../images/convinience.jpg';
import laptop from '../images/laptop.jpg';

import PopUpSlide1 from './PopUpSlide1';
import PopUpSlide2 from './PopUpSlide2';
import PopUpSlide3 from './PopUpSlide3';
import PopUpSlide4 from './PopUpSlide4';

import '../styles/css/carousel.css'

function Carousel() {
    const [popUp_1_State, setPopUp_1_State] = useState(false);
    const [popUp_2_State, setPopUp_2_State] = useState(false);
    const [popUp_3_State, setPopUp_3_State] = useState(false);
    const [popUp_4_State, setPopUp_4_State] = useState(false);

    document.addEventListener('mouseup', (e) => {
        if (e.target.className != 'pop_up_slide' && !e.target.closest('.pop_up_slide')){
            setPopUp_1_State(false)
            setPopUp_2_State(false)
            setPopUp_3_State(false)
            setPopUp_4_State(false)
        }
    })

    let counter = 1;

    let timer;

    const runSlider = () => {
         timer = setInterval(() => {
            if(document.getElementById('radio' + counter)) {
                document.getElementById('radio' + counter).checked = true;
            } 

            counter++;

            if(counter > 4) {
                counter = 1;
            }    
         }, 5000);
    }

    useEffect(() => {
        runSlider()

        document.addEventListener('click', (e) => {
            clearInterval(timer)
            runSlider()
        })
    }, [])

    return (
            <div className="slider" id="top">
                {popUp_1_State ? <PopUpSlide1 setPopUp_1_State={setPopUp_1_State}/> : false}
                {popUp_2_State ? <PopUpSlide2 setPopUp_2_State={setPopUp_2_State}/> : false}
                {popUp_3_State ? <PopUpSlide3 setPopUp_3_State={setPopUp_3_State}/> : false}
                {popUp_4_State ? <PopUpSlide4 setPopUp_4_State={setPopUp_4_State}/> : false}

                <div className="slides">

                    <input type="radio" name="radio-btn" id="radio1" />
                    <input type="radio" name="radio-btn" id="radio2" />
                    <input type="radio" name="radio-btn" id="radio3" />
                    <input type="radio" name="radio-btn" id="radio4" />

                    <div className="slide first">

                        <div className="slide_intro">
                            <p className="block_text">Schedule of receiving parcels <br /> is always convinient</p>
                        </div>
                        <button className="view_details" onClick={() => setPopUp_1_State(true)}>View details</button>

                        <img src={graphic} alt="slide-1"/>
                    </div>                       
                    <div className="slide">
                        <div className="slide_intro">
                            <p className="block_text">We do our best to provide services <br /> of the highest quality</p>
                        </div>
                        <button className="view_details" onClick={() => setPopUp_2_State(true)}>View details</button>

                        <img src={delivery} alt="slide-2"/>
                    </div>   
                    <div className="slide">
                        <div className="slide_intro">
                            <p className="block_text">Each problem is going to be <br /> solved by all means</p>
                        </div>
                        <button className="view_details" onClick={() => setPopUp_3_State(true)}>View details</button>

                        <img src={convinience} alt="slide-3"/>
                    </div>   
                    <div className="slide">
                        <div className="slide_intro">
                            <p className="block_text">One of the quickest delivery <br />services worldwide</p>
                        </div>
                        <button className="view_details" onClick={() => setPopUp_4_State(true)}>View details</button>

                        <img src={laptop} alt="slide-4"/>
                    </div>   

                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                        <div className="auto-btn4"></div>
                    </div>

                    <div className="navigation-manual">
                        <label htmlFor="radio1" className="manual-btn"></label>
                        <label htmlFor="radio2" className="manual-btn"></label>
                        <label htmlFor="radio3" className="manual-btn"></label>
                        <label htmlFor="radio4" className="manual-btn"></label>
                    </div>
                </div>
            </div>
  );
}

export default Carousel;
