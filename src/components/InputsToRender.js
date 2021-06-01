import React from 'react';

function InputsToRender() {
    return (
        <>
            <div className="input_wrapper">
            <label htmlFor="length">Length</label>
            <input type="number" name="length" required />
            </div>

            <div className="input_wrapper">
                <label htmlFor="width">Width</label>
                <input type="number" name="width" required />
            </div>

            <div className="input_wrapper">
                <label htmlFor="height">Height</label>
                <input type="number" name="height" required />
            </div>
        </>
    );
}

export default InputsToRender;
