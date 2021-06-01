import React, { useState, useEffect, useContext } from 'react';
import {Context} from '../App';
import InputsToRender from './InputsToRender';
import {locations} from './Locations'
import '../styles/css/form.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Form() {
    const {getPrice, myData, priceState, setPriceState} = useContext(Context);
    const [inputsState, setInputsState] = useState(true);
    const [optionsFrom, setOptionsFrom] = useState(null);
    const [optionsTo, setOptionsTo] = useState(null);

    const setBtnType = () => {
        let btnsTypes = document.querySelectorAll('.form_details > button')

        btnsTypes.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if(e.target.innerHTML === 'Pets') {
                    setInputsState(false)
                } else {
                    setInputsState(true);
                }
                btnsTypes.forEach(button => button.classList.remove('active'));
                btn.classList.add('active');
            })
        })
    }

    const numIncrease = () => {
        document.querySelector('[name="num"]').value = +document.querySelector('[name="num"]').value + 1;
    }

    const numDecrease = () => {
        if(document.querySelector('[name="num"]').value > 1) {
            document.querySelector('[name="num"]').value = +document.querySelector('[name="num"]').value - 1;
        } else {
            return
        }      
    }

    const showOptionsFrom = (e) => {
        if(!e.target.value) return
        setOptionsFrom(locations.filter(location => location.includes(e.target.value)))
    }

    const showOptionsTo = (e) => {
        if(!e.target.value) return
        setOptionsTo(locations.filter(location => location.includes(e.target.value)))
    }

    const setInputFromValue = (e) => {
        document.querySelector('input[name="from_city"]').value = e.target.innerHTML;
        setOptionsFrom(null)
    }

    const setInputToValue = (e) => {
        document.querySelector('input[name="to_city"]').value = e.target.innerHTML;
        setOptionsTo(null)
    }

    useEffect(() => {
        setBtnType()
    }, [])

    return (
        <div className="form_wrapper">
            <form>
                <h3>Delivery price calculation</h3>

                <div className="form_destination">
                    <div className="from">
                        <h4>From</h4>
                        <label htmlFor="from_country">Country</label>
                        <input type="text" name="from_country" value="Belarus" readOnly/>
                        <label htmlFor="from_city">City/Town</label>
                        <input type="text" name="from_city" required onChange={showOptionsFrom}/>
                        <div className="options">
                            <ul>
                                {optionsFrom ?
                                optionsFrom.map(option => {
                                    return (
                                        <li key={Math.random(1000)} onClick={setInputFromValue}>{option}</li>
                                    )
                                })
                                : null}
                            </ul>
                            
                        </div>
                    </div>
                    <div className="to">
                        <h4>To</h4>
                        <label htmlFor="to_country">Country</label>
                        <input type="text" name="to_country" value="Belarus" required readOnly/>
                        <label htmlFor="to_city">City/Town</label>
                        <input type="text" name="to_city" required onChange={showOptionsTo}/>
                        <div className="options">
                            <ul>
                                {optionsTo ?
                                optionsTo.map(option => {
                                    return (
                                        <li key={Math.random(1000)} onClick={setInputToValue}>{option}</li>
                                    )
                                })
                                : null}
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <hr />

                <div className="form_details">
                    <h4>Sending</h4>
                    <span>Parcel type</span>
                    <button type="button" className="active">Household</button>
                    <button type="button">Pets</button>
                    <button type="button">Fragile</button>
                    
                    <div className="inputs_wrapper">
                        <div className="number">
                            <label htmlFor="num">Number</label>
                            <div className="number_content_wrapper">
                                <input type="text" name="num" defaultValue="1" required />
                                <div className="btns_wrapper">
                                    <button className="increase" type="button" onClick={numIncrease}>+</button>
                                    <button className="decrease" type="button" onClick={numDecrease}>-</button>
                                </div>
                            </div>
                        </div>

                        <div className="input_wrapper">
                            <label htmlFor="parcel_name">Parcel name</label>
                            <input type="text" name="parcel_name" required />
                        </div>

                        <div className="input_wrapper">
                            <label htmlFor="weight">Weight</label>
                            <input type="number" name="weight" required />
                        </div>

                        {inputsState ? <InputsToRender /> : null}
                    </div>

                </div>

                <hr />

                <div className="price_wrapper">
                    <button className="count_price" type="button" onClick={getPrice}>Count price</button>
                    {priceState ? 
                    <div className="final_price">
                        {console.log(myData)}
                        Delivery price is: <strong>{myData.price} $</strong>
                        <div className="btns_wrapper">
                            <button type="button">
                                <Link to="/services">Next</Link>
                            </button>
                            <button type="reset">Reset</button>
                        </div>
                        </div>
                    : null}
                </div>

            </form>
        </div>
    );
}


export default Form;
