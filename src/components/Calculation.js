import React, { useState, useContext } from 'react';
import Form from './Form';
import '../styles/css/calculation.css'


function Calculation() {
    const [formState, setFormState] = useState(false);

  return (
    <section>
        <div className="calculation_wrapper">
            <div className="steps_block">
                <h3>Delivery is easy with us!</h3>
                <ul className="steps_list">
                    <li><span>1</span>Price <br /> calculation</li>
                    <li><span>2</span>Conclusion <br /> of a treaty</li>
                    <li><span>3</span>Application <br /> sending</li>
                </ul>
            </div>
            <div className="get_started">
                <button onClick={() => setFormState(true)}>TRY NOW</button>
            </div>
        </div>
        {formState ? <Form /> : false}
    </section>
  );
}

export default Calculation;
